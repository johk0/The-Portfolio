import React from "react";
import { useState } from "react";
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
	const [slidesPerView, setSlidesPerView] = useState(2);
	const technologies = useSelector((res) => res.data.technologies);
	console.log(technologies[0].image);
	return (
		<div className="container section">
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
						return (
							<SwiperSlide key={ele.id}>
								<img src={ele.image} alt={ele.name} />
							</SwiperSlide>
						);
					})}
			</Swiper>
		</div>
	);
};

export default Technologies;
