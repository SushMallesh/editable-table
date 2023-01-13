export const COLUMNS =[

    {
        Header:'ID',
        accessor:'ID'
    },
    {
        Header:'Question',
        accessor:'Question'
    },
    {
        Header:'Response',
        accessor:(rowData,rowIndex,setOption) =>{

            return <select onChange={(e) => setOption(e)}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
        },
       
    },

    {
        Header:"NIST ID",
        accessor:"NIST_ID"
    },
    {
        Header:"IEC ID",
        accessor:"IEC_ID"
    },
    {
        Header:"Supporting_Evidence",
        accessor:(rowData,rowIndex) =>{
           
            return <input type="file"/>
        }
    }

    // {
    //     Header:'Any Comment',
    //     // accessor:'Title',
    //     accessor:(rowData,rowIndex) =>{
    //         return <input type="text"/>
    //     }
      
       
    // }
    // {
    //     Header:'IEC_ID',
    //     accessor:'iec_id'
    // },
    

]