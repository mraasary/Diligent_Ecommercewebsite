const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { MongoClient, ObjectId } = require('mongodb');
const sampleData = require('./sample-data.json');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

let dbClient = null;

async function connectDb() {
  const uri = process.env.MONGODB_URI;
  if (!uri) return null;
  const client = new MongoClient(uri);
  await client.connect();
  return client;
}

app.get('/api/products', async (req, res) => {
  try {
    if (dbClient) {
      const products = await dbClient.db().collection('products').find().toArray();
      return res.json(products);
    }
    res.json(sampleData.products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'server error' });
  }
});

app.get('/api/products/:id', async (req, res) => {
  try {
    const id = req.params.id;
    if (dbClient) {
      const product = await dbClient.db().collection('products').findOne({ _id: new ObjectId(id) });
      if (!product) return res.status(404).json({ error: 'not found' });
      return res.json(product);
    }
    const p = sampleData.products.find(x => String(x.id) === String(id) || x.id === id);
    if (!p) return res.status(404).json({ error: 'not found' });
    res.json(p);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'server error' });
  }
});

app.listen(PORT, async () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
  try {
    dbClient = await connectDb();
    if (dbClient) console.log('Connected to MongoDB');
    else console.log('No MONGODB_URI provided — using sample JSON data');
  } catch (err) {
    console.error('Failed to connect to MongoDB, falling back to sample data', err);
  }
});
