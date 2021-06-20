import NewMeetUpForm from '../../components/meetups/NewMeetupForm'
function NewMeetUp() {
    function addMeetUpHandler(enteredMeetupdata) {
        console.log(enteredMeetupdata)

    }
    return <NewMeetUpForm onAddMeetup={addMeetUpHandler} />
}

export default NewMeetUp