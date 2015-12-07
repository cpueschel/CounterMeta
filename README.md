## Old site used to display data collected from Riot's Servers. 
### Not entirely finished since backend was broken on Riot's side with an update to that lead to the new API.


![Logo](https://raw.github.com/IClaudius/CounterMeta/master/media/images/Custom/path3143.png?token=5863881__eyJzY29wZSI6IlJhd0Jsb2I6SUNsYXVkaXVzL0NvdW50ZXJNZXRhL21hc3Rlci9tZWRpYS9pbWFnZXMvQ3VzdG9tL3BhdGgzMTQzLnBuZyIsImV4cGlyZXMiOjEzODQyOTcxMTd9--be99ffbbd44fce9fc89356e5b2284e13a7222df7)
===========
List of Website Services Used for Each Portion

Request, Compute, & Post Server (Data Mining Server)[]
Java Server Running On Tomcat [x]

Makes Requests to Riot's Servers:
Player Info [x]
Game Info [x]
League Info [x]
Stores
Stores Requested Information in MySQL on Amazon RDS 
Computes
At specific times runs a computation program that updates statistics
Return a Specific Request
Posts to web server if there is a request for information

MySQL Database running on Amazon RDS
Stores all information on players, games, etc.
Requests
Revives requests/posts from Data Mining Server
Revives requests from Django Webserver 

![Communication](https://raw.github.com/IClaudius/CounterMeta/master/databaseimg.png?token=5863881__eyJzY29wZSI6IlJhd0Jsb2I6SUNsYXVkaXVzL0NvdW50ZXJNZXRhL21hc3Rlci9kYXRhYmFzZWltZy5wbmciLCJleHBpcmVzIjoxMzg0Mjk2NDYzfQ%3D%3D--cb44c9ad7ffb67673fdf77324ffcfb5099994267)
Django Webserver [Heroku]
Webserver, contains all the computed web pages
Some pages are static
Computed Pages
Takes Requests from users for player/game info 
Requests information from MySQL database
If information does not exist, send request to Data Mining Server

Images & Video [Amazon S3]
Images and Video are served from S3 to minimize load on the webserver

