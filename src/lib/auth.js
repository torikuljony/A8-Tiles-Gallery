import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const DB_URL = process.env.DB_URL;
import dns from "dns";
dns.setDefaultResultOrder("ipv4first");


// 👉 Mongo Client
const client = new MongoClient(DB_URL);

// 👉 Safe DB connection
await client.connect();

const db = client.db();

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },

  database: mongodbAdapter(db, {
    client,
  }),
   socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        }, 
    },
});