import React from 'react'
import { useTable } from 'react-table'
import { Button } from 'react-bootstrap'
import './table.css'

const EditResponse = ({
  cell:{value},
  row: { index },
  column: { id },
  updateMyData,
  setFilter
  
}) => {
  const onChange = e => {
    if(e.target.value === "No"){
      setFilter(true)
    }else{
      setFilter(false)
    }
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

function Table({ columns, data, setFilter,updateMyData }) {

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
      setFilter,
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

  const [isFiltered,setIsFiltered] = React.useState(false)

  const [data,setData] = React.useState([])

    const onClickSubmitBtn = () =>{
      return JSON.stringify(data)
    }


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

    
    const setFilter = (bool) =>{
      setIsFiltered(bool)
    }

  const updateMyData = (rowIndex, columnId, value) => {

    setData(oldData =>
      oldData.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...oldData[rowIndex],
            [columnId]: value,
          }
        }
        return row
      })
    )
  }
  return (
    <>
      <Table
        columns={columns}
        data={isFiltered?props.items.filter(item => item.ID!=='A03'):props.items}
        updateMyData={updateMyData}
        setFilter ={setFilter}
      
      />
      <Button onClick={onClickSubmitBtn}>Submit</Button>
    </>
   
  )
}


