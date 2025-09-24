# Proper way/Good way of app development is
- first the database connected succesfully
- second the server listen its api call...
- Most properly the database are connect to vscode or any compiler by async funtion-->which wait for the calls  and till the hold the function after get the calls the excution will run
# How to connect our database(MongoDB)
- mongodb+srv://JeevaNode:F3PFEIDjWIDJ7aGc@jeevanode.zywybm5.mongodb.net
- THis the user name and password of our cluster
- cluster it our own database..
- which is used to store and work on your project
- Free cluster on MongoDB offical website(MongoDB Atlas)
- Mongoose is the lib which helps to connect our MongoDB
- Install  it(npm install mongoose)
- Then import to our project....
- Then Connect our DB with the help of our CLuster(userID,password)
- xxx.Connect("Our Cluster URl")

# how to connect api to DB
- with the help of schema with used to create structure of our database object like it type,name and etc field
- then the schema into create model..
-mongoose.model-->which used to create monngoose method to model
- then ("user or something",schemaName)
- user or somthing for our database cluster name..
- then use the model to create our api to connect to the DB
- like post use to connect user to post some data to anywhere
- router path is helpful to use to handle the API
- then Create dummy data or  real data is OK
- first are used as an async function which is connect our DB so then data to store for using //aaa.save()//
await save()-->this function to store the data to the database
- becasuse the await hold the function at the  of save data complete its exection...
then call on the API it runs refresh DB ---> THe DB  Update...
