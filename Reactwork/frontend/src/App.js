import { useState } from 'react'
import './App.css'
import ICard from './component/Icard'

function App() {
  const student=
  [{
name:"Ansh",
age:19,
barnch:"CSE",
college:"ABES Engineering College",
location:"Ghazibad"
  },
  {
name:"Ram",
age:20,
barnch:"CSE",
college:"ABES Engineering College",
location:"Ghazibad"
  },
  {
name:"Vansh",
age:20,
barnch:"IT",
college:"ABES Engineering College",
location:"Ghazibad"
  }
]
 

  return (
    <div>
    <h2>ABES Engineering College</h2>     
    <ICard name="Rahul Singh" age="20" branch="CSE" college="ABES Engineering College" location="Ghaziabad" />
    <ICard data={student} />

    </div>
  )
}

export default App