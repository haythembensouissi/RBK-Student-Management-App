import './App.css';
import React,{useState,useEffect} from 'react';
import axios from "axios"



function App() {
  const [cohorts,setCohorts]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/cohorts").then(response=>setCohorts(response.data)).catch(err=>console.log(err))
})
const [currentCohort,setCurrentCohort]=useState(null)
const onchangehandler=e=>{
  console.log(e.target.value)
setCurrentCohort(e.target.value)
}
const handlesubmit=(query)=>{
  axios.post("http://localhost:5000/cohorts",query).then((response)=>{
    console.log(response.data)
  }).catch(err=>console.log(err))
}
const handleupdate=(id)=>{
  let numnber=prompt("change number of students")
  axios.put(`http://localhost:5000/cohorts/${id}`,numnber).then(result=>console.log(result)).catch(err=>{
    console.log(err)
  })

}
const handledelete=(id)=>{
  axios.delete(`http://localhost:5000/cohorts/${id}`).then(result=>{
    console.log("delete is invoked from the button")
console.log(result)
  }).catch(err=>console.log(err))
}
  return (
    <div className="App">
    
    <input type="text" placeholder='add new cohort here ...' onChange={onchangehandler}></input>
    <button onClick={handlesubmit}> add cohort</button>
    <ul>
    {cohorts.map((cohort,index)=>(
        <div key={cohort._id} num={index}>
        <h1  >{cohort.name}</h1>
        <h3>{cohort.leader}</h3>
        <p>{cohort.numberofstudents} students</p>
        <button onClick={()=>handleupdate(cohort._id)}>update</button>
        <button onClick={handledelete}>delete cohort</button>
        </div>
        )
        )
    }
        
        
        </ul>
    </div>
  );
}

export default App;
