

import * as XLSX from 'xlsx'

export default getItems = async(e)=>{

    const file = e.target.files[0]
    const data = await file.arrayBuffer()

    const workbook = XLSX.readFile(data)

    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
    const jsonData = XLSX.utils.sheet_to_json(worksheet,{
    defval:''
    })

    return jsonData

}