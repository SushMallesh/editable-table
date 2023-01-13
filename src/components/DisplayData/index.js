
import './index.css'
import { Component } from 'react'

class DisplayData extends Component{


    render(){

        const {data} = this.props

        const {rowNum} = data
        console.log(rowNum)

        return (
            <table>
                <thead>
                    <th>ID</th>
                    <th>Question</th>
                    <th>Response Values</th>
                    <th>NIST ID</th>
                    <th>IEC ID</th>
                    <th>Supporting Evidence</th>
                </thead>
                <tbody>
                    {data.map(item =>
                        <tr key={item.ID}>
                            <td>{item.ID}</td>
                            <td>{item.Question}</td>
                            <td>
                                <select>
                                <option value="Yes">YES</option>
                                <option value="No">NO</option>
                                </select>
                            </td>
                            <td>{item.NIST_ID}</td>
                            <td>{item.IEC_ID}</td>
                            <td>
                                <input type="file"/>
                            </td>
    
                        </tr>
                        
                        )}
                
                </tbody>
    
            </table>  
        )
    

    }

    

}

export default DisplayData