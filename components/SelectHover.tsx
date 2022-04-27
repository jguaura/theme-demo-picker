import { HexColorPicker } from 'react-colorful';
import { useState, useContext } from 'react';
import { ColorContext } from '../Context/ColorContext';

function SelectHover() {
  const { colorState, switchColor } = useContext(ColorContext);
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div className='flex gap-[30px] relative w-max items-center p-4 rounded-lg bg-gray-100 shadow-md'>
      <div
        className='h-[50px] w-[50px] bg-skin-accent rounded-[50%] cursor-pointer'
        onClick={() => setShowPicker(!showPicker)}
      ></div>
      <div className='text-skin-accent font-semibold'>Color de hover</div>
      {showPicker && (
        <div className='absolute top-[-205px]'>
          <HexColorPicker
            color={colorState.bgHover}
            onChange={(color) =>
              switchColor({ primary: colorState.primary, bgPrimary: colorState.bgPrimary, bgHover: color, bgLogo: colorState.bgLogo })
            }
          />
        </div>
      )}
    </div>
  );
}

export default SelectHover;
