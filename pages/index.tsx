import type { NextPage } from 'next';
import Head from 'next/head';
import Nav from '../components/Nav';
import SelectFont from '../components/SelectFont';
import SelectBackground from '../components/SelectBackground';
import SelectHover from '../components/SelectHover';
import SelectLogo from '../components/SelectLogo';
import { useContext } from 'react'
import { ColorContext } from '../Context/ColorContext';
import { getRGBColor } from '../utils';


const Home: NextPage = () => {
  const context = useContext(ColorContext)
  const altColor = getRGBColor(context.colorState.primary, 'primary')
  const secondaryColor = getRGBColor(context.colorState.bgPrimary, 'secondary')
  const hoverColor = getRGBColor(context.colorState.bgHover, 'accent')
  const logoColor = getRGBColor(context.colorState.bgLogo, 'logo')
  
  return (
    <div className='bg-skin-secondary h-screen'>
      <Head>
        <style>
          :root {`{${altColor} ${secondaryColor} ${hoverColor} ${logoColor}}}`}
        </style>
      </Head>
      <Nav />
      <div className='px-[50px] pt-[220px] flex justify-around'>
        <SelectFont />
        <SelectBackground />
        <SelectHover />
        <SelectLogo />
      </div>
    </div>
  );
};

export default Home;
