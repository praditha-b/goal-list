import './App.css';
import GoalList from './components/GoalList/GoalList'
import NewGoal from './components/NewGoal/NewGoal';
import React, {useState} from 'react'

function App() {


const [goals,setGoal] = useState([
  {'id':'g1','text':'My goal number 1'},
  {'id':'g2','text':'My goal number 2'},
  {'id':'g3','text':'My goal number 3'},
]);

  const AddGoalHandler = (newGoal) => {
    setGoal((prevGoals) => {
      return prevGoals.concat(newGoal);
    })
  }

  

  return (
    <div>
   <h1 className='heading'>COURSE GOALS</h1>
   <NewGoal onAddGoal = {AddGoalHandler}></NewGoal>
   <GoalList goals= {goals}/>
   </div>
  );
}

export default App;
