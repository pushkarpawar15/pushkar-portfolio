import projects from "./Projects.json";
let pos = 0;
export default function ProjectCard() {
	const getPos = (p) =>{
		if(p==0)
		{
			pos=1;
			return "w-full max-w-screen-lg p-5 ml-5";
		}
		else
		{
			pos=0;
			return "w-full max-w-screen-lg p-5 ml-auto mr-5"
		}
	}

  return (
    projects.map((item)=>{
	    return <div class="w-full">
	<div class={getPos(pos)}>
	<div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-gray-200
	  p-4 flex flex-col justify-between leading-normal 
	  rounded-2xl shadow-2xl
	  ">
	<div class="text-gray-900  font-bold text-xl mb-2 flex">
		<i>{item.title}</i>
	</div>
	<div>
		{item.tech.map((i)=>
		{
			return <span class="inline-block bg-white rounded-full px-3 py-1 text-base font-semibold text-gray-700 mr-2 mb-2 w-fit">#{i}</span>
		})}
	</div>
	<div class="flex w-full">
		{item.description}
	</div>
	<div class="flex">
		<a href={item.link} target="_blank" class="ml-auto w-40 min-w-fit"><button class="ml-auto bg-blue-700 text-white rounded-md w-full hover:bg-black min-w-fit min-h-fit">Visit Repo</button></a>
	</div>
	</div>
	</div>
    </div>
    })
  )
}