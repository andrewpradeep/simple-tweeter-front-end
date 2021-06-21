import React , {useState} from "react";

export default function Home()
{
	const [name,setName] = useState("pradeep");
	const changeName = ()=>{
		setName("Andrew");
	}

	return <React.Fragment>
				<div>{name}</div>
				<button onClick={changeName}>Change Name</button>
			</React.Fragment>
}