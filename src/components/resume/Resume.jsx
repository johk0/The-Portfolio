import React from "react";
import "./resume.css";
import { useSelector } from "react-redux";
import Card from "./Card";
const Resume = () => {
	const resumeData = useSelector((res) => res.data.experience);
	// console.log(resumeData);

	return (
		<section className="resume container section" id="resume">
			<h2 className="section__title">Experience</h2>

			<div className="resume__container grid">
				<div className="timeline grid">
					{resumeData &&
						resumeData.map((val, id) => {
							if (val.category === "education") {
								return (
									<Card
										key={id}
										icon={val.icon}
										title={val.title}
										year={val.year}
										desc={val.desc}
										logo={val.logo}
									/>
								);
							}
						})}
				</div>
				<div className="timeline grid">
					{resumeData &&
						resumeData.map((val, index) => {
							if (val.category === "experience") {
								return (
									<Card
										key={index}
										icon={val.icon}
										title={val.title}
										year={val.year}
										logo={val.logo}
										desc={val.desc}
									/>
								);
							}
						})}
				</div>
			</div>
		</section>
	);
};
export default Resume;
