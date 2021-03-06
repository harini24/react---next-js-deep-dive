import { MongoClient } from 'mongodb'
import { key } from '../../key'
// /api/new-meetup

async function handler(req, res) {
    if (req.method === 'POST') {
        console.log("in new-meetup endpoint")
        const data = req.body;
        const { title, image, address, description } = data

        const client = await MongoClient.connect('mongodb+srv://harini:' + key + '@cluster0.yi7md.mongodb.net/meetups?retryWrites=true&w=majority')
        const db = client.db()

        const meetupsCollection = db.collection('meetups')

        const result = await meetupsCollection.insertOne(data)

        console.log(result)

        client.close()

        res.status(201).json({ message: 'meetup inserted!' })
    }
}

export default handler