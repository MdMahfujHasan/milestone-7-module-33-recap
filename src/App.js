import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const studentsName = ['Mahfuj', 'Rahim', 'Karim']
  const studenstAge = [22, 23, 24]
  const studentsInfo = { name: "Rasel", age: 20 }
  return (
    <div className="App">
      <Varsitys name="Rashed" age="22"></Varsitys>
      <Varsitys name="Rakib" age="23"></Varsitys>
      <Varsitys name={studentsName[0]} age={studenstAge[0]}></Varsitys>
      <Varsitys name={studentsName[1]} age={studenstAge[1]}></Varsitys>
      <Varsitys name={studentsInfo.name} age={studentsInfo.age}></Varsitys>
      <Students></Students>
    </div>
  );
}

function Varsitys(props) {
  const varsitysStyle = {
    border: '2px solid blue',
    color: 'green',
    backgroundColor: 'yellow',
    padding: '20px',
    margin: '10px'
  }

  return (
    <div style={varsitysStyle}>
      <h1>Daffodil Institute of IT</h1>
      <h3>Dolphin Goli, Kalabagan</h3>
      <h4>My Name is {props.name}</h4>
      <h4>My age is {props.age}</h4>
    </div>
  )
}

function Students(props) {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setStudents(data))
  }, [])
  // map students
  // {
  // students.map(student => <li><Varsitys name={student.name} age={student.age} key={student.id}></Varsitys></li>)
  // }

  const friends = [{ name: 'Reyad', age: 21 }, { name: 'Asif', age: 22 }, { name: 'Saju', age: 23 }]
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1)
  return (
    <div>
      <button onClick={handleClick}>Increase</button>
      {/* <button onClick={}>Decrease</button> */}
      <h4>Click to increase numbers: {count}</h4>
      <NoOfSubjects subjects={count}></NoOfSubjects>
      <NoOfSubjects subjects={count + 1}></NoOfSubjects>
      {
        friends.map(friend => <li><Varsitys name={friend.name} age={friend.age}></Varsitys></li>)
      }
      
    </div>
  )
}

function NoOfSubjects(props) {
  return <h4>My address is {props.subjects}</h4>
}
export default App;
