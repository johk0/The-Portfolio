import React from "react";

const Card = (props) => {
	return (
		<div className="timeline__item">
			{props.logo !== undefined ? (
				<i className="timeline__logo timeline__icon">
					<img src={props.logo} alt="logo" />
				</i>
			) : (
				<i className={props.icon + " timeline__icon"}></i>
			)}

			<span className="timeline__data">{props.year}</span>
			<h3 className="timeline__title">{props.title}</h3>
			<p className="timeline__description">{props.desc}</p>
		</div>
	);
};
export default Card;
