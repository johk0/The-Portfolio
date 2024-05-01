import React from "react";
import "./about.css";
import AboutBox from "./AboutBox";
import { useSelector } from "react-redux";
const About = () => {
	const authorImage2 = useSelector((res) => res.data.author?.["image-2"]);
	const cvLink = useSelector((res) => res.data.author?.cv);
	let skills = useSelector((res) => res.data?.skills);
	return (
		<section className="about container section" id="about">
			<h2 className="section__title">About Me</h2>
			<div className="about__container grid">
				<img src={authorImage2} className="about__img" alt="author image" />
				<div className="about__data grid">
					<div className="about__info">
						<p className="about_description">
							I am Youssef Ahmed, web developer from Egypt, Cairo. I hava rich
							experience in websites design, building and customization, also I
							am good at WordPress.
						</p>
						<a href={cvLink} download="Front-End Developer.pdf" className="btn">
							Download Cv
						</a>
					</div>
					<div className="about__skills grid">
						{skills &&
							skills.map((ele, index) => {
								let lang = Object.keys(ele)[0];
								let precentagee = ele[lang].percentage;
								// console.log(ele[lang]);
								let color = ele[lang].color;

								return (
									<div className="skills__data" key={index}>
										<div className="skills__title">
											<h3 className="skills__name">{lang}</h3>
											<span className="skills__number">{precentagee}%</span>
										</div>
										<div className="skills__bar">
											<span
												className="skills__percentage"
												style={{
													width: precentagee + "%",
													backgroundColor: color,
												}}></span>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			</div>
			<AboutBox />
		</section>
	);
};
export default About;
