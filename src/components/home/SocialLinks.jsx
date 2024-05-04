import React from "react";
import { useSelector } from "react-redux";

const SocialLinks = () => {
	const date = useSelector((state) => state.data?.author);
	// console.log(date);
	return (
		<div className="home__socials">
			<a
				href={date && date.instagram}
				className="home__social-link instagram-icon"
				target="_blank">
				<i className="fa-brands fa-instagram"></i>
			</a>

			<a
				href={date && date.twitter}
				className="home__social-link twitter-icon"
				target="_blank">
				<i className="fa-brands fa-twitter"></i>
			</a>

			<a
				href={date && date.linkedIn}
				className="home__social-link linkedin-icon"
				target="_blank">
				<i className="fa-brands fa-linkedin"></i>
			</a>

			<a
				href={date && date.whatsapp}
				className="home__social-link whatsapp-icon"
				target="_blank">
				<i className="fa-brands fa-whatsapp"></i>
			</a>
			<a
				href={date && date.facebook}
				className="home__social-link facebook-icon"
				target="_blank">
				<i className="fa-brands fa-square-facebook"></i>
			</a>
		</div>
	);
};
export default SocialLinks;
