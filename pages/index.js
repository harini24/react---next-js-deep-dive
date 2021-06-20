import MeetupList from '../components/meetups/MeetupList'
import Layout from '../components/layout/Layout'
import { useEffect, useState } from 'react'

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        titile: ' A first meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Munnar_Top_station.jpg/220px-Munnar_Top_station.jpg',
        address: 'some address 5, some city abc'
    },
    {
        id: 'm2',
        titile: ' A second meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Munnar_Top_station.jpg/220px-Munnar_Top_station.jpg',
        address: 'some address 5, some city abc'
    }
]

function HomePage(props) {

    // const [loadedMeetup, setLoadedMeetups] = useState([])

    // useEffect(() => {
    //     setLoadedMeetups(DUMMY_MEETUPS)
    // }, []) not suitable for SOE


    // return <Layout>
    //     <MeetupList meetups={DUMMY_MEETUPS} />
    // </Layout>
    return <MeetupList meetups={props.meetups} />
}

export async function getStaticProps() {
    //fetch data api
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 10
    }
}

export default HomePage