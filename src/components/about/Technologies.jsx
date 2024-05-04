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
const Technologies = () => {
	const [slidesPerView, setSlidesPerView] = useState(2);
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
				<SwiperSlide>hi</SwiperSlide>
				<SwiperSlide>hi</SwiperSlide>
				<SwiperSlide>hi</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Technologies;
