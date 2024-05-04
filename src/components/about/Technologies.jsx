import React, { useEffect, useRef } from "react";
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
	Grid,
	Autoplay,
} from "swiper/modules";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/grid";
import "swiper/css/effect-coverflow";
import { useSelector } from "react-redux";

const Technologies = () => {
	const [slidesPerView, setSlidesPerView] = useState(4);
	const technologies = useSelector((res) => res.data.Technologies);

	useEffect(() => {
		if (window.innerWidth < 768) {
			setSlidesPerView(2);
		} else {
			setSlidesPerView(4);
		}
	}, []);

	return (
		<>
			<h2 className="section__title tech-section">Technologies</h2>
			<div className="technologies container section">
				<Swiper
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={slidesPerView}
					loop={true}
					autoplay={{
						delay: 1000,
						disableOnInteraction: false,
					}}
					pagination={{ clickable: true }}
					navigation={false}
					modules={[Pagination, Navigation, FreeMode, Autoplay]}
					effect={"coverflow"}
					speed={1000}
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
		</>
	);
};

export default Technologies;
