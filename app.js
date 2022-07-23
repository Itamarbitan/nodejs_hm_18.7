const POST = 3000;
const express = require('express');
const app = express();
app.set('view engine', 'ejs')
const path = require('path');
const staticWebsite = path.join(__dirname , './views')

app.use(express.static(staticWebsite))


bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const { ObjectId } = require('mongodb');

let user;

app.post('' , (req , res) => {
    console.log(req.body);
    user = req.body;
    res.render('index')
    main();
});

app.get('' , (req , res) => {
    console.log(req.query.name);
    res.render('index')}
    );

app.get('/form' , (req , res) => {
    user = req.query;
    main();
    res.render('signup')}
    );


app.listen(POST , () => console.log('the app is listening to port 3000!!'));


async function main(){
    const MongoClient = require('mongodb').MongoClient;
    uri = "mongodb://localhost:27017";
    const instans = new MongoClient(uri)
    try {
        await instans.connect();

        console.log('im connected');
        console.log(user)

        await insertProject(instans , user)


    }
    catch(err){
        console.log('there is an error' + err)
    }
    finally{
        instans.close();
        console.log('the connection was closed')
    }
}


async function insertProject(instans , newProject){
    const res = await instans.db("hm_18_7").collection("form1").insertOne(newProject);
    console.log(res);
}




