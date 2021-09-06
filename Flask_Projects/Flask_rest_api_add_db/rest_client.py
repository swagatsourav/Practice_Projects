import requests
base = 'http://127.0.0.1:5000/'

# # k = requests.get(base + "video/2")
# k = requests.post(base + "video/2",{"likes":10,"name":"swagat","views":30})
# print(k.json())
# input()
# s = requests.put(base + "video/1",{"likes":10,"name":"swagat","views":30})
# print(s.json())
# input()
# s = requests.put(base + "video/2",{"likes":15,"name":"sourav","views":30})
# print(s.json())
# input()
# k = requests.get(base + "video/2")
# print(k.json())
# input()
# k = requests.get(base + "video/6")
# print(k.json())

# k = requests.patch(base + "video/2",{"likes":5,"views":20,"name":"mani"})
# print(k.json())
# input()
# k = requests.get(base + "video/2")
# print(k.json())

d = requests.delete(base + "video/2")
print(d)

