import MeetupList from '../components/meetups/MeetupList'
import Layout from '../components/layout/Layout'
import { Fragment, useEffect, useState } from 'react'
import { MongoClient } from 'mongodb'
import { key } from '../key'
import Head from 'next/head'

function HomePage(props) {

    // const [loadedMeetup, setLoadedMeetups] = useState([])

    // useEffect(() => {
    //     setLoadedMeetups(DUMMY_MEETUPS)
    // }, []) not suitable for SOE


    // return <Layout>
    //     <MeetupList meetups={DUMMY_MEETUPS} />
    // </Layout>
    return <Fragment>
        <Head>
            <title>React Meetups using Next JS</title>
            <meta
                name="description"
                content='Browse a hige list of highly active react meetups'
            />
        </Head>
        <MeetupList meetups={props.meetups} />
    </Fragment>
}

// export async function getServerSideProps(context) {
//     const req = context.req
//     const res = context.res
//     //revalidated for every req
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }

// }

export async function getStaticProps() {
    //fetch data api

    const client = await MongoClient.connect('mongodb+srv://harini:' + key + '@cluster0.yi7md.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db()

    const meetupsCollection = db.collection('meetups')
    const meetups = await meetupsCollection.find().toArray()

    client.close()

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                description: meetup.description,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 10
    }
}

export default HomePage