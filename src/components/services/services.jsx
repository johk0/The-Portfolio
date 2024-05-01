import React from "react";
import "./services.css";
import { useSelector } from "react-redux";
const Services = () => {
	let servicesData = useSelector((res) => res.data.services);
	// console.log(servicesData);
	return (
		<section className="services container section" id="services">
			<h2 className="section__title">Services</h2>
			<div className="services__container grid">
				{servicesData &&
					servicesData.map(({ id, image, title, description }) => {
						return (
							<div className="services__card" key={id}>
								<img src={image} alt={title} className="services__img" />
								<h3 className="services__title">{title}</h3>
								<p className="services__description">{description}</p>
							</div>
						);
					})}
			</div>
		</section>
	);
};
export default Services;
