export const COLUMNS = 
    [
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
        Cell:()=>{}
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
        Cell:()=>{}
      },
    ]

 