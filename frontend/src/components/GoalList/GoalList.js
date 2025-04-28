import React from 'react'
import './GoalList.css';


const GoalList = props  => {
    console.log(props.goals)
    return (
        <div>        
        <ul className='goalList'>
        {
            props.goals.map(goal => {return <li key={goal.id}>{goal.text}</li>})
        }
        </ul>
        </div>
    );
}

export default GoalList