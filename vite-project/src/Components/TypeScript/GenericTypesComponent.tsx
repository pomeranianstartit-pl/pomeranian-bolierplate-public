import { useState } from "react"

export const GenerictypesComponent = () => {
//typ generyczny dobrze sprawdza się w przypadku useState
  const [getCount,setCount]=useState<number|null>(0)
//typ generyczny oznaczająj te ostre nawiasy
  const arrayOfNumbersGenericTypes:Array <number>=[1,2,3,5]

  const arrayOfNumbersGenericTypes:Array <string>=['1','2','3','5']
  return('')
}