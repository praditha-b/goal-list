import './App.css';
import GoalList from './components/GoalList/GoalList'

function App() {

  const goals = [
    {'id':'g1','text':'My goal number 1'},
    {'id':'g2','text':'My goal number 2'},
    {'id':'g3','text':'My goal number 3'},
]

  return (
    <div>
   <h1 className='heading'>COURSE GOALS</h1>
   <GoalList goals= {goals}/>
   </div>
  );
}

export default App;
