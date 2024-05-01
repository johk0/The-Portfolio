import React from "react";
import "./home.css";
import SocialLinks from "./SocialLinks";
import ScrollDown from "./scrollDown";
import Shapes from "./Shapes";
import { useSelector } from "react-redux";
import Inspect from "./Inspect";

const Home = () => {
	const data = useSelector((state) => state.data);
	const authorImage = data.author?.["image-1"];
	const authorName = data.author?.name;
	const authorJobTitle = data.author?.jobTitle;
	const inspectState = data.author?.inspect;

	// console.log(data);

	return (
		<>
			{inspectState && <Inspect state={inspectState} />}
			<section className="home container" id="home">
				<div className="intro">
					<img src={authorImage} className="home__img" alt="author image" />
					<h1 className="home__name">{authorName}</h1>
					<span className="home__education">{authorJobTitle}</span>
					<SocialLinks />
					<a href="#contact" className="btn">
						Work With Me
					</a>
					<ScrollDown />
				</div>
				<Shapes />
			</section>
		</>
	);
};

export default Home;
