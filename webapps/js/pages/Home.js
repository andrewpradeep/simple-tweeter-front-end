import Navbar from "../components/NavBar";
import React from "react";

export default function Home()
{
	const links = [{link : "#profile",content : "Profile"},{link : "#about",content : "About"}]
	return (
		<div className={"st-home"}>
			<Navbar links={links}></Navbar>
		</div>
	)
}