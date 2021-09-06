from flask import Flask , request
from flask_restful import Api,Resource,reqparse,abort
#https://www.youtube.com/watch?v=GMppyAPbLYk

app = Flask(__name__)
api = Api(app)
user_info = {1:{"age":30,"name":"Swagat Sourav"},2:{"age":33,"name":"Mani Nayak"}}
videos = {1:{"name":"Mouja hi Mouja","star":"Saheed Kapoor","Movie":"3 Idiots","status":"superhit"}}
class HelloWorld(Resource):
    def get(self):
        return {"id":"Hello World"}

    def post(self):
        return {"data":"posted"}
class HelloWorld1(Resource):
    def get(self,name,age):
        return {"Name":name,"Age":age}
class UserInfo(Resource):
    def get(self,id):
        return user_info[id]

#Raw way to get the submited data from the rest client via request module
class UpdateVideoInfo(Resource):
    def put(self,video_id):
        videos[video_id] = dict(request.form)
        print(videos)
        return videos[video_id]

#Automatic way to serialize in a format and get the submited data from the rest client 
video_put_args = reqparse.RequestParser()
video_put_args.add_argument("name",type=str, help="Video name required",required=True)
video_put_args.add_argument("views",type=int, help="Views of the video required",required=True)
video_put_args.add_argument("likes",type=int, help="Likes on the video requierd",required=True)
new_videos={}

def abort_if_video_unavailable(video_id):
    if video_id not in new_videos:
        abort(404, message="The requested video is not available")
def abort_if_video_not_found_in_put(video_id):
    if video_id not in new_videos:
        abort(404, message="The video is not present.Please use post to create a new one... ")
def abort_if_video_available(video_id):
    if video_id in new_videos:
        abort(409, message="The video is already there.If you want to modify the content use put request.")
# def abort_if_video_available(video_id):
#     if video_id in new_videos:
#         abort(409, message="The video is already there.")

class Video(Resource):
    def get(self, video_id):
        abort_if_video_unavailable(video_id)
        return new_videos[video_id]

    def put(self,video_id):
        abort_if_video_not_found_in_put(video_id)
        args = video_put_args.parse_args()
        if new_videos[video_id] == args:
            abort(408, message="The same data already exist.")
        new_videos[video_id] == args
        return {video_id:args}, 201

    def post(self,video_id):
        abort_if_video_available(video_id)
        args = video_put_args.parse_args()
        new_videos[video_id] = args
        return {video_id:args}, 201

    def delete(self,video_id):
        abort_if_video_unavailable(video_id)
        del new_videos[video_id]
        return "",204

api.add_resource(HelloWorld,"/helloworld")
api.add_resource(HelloWorld1,"/helloworld/<string:name>/<int:age>")
api.add_resource(UserInfo,"/userbyid/<int:id>")
api.add_resource(UpdateVideoInfo,"/update/<int:video_id>")
api.add_resource(Video,"/video/<int:video_id>")

if __name__ == '__main__':
    app.run(debug=True)

