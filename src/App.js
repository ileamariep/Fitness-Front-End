import React, { useState } from 'react'
import './App.css';
import { Header, Pages }
  from './components';

function App() {
  const [activityList, setActivityList] = useState([]);

  const [currentUser, setCurrentUser] = useState(false);

  const [routines, setRoutines] = useState([
    {
      id: "",
      creatorId: "",
      isPublic: true,
      name: "",
      goal: "",
      creatorName: "",
      activities: [{ id: '', name: '', description: '', duration: '', count: '', routineActivityId: '', routineId: '' }],
    },
  ]);
  const [myRoutines, setMyRoutines] = useState([]);
  const [results, setResults] = useState([]);
  const [aRoutine, setSingleRoutine] = useState([
    {
      id: "",
      creatorId: "",
      isPublic: true,
      name: "",
      goal: "",
      creatorName: "",
      activities: [{ id: '', name: '', description: '', duration: '', count: '', routineActivityId: '', routineId: '' }],
    }
  ])

  return (
    <div className="App">
      <Header
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <main>
        <Pages
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          activityList={activityList}
          setActivityList={setActivityList}
          routines={routines}
          setRoutines={setRoutines}
          myRoutines={myRoutines}
          setMyRoutines={setMyRoutines}
          results={results}
          setResults={setResults}
          aRoutine={aRoutine}
          setSingleRoutine={setSingleRoutine}

        />
      </main>
      <footer>Fitness Tracker</footer>

    </div>
  );
}

export default App;
