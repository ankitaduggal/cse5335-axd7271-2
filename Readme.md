1) What is your external data source used to populate your Heroku data sources? 

Ans- For the external data source, I made use of json-generator.com to make data entries.

2) What are the Heroku toolbelt commands to execute the scripts?
Ans-
*)Download the app from the git repository 
*)Place the app in the users folder 
*)Open commnand prompt 
*)Set the path to the application 
*)Type in the following commands:
"npm install mongoose" 
"node mongo.js"--This inserts the data into the database 
"npm install readline_sync"
Next,"node mongo_query1.js"-- this is used to set the primary key
"node mongo_query2.js"-- this is used to retreive the specific data 
"npm install redis"
"node redis.js" -- This inserts the data into the database
"node redis_query1.js"-- Used to set the primary key
"node redis_query2.js"-- this retreives the data
"npm install pg"
"node postgre.js"-- This inserts the data into the database
"node postgre_query1.js"--Used to set the primary key
"node postgre_query2.js"--this retreives the data


3) What aspect of the implementation did you find easy, if any, and why? 

Ans- What I really liked and found the easiest was creating the database and inserting the data. Also executing the commands was easy too.

4) What aspect of the implementation did you find hard, if any, and why?

Ans- The place that I got stuck on and the most time that took was the insertion of data into the Redis database. It was giving me an error that took me 
very long to resolve.