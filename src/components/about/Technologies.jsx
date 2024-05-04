import React from "react";
import { useState } from "react";
import "./technologies.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	EffectCoverflow,
	FreeMode,
} from "swiper/modules";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useSelector } from "react-redux";
const Technologies = () => {
	const [slidesPerView, setSlidesPerView] = useState(4);
	const technologies = useSelector((res) => res.data.Technologies);
	console.log(technologies);
	return (
		<div className="technologies container section">
			<Swiper
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={slidesPerView}
				loop={true}
				pagination={{ clickable: true }}
				navigation={false}
				modules={[Pagination, Navigation, EffectCoverflow, FreeMode]}
				className="mySwiper">
				{technologies &&
					technologies.map((ele) => {
						console.log(ele);
						return (
							<SwiperSlide key={ele.id}>
								<img src={ele.image} alt={ele.name} className="tech-img" />
							</SwiperSlide>
						);
					})}
			</Swiper>
		</div>
	);
};

export default Technologies;
