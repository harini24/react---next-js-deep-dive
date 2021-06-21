import { useRouter } from 'next/router'
import { Fragment } from 'react'
import NewMeetUpForm from '../../components/meetups/NewMeetupForm'
import Head from 'next/head'
function NewMeetUp() {
    const router = useRouter()
    async function addMeetUpHandler(enteredMeetupdata) {
        console.log(enteredMeetupdata)

        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupdata),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()

        console.log(data)
        router.replace('/')
    }
    return <Fragment>
        <Head>
            <title>Add a new meetup</title>
            <meta
                name="description"
                content='Browse a hige list of highly active react meetups'
            />
        </Head>
        <NewMeetUpForm onAddMeetup={addMeetUpHandler} />
    </Fragment>
}

export default NewMeetUp