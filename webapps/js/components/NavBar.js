import React from "react";

function Navbar({links})
{
	return (
		<nav className={"st-navbar"}>
			{
				links.map(data=>{
					return (
						<a href={data.link} key={data.content}>{data.content}</a>
					)
				})
			}
		</nav>
	)
}
export default Navbar