import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./testimonilas.css";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	EffectCoverflow,
	FreeMode,
} from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonilas = () => {
	const testimonialData = useSelector((res) => res.data.reviews);
	const [slidesPerView, setSlidesPerView] = useState(2);

	// handle resize
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 768) {
				setSlidesPerView(1);
				console.log(window.innerWidth);
			} else {
				setSlidesPerView(2);
			}
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [setSlidesPerView]);
	// console.log(testimonialData);
	return (
		<section className="testimonails container section">
			<h2 className="section__title">Clients & Reviews</h2>

			<div className="testimonials__container">
				<div className="swiper">
					<Swiper
						effect={"coverflow"}
						grabCursor={true}
						centeredSlides={true}
						slidesPerView={slidesPerView}
						loop={true}
						pagination={{ clickable: true }}
						coverflowEffect={{
							rotate: 50,
							stretch: 0,
							depth: 100,
							modifier: 1,
							slideShadows: true,
						}}
						// pagination={{
						// 	type: "progressbar",
						// }}
						navigation={false}
						modules={[Pagination, Navigation, EffectCoverflow, FreeMode]}
						className="mySwiper">
						{/*  */}
						{testimonialData &&
							testimonialData.map(({ id, image, title, subtitle, comment }) => {
								//
								// console.log(id);
								return (
									<SwiperSlide key={id}>
										<div className="testimonials__item">
											<div className="thumb">
												<img src={image} alt="" />
											</div>
											<h3 className="testimonials__title">{title}</h3>
											<span className="subtitle">
												<i className="icon-briefcase"></i>
												{subtitle}
											</span>
											<div className="comment">{comment}</div>
										</div>
									</SwiperSlide>
								);
							})}
					</Swiper>
				</div>
				{/* <Swiper
					pagination={{
						type: "progressbar",
					}}
					navigation={true}
					modules={[Pagination, Navigation]}
					className="mySwiper">
					<SwiperSlide>slide 1</SwiperSlide>
					<SwiperSlide>slide 1</SwiperSlide>
					<SwiperSlide>slide 1</SwiperSlide>
				</Swiper> */}
			</div>
		</section>
	);
};
export default Testimonilas;
