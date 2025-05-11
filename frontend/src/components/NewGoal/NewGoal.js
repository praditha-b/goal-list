import React, { useState } from 'react'
import './NewGoal.css'

const NewGoal = props => {

    const [enteredText, setEnteredText]= useState('');

    const addGoalHandler = event => {
        event.preventDefault();

        const NewGoal = {
            id: Math.floor(Math.random()*1000).toString(),
            text: enteredText
        }
        props.onAddGoal(NewGoal);
        setEnteredText('');
        console.log(NewGoal);
    }

    const textChangeHandler = event => {
        setEnteredText(event.target.value);
    }


    return(<div>
        <form className='inputForm' onSubmit={addGoalHandler} >             
            <input className='inputGoal' type='text' value={enteredText} onChange={textChangeHandler} placeholder='Enter Goal'></input>
            <button type='submit' className='addGoalButton'  >Add Goal</button>
        </form>  
    </div>);
}

export default NewGoal;
