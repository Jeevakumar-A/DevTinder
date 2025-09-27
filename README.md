# Proper way/Good way of app development is
- first the database connected succesfully
- second the server listen its api call...
- Most properly the database are connect to vscode or any compiler by async funtion-->which wait for the calls  and till the hold the function after get the calls the excution will run
# How to connect our database(MongoDB)

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


# express.json()
- express.json is a build in middleware function in express
the parse incomming requests with JSON payloads
- and makes the data availablity under req.body
- without the express.json()-->is undefined..
- how it run by the postman sends a POST/PUT request with JSON data..

# Database schema advance
- "type" is fix what type of datatype what from the user like String,Number etc...
- "maxlength","minlenght"-->used to apply the maximum, minimum length of the password or username
- validata function handle the validate data on the data field, also validatefunction if you write then the update pov need the runValidator:true handle the exact validation of the validation function suppose it fail it throws an errror..
-"timestanps" is the other object for the schema which {schema data},{timestamps:true}-->it store the created data and if you update any thing it also store with date time and secs..

# validator library:-
- Install validator-npm i validator
- import to our code by const validator =require("validator")
- is used to validator all schema level/code level datas validatable or not
- in schema level-->validate(value){
    if(!validator.isXXXX(value)){
        throw new Error("XXXXXXX"+value)
    }
}
-also router pov--->:id-->for params to navigate the data based on the "id"
- req.body._id==>req.params._id is good practice.

# Encrypting password

- first of all encrypt password with the help of the library is bcrypt is used to encrypt our password which is in unreadable format..
- bcrypt always return a promises
- if change password to encrypt methoda bcrypt.hash(Plaintext,saltrounds)
- saltrounds is random stuff-->random character are simultinoulsy loop its data
- also the bcryt.compare(plaintext,hash)-->which used to compare the password and it return a boolean
