
const range = len => {

  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
  
}

const newPerson = (d) => {

    return {
      // ID:"",
      // Question:"",
      // Response:"",
      // NIST_ID:'',
      // IEC_ID:'',
      // Supporting_Value:'' 
    }
 
}

export default function makeData(lens) {

    const len = lens.length
    return range(len).map(d => {
      return {
        ...newPerson(lens[d])
      }
    })
}
 