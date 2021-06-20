import MeetUpDetail from '../../components/meetups/MeetupDetails'
function MeetUpDetails(props) {
    return <MeetUpDetail
        address={props.address}
        title={props.title}
        image={props.image}
        description={props.description}
    />
}
export async function getStaticPaths() {

    // generate dynamic
    return {
        fallback: true,// generate page dynamically for ids not in path, if false throws 404 page not found error for ids not specifies
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            }
        ]
    }
}
export async function getStaticProps(context) {
    //fetch data api

    const meetupId = context.params.meetupId

    console.log(meetupId)// founf in terminal and not in console
    return {
        props: {
            id: meetupId,
            address: 'some add',
            title: 'first meetup',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Munnar_hillstation_kerala.jpg',
            description: 'some description for meetup'
        }
    }
}

export default MeetUpDetails