import {createContext} from 'react'
import { Colors } from './ContextInterfaces'

export type ColorContextProps = {
  colorState: Colors,
  switchColor: (colors: {primary: string, bgPrimary: string, bgHover: string, bgLogo: string}) => void;
}

export const ColorContext = createContext<ColorContextProps>({} as ColorContextProps)