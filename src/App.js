import React from 'react'
import { useState } from 'react'
import Home from './Home'
import MiniProjectCard from './MiniProjectCard'
import ProjectCard from './ProjectCard'
import RsideNav from './RsideNav'


export default function App() {
  const [count,setCount] = useState(0);
  const [navStatus,setNavStatus] = useState(true);
  const projectCard = <div class="w-5/6 flex-col justify-end"><h1 class="text-center text-5xl my-5">My Projects</h1><ProjectCard/><h1 class="text-center text-5xl my-5">My Mini Projects</h1><MiniProjectCard/></div>
  const home = <div class="w-5/6"><Home/></div>
  const getNavClass = () =>
  {
    if(navStatus) return "scale-0 md:scale-100 w-full md:w-1/6 md:block justify-end bg-orange-400 ml-auto fixed right-0"
    else return "md:scale-100 w-full md:w-1/6 md:block justify-end bg-orange-400 ml-auto fixed right-0"
  }
  return (
    <div class="flex-col">
      <button class="md:hidden" onClick={()=>{setNavStatus(!navStatus)}}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>
      </button>
    <div class="flex justify-between">
      {(count===0) ? home:projectCard}
      <div class={getNavClass()}>
        <RsideNav setNavStat={()=>{setNavStatus(!navStatus)}} setNav={(c)=>{setCount(c)}}/>
      </div>
    </div>
    </div>
  )
}

