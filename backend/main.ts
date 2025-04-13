//create account
//login to previous account

import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv'; 
import axios, { all } from 'axios';

dotenv.config(); 
const apiKey = process.env.API_KEY


const app = express();
const PORT = 8000;

// MONGODB SETUP
const username = process.env.MONGO_DB_USERNAME;
const password = process.env.MONGO_DB_PASSWORD;
const name = process.env.MONGO_DB_NAME;
const collection = process.env.MONGO_COLLECTION;

const { MongoClient, ServerApiVersion } = require('mongodb');
const databaseAndCollection = {db: name, collection:collection};
const uri = `mongodb+srv://${username}:${password}@trustfund.m1s3cf0.mongodb.net/?retryWrites=true&w=majority&appName=TrustFund`;
const client = new MongoClient(uri, {serverApi: ServerApiVersion.v1 });
// MONGODB SETUP

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//connect parent and dependent 

var customer_response;

function getRandomInt(): number {
    let min = Math.ceil(1000);
    let max = Math.floor(1000000);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

//make a customer - parent 
app.post('api/create-customer', async (_req, res) => {
    const customer_details = {
      "first_name": _req.body.first_name,
      "last_name": _req.body.last_name,
      "address": {
        "street_number": "",
        "street_name": "",
        "city": "",
        "state": _req.body.state,
        "zip": _req.body.zip,
      }
    };
  
    try {
      customer_response = (await axios.post(`http://api.nessieisreal.com/customers?key=${apiKey}`, customer_details)).data;
    } catch (error) {
      console.error('Error posting to Nessie API:', error.message);
      res.status(500).send({ error: 'Failed to create customer' });
    }

    //creating account
    var _id = customer_response.body._id
    var account_details = {
            "type": "Credit Card",
            "nickname": _req.body.type,
            "rewards": getRandomInt(),
            "balance": getRandomInt(),
            "account_number": _req.body.account_number
    }
    try {
        const account_response = (await axios.post(`http://api.nessieisreal.com/customers/${_id}/accounts?key=${apiKey}`, account_details)).data;
        if (_req.body.type == "Parent"){
          insertAccount(client, databaseAndCollection, account_response)
        }
        res.send(account_response)

      } catch (error) {
        console.error('Error posting to Nessie API:', error.message);
        res.status(500).send({ error: 'Failed to create account' });
      }

});

app.post('api/add-dependent'), async (_req, res) => {
  //dependent account already created, but not added independently to database
  addDependents(client, databaseAndCollection, _req.body.parent_id, _req.body.dependent_id)
}

// login logic
app.post('api/login', async (_req, res) => {
    let account_id = 0

    try {
        let all_customers = (await axios.post(`http://api.nessieisreal.com/customers?key=${apiKey}`)).data;

        account_id = all_customers.forEach(element => {
            if (element.first_name == _req.body.first_name){
                return element._id
            } 
        });


      } catch (error) {
        console.error('Error getting from Nessie API:', error.message);
        res.status(500).send({ error: 'Failed to get all customers' });
      }

      // gets account based on id and send to front end
      try{
        let customer_account = (await axios.get(`http://api.nessieisreal.com/accounts/${account_id}?key=${apiKey}`)).data;

        res.send(customer_account)

      }
      catch(error){
        console.error('Error getting from Nessie API:', error.message);
        res.status(500).send({ error: 'Failed to get customer account' });
      }
   
});

//sending money
app.post('api/transfer', async (_req, res) => {
    const currentDate = new Date();

    try {
        let transfer_details = {
            "amount": _req.body.amount,
            "medium": "balance",
            "payee_id": _req.body.payee_id,
            "transaction_date": currentDate,
            "status": "pending",
            "description": _req.body.description
          }

        let final_transfer = (await axios.post(`http://api.nessieisreal.com/accounts/${_req.body.payer_id}/transfers?${apiKey}`, transfer_details)).data;
        //sends transfer id back to user (display on front end)
        res.send(final_transfer._id)

      } catch (error) {
        console.error('Error getting from Nessie API:', error.message);
        res.status(500).send({ error: 'Failed to get all customers' });
      }
});


//add account to Database
async function insertAccount(client, databaseAndCollection, account){
    const toInsert = {
        "parentAccountInfo":account,
        "dependentAccountInfo":[]
    }
    await client.db(databaseAndCollection.db).collection(databaseAndCollection.collection).insertOne(toInsert);
}

//add dependent account id to parents account in database
async function addDependents(client, databaseAndCollection, parentAccountId, dependentAccountId){
    let filter = {parentAccountInfo: {"customer_id": parentAccountId }};

    await client.db(databaseAndCollection.db).collection(databaseAndCollection.collection).updateOne(
        filter, { $push: { dependentAccountInfo: dependentAccountId } } );
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});