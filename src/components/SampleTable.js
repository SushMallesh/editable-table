import React from 'react'
import { useTable } from 'react-table'
// import makeData from './makeData'

const EditResponse = ({
  cell:{value},
  row: { index },
  column: { id },
  updateMyData,
}) => {

  const onChange = e => {
    updateMyData(index, id, e.target.value)
  }

  const ResponseValues = value.split(",")
  return <select onChange={onChange} defaultValue={ResponseValues[0]}>
          {ResponseValues.map(response=>
          <option key={response} value={response}>{response}</option>
          )}
         </select>
}

const EditEvidenceCell = ({
  row: { index },
  column: { id },
  updateMyData, 
}) => {
  const onChange = e => {
       updateMyData(index, id, e.target.files[0])
  }

  return <input type="file" name="upload file" onChange={onChange}/>
}

function Table({ columns, data, updateMyData }) {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      updateMyData,
    },
  )

  return (

    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
              prepareRow(row);
              return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {   
                
                return (
                  
                    <td {...cell.getCellProps()}>
                        {cell.render('Cell')}
                    </td> 
                    )
                    })}
                   
          </tr>)})}
        </tbody>
      </table>
    </>
   
  )

}
export const SampleTable =(props)=> {

  const {items} = props

  const [data,setData] = React.useState([])

  // const [data,setData] = React.useState(()=>makeData([]))

    React.useEffect(()=>{
      setData(items.map(item=>({
        ID:item.ID,
        Question:item.Question,
        Response_Values:item.Response_Values.split(",")[0],
        NIST_ID:item.NIST_ID,
        IEC_ID:item.IEC_ID,
        Supporting_Evidence:item.Supporting_Evidence
      })))
    },[items])

  console.log("data",data)

  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'ID',
      },
      {
        Header: 'Question',
        accessor: 'Question',
      },
      {
        Header: 'Response',
        accessor:"Response_Values",
        Cell:EditResponse
      },
      {
        Header: 'NIST ID',
        accessor:"NIST_ID",
      },
      {
        Header: 'IEC ID',
        accessor:"IEC_ID",
      },
      {
        Header: 'Supporting Evidence',
        accessor:"Supporting_Evidence",
        Cell:EditEvidenceCell
      },
    ],[])

 
  const updateMyData = (rowIndex, columnId, value) => {
    
    setData(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          }
        }
        return row
      })
    )
  }
  return (
    <>
      {/* <input type="file" name="excel file" onChange={(e)=>onHandleFile(e)}/> */}
        <Table
          columns={columns}
          data={props.items}
          updateMyData={updateMyData}
        
        />
    </>
   
  )
}


