import React, { useState } from "react";
import "./pricing.css";
import { useSelector } from "react-redux";
import Order from "./Order";

const Pricing = () => {
	let pricingData = useSelector((res) => res.data.pricing);
	let [clickState, setClickState] = useState(0);
	let [selectedPrice, setSelectedPrice] = useState(null);

	const handleOrder = (event, price) => {
		event.preventDefault();
		setSelectedPrice(price);
		setClickState(clickState + 1);
	};

	return (
		<section className="pricing container section">
			<h2 className="section__title">Pricing Plans</h2>

			<div className="pricing__container grid">
				{pricingData &&
					pricingData.map((ele, index) => {
						let { title, advantages, disadvantages, image, price, discount } =
							ele;
						let [discountTitle, discountValue] = discount;

						discountValue = price - price * (discountValue / 100);

						return (
							<div
								className={
									"pricing__item" + (title === "premium" ? " special" : "")
								}
								key={index}>
								{title === "premium" ? (
									<span className="badge">Recommended</span>
								) : null}
								<img src={image} alt="" className="pricing__img" />
								<h3 className="pricing__plan">{title}</h3>
								{title === "basic" ? (
									<p className="pricing__title">
										A Simple option but powerful to manage your business website
									</p>
								) : null}
								{title === "premium" ? (
									<p className="pricing__title">
										Unlimited product including app integration and more
										features
									</p>
								) : null}
								{title === "ultimate" ? (
									<p className="pricing__title">
										A wise option for large companies and individuals
									</p>
								) : null}
								<div className="advatages">
									{advantages.map((ele, index) => {
										return (
											<p key={index}>
												<span>✅</span> {ele}
											</p>
										);
									})}
									{disadvantages &&
										disadvantages.map((ele, index) => {
											return (
												<p key={index}>
													<span>❌</span> {ele}
												</p>
											);
										})}
								</div>
								<h3 className="price">
									<em>$</em> {price} <span>Month</span>
								</h3>
								<a
									href=""
									className="btn"
									onClick={(event) => {
										handleOrder(event, price);
									}}>
									Get Started
								</a>
							</div>
						);
					})}
			</div>
			<div className="custom__order">
				<a
					href=""
					className="btn "
					onClick={(event) => handleOrder(event, "custom-order")}>
					Custom Order
				</a>
			</div>
			{clickState > 0 && (
				<Order price={selectedPrice} clickState={clickState} />
			)}
		</section>
	);
};
export default Pricing;
