import { HexColorPicker } from 'react-colorful';
import { useState, useContext } from 'react';
import { ColorContext } from '../Context/ColorContext';

function SelectBackground() {
  const { colorState, switchColor } = useContext(ColorContext);
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div className='flex gap-[30px] relative w-max items-center p-4 rounded-lg bg-gray-100 shadow-md'>
      <div
        className='h-[50px] w-[50px] bg-skin-secondary rounded-[50%] cursor-pointer'
        onClick={() => setShowPicker(!showPicker)}
      ></div>
      <div className='text-skin-secondary font-semibold'>Color de fondo</div>
      {showPicker && (
        <div className='absolute top-[-205px]'>
          <HexColorPicker
            color={colorState.bgPrimary}
            onChange={(color) =>
              switchColor({ primary: colorState.primary, bgPrimary: color, bgHover: colorState.bgHover, bgLogo: colorState.bgLogo })
            }
          />
        </div>
      )}
    </div>
  );
}

export default SelectBackground;
