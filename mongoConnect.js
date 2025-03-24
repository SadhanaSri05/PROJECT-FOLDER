const { MongoClient } = require("mongodb");

// Replace with your connection string
const uri =
  "mongodb+srv://rithi0423:Swetharithu23@cluster0.xsk8b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");

    // Access the database
    const database = client.db("Sign_in");

    // Access the User_details collection
    const userDetailsCollection = database.collection("User_details");
    // Access the signup collection
    const signupCollection = database.collection("Sign_up");

    // Confirmation message
    console.log(
      "Successfully connected to the collections: User_details and signup."
    );
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
  } finally {
    await client.close();
  }
}

run().catch(console.error);
