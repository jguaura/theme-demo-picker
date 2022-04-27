import { createContext, useState, useCallback ,Dispatch, SetStateAction } from "react";

interface Colors {
  primary: string,
  bgPrimary: string,
  bgHover: string
}

interface Setter {
  setter: (color: string) => void
}

const defaultValues = {
  primary: 'sss',
  bgPrimary: 'ddd',
  bgHover: 'mmm'
}

const ColorContext = createContext(defaultValues)

// const SetBookedBatchContext = createContext<null | React.Dispatch<React.SetStateAction<State>>>(null)

const ColorDispatchContext = createContext(null);

function ColorProvider({children}: any) {
  const [colors, setColors] = useState<Colors>(defaultValues)

  // const handler = useCallback(
  //   (color: Colors) => setColors(...colors, color), {..colors}
  // )

  return (
    <ColorContext.Provider value={colors}>
      <ColorDispatchContext.Provider value={null}>
        {children}
      </ColorDispatchContext.Provider>
    </ColorContext.Provider>
  )
}

export { ColorContext, ColorDispatchContext, ColorProvider }