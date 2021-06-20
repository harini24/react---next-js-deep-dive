import MeetUpDetail from '../../components/meetups/MeetupDetails'
function MeetUpDetails() {
    return <MeetUpDetail
        address='some add'
        title='first meetup'
        image='https://upload.wikimedia.org/wikipedia/commons/a/ad/Munnar_hillstation_kerala.jpg'
        description='some description'
    />
}
export async function getStaticProps() {
    //fetch data api
    return {
        props: {
            address='some add',
            title='first meetup',
            image='https://upload.wikimedia.org/wikipedia/commons/a/ad/Munnar_hillstation_kerala.jpg',
            description='some description'
        },
        revalidate: 10
    }
}

export default MeetUpDetails