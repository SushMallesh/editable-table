
import './App.css';

// import * as XLSX from "xlsx";

// import DisplayData from './components/DisplayData'

// import { useState } from 'react';

import { BasicTable } from './components/BasicTable';

function App() {

  // const [items, setItems] = useState([]);

  // const readExcelFile = async(file) => {
  //   const promise = new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsArrayBuffer(file);

  //     fileReader.onload = (e) => {
  //       const bufferArray = e.target.result;

  //       const wb = XLSX.read(bufferArray, { type: "buffer" });

  //       const wsname = wb.SheetNames[0];

  //       const ws = wb.Sheets[wsname];

  //       const data = XLSX.utils.sheet_to_json(ws);

  //       console.log(data);
        
  //       resolve(data);
  //     };

  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     };
  //   });

  //   promise.then((d) => {
  //     setItems(d);
  //   });
  // };



  return (
    <div className="App">
        <BasicTable/>
      {/* <h1>Questionnaire</h1>
      <header className="App-header">
        <input type="file" onChange ={(event) => {
          const xlFile = event.target.files[0]
          readExcelFile(xlFile)
        }}/>

        <DisplayData data ={items}/>
      
      </header> */}
    
    </div>
  );
}

export default App;
