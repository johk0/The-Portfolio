import React from "react";
import { useSelector } from "react-redux";

const AboutBox = () => {
	let bigData = useSelector((res) => res.data?.about);
	let midData = bigData ? bigData[0] : null;
	let data = midData?.aboutInfo;

	let projectComplete = data?.["projectsCompleted"];
	let cupOfCoffee = data?.["cupsOfCoffee"];
	let statisfiedClients = data?.["satisfiedClients"];
	let NomineesWinner = data?.["nomineesWinner"];

	return (
		<div className="about__boxes grid">
			<div className="about__box">
				<i className="about__icon icon-fire"></i>
				<div>
					<h3 className="about__title">{projectComplete}</h3>
					<span className="about__subtitle"> Project Complete</span>
				</div>
			</div>

			<div className="about__box">
				<i className="about__icon icon-cup"></i>
				<div>
					<h3 className="about__title"> {cupOfCoffee}</h3>
					<span className="about__subtitle"> Cup of Coffee</span>
				</div>
			</div>

			<div className="about__box">
				<i className="about__icon icon-people"></i>
				<div>
					<h3 className="about__title">{statisfiedClients}</h3>
					<span className="about__subtitle"> Satisfied Clients</span>
				</div>
			</div>

			<div className="about__box">
				<i className="about__icon icon-badge"></i>
				<div>
					<h3 className="about__title">{NomineesWinner}</h3>
					<span className="about__subtitle">Nominees winner</span>
				</div>
			</div>
		</div>
	);
};
export default AboutBox;
