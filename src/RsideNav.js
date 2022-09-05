import { Transition } from '@headlessui/react';
import React,{useState} from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {ImMail4} from 'react-icons/im'
import { IconContext } from 'react-icons';
export default function RsideNav(props) {
  const [contactActive,setContactActive] = useState(false);

  return (
    <div class="w-full h-screen text-2xl">
	    <Transition as="ul"
        
        class="mt-28 text-center h-full"
        show={!contactActive}
        appear={true}
        enter="transition-all duration-1000"
        enterFrom="transform translate-y-full"
        enterTo="transform translate-y-0">
		    <li><button class="side-buttons min-w-fit min-h-fit" onClick={()=>{props.setNav(0);props.setNavStat()}}>Home</button></li><br/>
        <li><button class="side-buttons min-w-fit min-h-fit" onClick={()=>{props.setNav(1);props.setNavStat()}}>Projects</button></li><br/>
        <li><a href='https://drive.google.com/file/d/11tmHwQ9micTivpH7xeshQVFOz5pdtkcZ/view?usp=sharing' target="_blank" onClick={()=>{props.setNavStat()}}><button class="side-buttons min-w-fit min-h-fit" onCLick={()=>{props.setNavStat()}}>Resume</button></a></li><br/>
        <li><button class="side-buttons min-w-fit min-h-fit" onClick={()=>{setContactActive(!contactActive)}} >Contact</button></li><br/>
	    </Transition>
      <Transition as="div"
        class="mt-28 text-center flex-col h-full"
        show={contactActive}
        appear={true}
        enter="transition-all duration-1000"
        enterFrom="transform translate-y-full"
        enterTo="transform translate-y-0"
       >
        <button class="side-buttons min-w-fit min-h-fit" onClick={()=>{setContactActive(!contactActive)}} >Menu</button><br/><br/>
        <IconContext.Provider value={{size: "2.25em", className: "global-class-name" }}>
        <a href="https://github.com/pushkarpawar15" target="_blank"><button class="side-icons w-fit h-fit"><FaGithub/></button></a><br/><br/>
        <a href='https://www.linkedin.com/in/pushkar15' target="_blank"><button class="side-icons w-fit h-fit"><FaLinkedin/></button></a><br/><br/>
        <a href="mailto:pushkar.wk@gmail.com"> <button class="side-icons w-fit h-fit"><ImMail4/></button></a><br/><br/>
        </IconContext.Provider>
	    </Transition>
    </div>
  )
}