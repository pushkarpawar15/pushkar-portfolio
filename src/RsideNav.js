import React from 'react'

export default function RsideNav(props) {
  return (
    <div class="w-full h-screen text-2xl">
	    <ul class="mt-28 text-center">
		    <li><button class="side-buttons min-w-fit min-h-fit" onClick={()=>{props.setNav(0);props.setNavStat()}}>Home</button></li><br/>
        <li><button class="side-buttons min-w-fit min-h-fit" onClick={()=>{props.setNav(1);props.setNavStat()}}>Projects</button></li><br/>
        <li><button class="side-buttons min-w-fit min-h-fit" onCLick={()=>{props.setNavStat()}}>About me</button></li><br/>
	    </ul>
    </div>
  )
}