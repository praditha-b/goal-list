import React from 'react'
import './GoalList.css';


const GoalList = props  => {
    console.log(props.goals)
    return (
        <div className='goalListContainer'>      
        <form className='inputForm'> 
            
            <input className='inputGoal' type='text' placeholder='Enter Goal'></input>
        </form>  
        <ul className='goalList'>
        {
            props.goals.map(goal => <li key={goal.id}>{goal.text}</li>)
        }
        </ul>
        </div>
    );
}

export default GoalList