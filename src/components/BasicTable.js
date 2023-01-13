import React,{useMemo,useState} from 'react'
import { useTable } from 'react-table'
import {COLUMNS} from './columns'
import * as XLSX from 'xlsx'

import './table.css'

export const BasicTable = () => {

  
    const [items, setItems] = useState([]);

    const [option,setOption] = useState('Yes')
    


    const columns = useMemo(() => COLUMNS,[])

    const data = useMemo(() => items,[])

    // const data = useMemo(() => {
    //     return items
    // });


  const readExcelFile = async(file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        console.log(data);
  
        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setItems(d);
    });
  };

  
    const tableInstance = useTable({
        columns,
        data,
    })

    const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow} = tableInstance

    return(
        <>

        <input type="file" onChange ={(event) => {
          const xlFile = event.target.files[0]
          readExcelFile(xlFile)
        }}/>
        
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup =>
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column =>
                        <th {...column.getHeaderProps()}>
                            {column.render('Header')}
                        </th>
                    )
                    }
                </tr>)}
            </thead>
            <tbody {...getTableBodyProps()}>

                {rows.map(row =>{
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>
                                                {cell.render("Cell")}
                                    </td>
                                    
                                })}
                        </tr>

                    )
                })}
                
            </tbody>


        </table>

        </>

    )


}