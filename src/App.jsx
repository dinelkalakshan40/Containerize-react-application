import { useState } from 'react'
import './App.css'

function App() {
  const[students,setStudents] = useState([]);
  const [data,setData] =useState({name:'',email:'',age:''});

  const changeData=(e)=>{
    setData({ ...data, [e.target.name]:e.target.value})
  }
  const saveStudent=()=>{
    setStudents([...students,data]);
    setData({name:'',email:'',age:''})
  }

  return (
    <>
      <h2>Add Student</h2>
      <input type="text"
          name="name"
          placeholder="Name"
          value={data.name}
          onChange={changeData}/>
      <input
          type="email"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={changeData}
        />
      <input
          type="number"
          name="age"
          placeholder="Age"
          value={data.age}
          onChange={changeData}
        />
        <br>
        </br>
        <br>
        </br>
        <button onClick={saveStudent} style={{
                  border: '2px solid green',
                  background: 'none',
                  padding: '8px 12px',
                  cursor: 'pointer'
          }}>saveStudent
        </button>
        
        <h3>Student List</h3>
        <ul>
        {students.map((student, index) => (
          <li key={index}>
            <strong>{student.name}</strong> : {student.email} : Age: {student.age}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
