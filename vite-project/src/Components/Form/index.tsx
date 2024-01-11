import { useState } from "react"

export const Form =()=>{
  const[value,setValue]=useState<string>('')

  const handleChangeInput =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setValue(e.target.value)
  }
  return <div>
    <h1>Form</h1>
    <div>
      <input type="text" value={value} onChange={handleChangeInput} />
      <p>{value}</p>
    </div>
  </div>
}