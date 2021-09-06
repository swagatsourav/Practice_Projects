from flask import Flask , request
from flask_restful import Api,Resource,reqparse,abort, fields , marshal_with
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
api = Api(app)
db = SQLAlchemy(app)

#Defining models

class VideoModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100),nullable=False)
    views = db.Column(db.Integer,nullable=False)
    likes = db.Column(db.Integer,nullable=False)

    def __repr__(self):
        return f"name = {self.name}, views = {self.views}, likes = {self.likes} "

# do it once - db.create_all()

#Automatic way to serialize in a format and get the submited data from the rest client 
video_put_args = reqparse.RequestParser()
video_put_args.add_argument("name",type=str, help="Video name required",required=True)
video_put_args.add_argument("views",type=int, help="Views of the video required",required=True)
video_put_args.add_argument("likes",type=int, help="Likes on the video requierd",required=True)

video_patch_args = reqparse.RequestParser()
video_patch_args.add_argument("name",type=str, help="Video name required")
video_patch_args.add_argument("views",type=int, help="Views of the video required")
video_patch_args.add_argument("likes",type=int, help="Likes on the video requierd")


resource_fields = {
    'id': fields.Integer,
    'name':fields.String,
    'views':fields.Integer,
    'likes':fields.Integer
}

class Video(Resource):
    
    @marshal_with(resource_fields)
    def get(self, video_id):
        result = VideoModel.query.filter_by(id = video_id).first()
        if result:
            return result
        else:
            abort(404, message="Could not find video with that id.")

    @marshal_with(resource_fields)
    def put(self,video_id):
        args = video_put_args.parse_args()
        result = VideoModel.query.filter_by(id = video_id).first()
        if result:
            if  all([result.name == args['name'],
                    result.views == args['views'],
                    result.likes == args['likes']]):
                abort(409, message="The same data already exist in DB.No modification required")
            else:
                result.name = args['name']
                result.views == args['views']
                result.likes == args['likes']
                db.session.add(result)
                db.session.commit()
                return result, 201
        else:
            abort(404, message="The video not found. Please use post to create entry")
    @marshal_with(resource_fields)
    def patch(self,video_id):
        args = video_patch_args.parse_args()
        result = VideoModel.query.filter_by(id = video_id).first()
        if result:
            if args['name']:
                result.name = args['name']
            if args['views']:
                result.views = args['views']
            if args['likes']:
                result.likes = args['likes']
            db.session.commit()
            return result
        else:
            abort(404, message="The video not found. Please use post to create an entry")

    @marshal_with(resource_fields)
    def post(self,video_id):
        args = video_put_args.parse_args()
        result = VideoModel.query.filter_by(id = video_id).first()
        if result:
            abort(409, message="The same data already exist in DB.Please add a new record")
        entry = VideoModel(id=video_id,name=args['name'],views = args['views'],likes=args['likes'])
        db.session.add(entry)
        db.session.commit()
        return entry, 201

    def delete(self,video_id):
        result = VideoModel.query.filter_by(id = video_id).first()
        if not result:
            abort(404, message="The video not found.")
        else:
            db.session.delete(result)
            db.session.commit()
            return '', 204
api.add_resource(Video,"/video/<int:video_id>")

if __name__ == '__main__':
    app.run(debug=True)

