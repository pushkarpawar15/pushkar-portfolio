import projects from "./MiniProjects.json";
let pos = 0;
export default function MiniProjectCard() {
	const getPos = (p) =>{
		if(p===0)
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
	    return <div class="w-full min-w-fit">
	<div class={getPos(pos)}>
	<div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-gray-200
	  p-4 flex flex-col justify-between leading-normal 
	  rounded-2xl shadow-2xl
	  ">
	<div class="text-gray-900  font-bold text-xl mb-2 flex">
		<i>{item.title}</i>
	</div>
	<div class="flex-col">
		{item.projects.map(
			(i)=>{
				return <div class="flex p-3">
					{i.item}
					<a href={i.link} target="_blank" class="ml-auto min-w-fit min-h-fit"><button class="ml-auto bg-blue-700 text-white rounded-md md:w-40 hover:bg-black">Visit Repo</button></a>
					</div>
			}
		)}
	</div>
	</div>
	</div>
    </div>
    })
  )
}