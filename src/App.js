import React from 'react'
import './App.css'
import {SampleTable} from './components/SampleTable'
import * as XLSX from 'xlsx'
// import {getItems} from './components/getItems'

function App() {

  const [data,setData] = React.useState([])

  const onHandleFile = async(e)=>{

    const file = e.target.files[0]
    const data = await file.arrayBuffer()

    const workbook = XLSX.readFile(data)

    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
    // const jsonData = XLSX.utils.sheet_to_json(worksheet,{
    // defval:''
    // })

    const jsonData = XLSX.utils.sheet_to_json(worksheet)
    
    setData(jsonData)

  }
  return (
    <div className="App">
      <input type="file" name="excel file" onChange={(e)=>onHandleFile(e)}/>
      <SampleTable items={data}/>
    </div>
  )
}

export default App
