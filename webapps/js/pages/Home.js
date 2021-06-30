import Navbar from "../components/NavBar";
import React,{useState} from "react";

function useLinks(links)
{
	const [count,setCount] = useState(0);
	const [link,changelink] = useState(links[count]);
	function forwardLink()
	{
		if(links[count+1])
		{
			setCount(count+1);
			changelink(links[count+1])
		}
	}

	function backwardLink()
	{
		if(links[count-1])
		{
			setCount(count-1);
			changelink(links[count-1]);
		}
	}
	return[link,forwardLink,backwardLink]
}

export default function Home()
{
	const links = [{link : "#profile",content : "Profile"},{link : "#about",content : "About"}];
	const [link,forwardlink,backwardlink] = useLinks(links);
	return (
		<div className={"st-home"}>
			<Navbar links={links} selected={link}></Navbar>
			<button onClick={()=>forwardlink()}>Forward</button>
			<button onClick={()=>backwardlink()}>Backward</button>
		</div>

	)
}