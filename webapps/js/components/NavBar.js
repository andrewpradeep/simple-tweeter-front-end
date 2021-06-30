import React from "react";

function Navbar({links,selected})
{
	return (
		<nav className={"st-navbar"}>
			{
				links.map(data=>{
					return (
						<a href={data.link} key={data.content} className={selected.link === data.link ? "sel" : ""}>{data.content}</a>
					)
				})
			}
		</nav>
	)
}
export default Navbar