import { HexColorPicker } from 'react-colorful';
import { useState, useContext } from 'react';
import { ColorContext } from '../Context/ColorContext'



function SelectFont() {
  const {colorState, switchColor} = useContext(ColorContext)
  const [showPicker, setShowPicker] = useState(false);
  
  return (
    <div className='flex gap-[30px] relative w-max items-center p-4 rounded-lg bg-gray-100 shadow-md'>
      <div className='h-[50px] w-[50px] bg-skin-primary rounded-[50%] cursor-pointer' onClick={() => setShowPicker(!showPicker)}></div>
      <div className='text-skin-primary font-semibold'>Color de fuente</div>
      {showPicker && (
        <div className='absolute top-[-205px]'>
          <HexColorPicker color={colorState.primary} onChange={(color) => switchColor({primary: color, bgPrimary: colorState.bgPrimary, bgHover: colorState.bgHover, bgLogo: colorState.bgLogo})} />
        </div>
      )}
    </div>
  );
}

export default SelectFont;
