import MeetUpDetail from '../../components/meetups/MeetupDetails'
import { MongoClient, ObjectId } from 'mongodb'
import { key } from '../../key'

function MeetUpDetails(props) {
    return <MeetUpDetail
        address={props.meetupData.address}
        title={props.meetupData.title}
        image={props.meetupData.image}
        description={props.meetupData.description}
    />
}
export async function getStaticPaths() {

    const client = await MongoClient.connect('mongodb+srv://harini:' + key + '@cluster0.yi7md.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db()
    console.log("in getStaticPaths")
    const meetupsCollection = db.collection('meetups')
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray()
    client.close()

    return {
        fallback: true,// generate page dynamically for ids not in path, if false throws 404 page not found error for ids not specifies
        paths: meetups.map(meetup => ({ params: { meetupId: meetup._id.toString() } }))
    }
}
export async function getStaticProps(context) {
    //fetch data api
    const meetupId = context.params.meetupId

    const client = await MongoClient.connect('mongodb+srv://harini:' + key + '@cluster0.yi7md.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db()

    const meetupsCollection = db.collection('meetups')
    const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) })

    client.close()


    console.log(meetupId)// founf in terminal and not in console
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            }
        }
    }
}

export default MeetUpDetails