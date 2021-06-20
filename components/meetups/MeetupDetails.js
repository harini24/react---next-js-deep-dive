import { Fragment } from 'react'
import classes from './MeetupDetails.module.css'
function MeetUpDetail(props) {
    return <section className={classes.detail}>
        <img src={props.image} alt='a first meet up' />
        <h1>{props.title}</h1>
        <address>{props.address}</address>
        <p>{props.description}</p>
    </section>
}
export default MeetUpDetail