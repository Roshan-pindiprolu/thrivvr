import { MongoClient } from 'mongodb';

const client = new MongoClient("mongodb://localhost:27017")
await client.connect();

const db = client.db("mongo_nodejs_db")
const userCollection = db.collection('users')

userCollection.insertOne({ name: "Roshan", age: 23})