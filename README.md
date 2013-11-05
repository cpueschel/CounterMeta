CounterMeta
===========
List of Website Services Used for Each Portion

Request, Compute, & Post Server (Data Mining Server)[
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

![Communication](https://raw.github.com/IClaudius/CounterMeta/blob/master/databaseimg.png)
Django Webserver [Heroku]
Webserver, contains all the computed web pages
Some pages are static
Computed Pages
Takes Requests from users for player/game info 
Requests information from MySQL database
If information does not exist, send request to Data Mining Server

Images & Video [Amazon S3]
Images and Video are served from S3 to minimize load on the webserver

