import { useRouter } from 'next/router'
import NewMeetUpForm from '../../components/meetups/NewMeetupForm'
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
    return <NewMeetUpForm onAddMeetup={addMeetUpHandler} />
}

export default NewMeetUp