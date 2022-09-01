import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

import isMobile from "../lib/isMobile";
import isBot from "../lib/isBot";
import isTablet from "../lib/isTablet";
import Arge from '../components/Navbar/Arge';




export default function HomePage() {

  const Desktop = dynamic(() => import("/components/Navbar/Desktop"));
  const Mobile = dynamic(() => import("/components/Navbar/Mobile"));
  const Arge = dynamic(() => import("/components/Navbar/Arge"));

  const [device, setDevice] = useState(true);
  useEffect(() => {
    setDevice(isMobile())
  },[]);

  
  return<>
  Arge: <Arge/>
  {
    !isBot()? 
    (isMobile()?<Mobile/>:<Desktop/>)
     :null
  }


  </>



}
