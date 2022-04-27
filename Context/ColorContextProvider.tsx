import { ColorContext } from "./ColorContext"
import { Props, Colors } from "./ContextInterfaces"
import { useState } from "react"

const initialState: Colors = {
  primary: '#ff0000',
  bgPrimary: '#9b9b9b',
  bgHover: '#7981f1',
  bgLogo: '#232323'
}; 


export const ColorProvider = ({children}: Props) => {

  const [colorState,setColorState] = useState(initialState)

  const switchColor = (colors: {primary: string, bgPrimary:string, bgHover: string, bgLogo: string}) => {
    setColorState(colors)
  }

  return (
    <ColorContext.Provider value={{
      colorState,
      switchColor
    }}>
      {children}
    </ColorContext.Provider>
  )
}