import React, { useEffect, useState } from "react";
import "./portoflio.css";
import { useSelector } from "react-redux";
const Portoflio = () => {
	let portoflioData = useSelector((res) => res.data.work);

	const [items, setItems] = useState(
		portoflioData === undefined ? null : portoflioData
	);
	const [categories, setCategories] = useState([]);
	// console.log(portoflioData);

	useEffect(() => {
		setItems(portoflioData);
		extractCategories();
	}, [portoflioData]);

	const filterItem = (categoryItem) => {
		if (categoryItem === "All") {
			setItems(portoflioData);
			console.log(categoryItem);
		} else {
			const updatedItem = portoflioData.filter((curEle) => {
				return curEle.category === categoryItem;
			});
			setItems(updatedItem);
		}
		handleActiveCategory(categoryItem);
	};
	const handleActiveCategory = () => {
		let elements = document.querySelectorAll(".work__item");
		console.log(elements);
	};

	const extractCategories = () => {
		if (portoflioData) {
			let uniqueCategories = [];
			portoflioData.forEach((ele) => {
				if (!uniqueCategories.includes(ele.category)) {
					uniqueCategories.push(ele.category);
				}
			});

			setCategories(uniqueCategories);
		}
	};

	return (
		<section className="work container section" id="portoflio">
			<h2 className="section__title">Recent Works</h2>

			<div className="work__filters">
				<span
					className="work__item"
					onClick={(e) => filterItem(e.target.textContent)}>
					All
				</span>
				{categories.length > 0 &&
					categories.map((ele, index) => {
						let categoryName = ele;
						return (
							<span
								className="work__item"
								key={index}
								onClick={(e) => filterItem(e.target.textContent)}>
								{categoryName}
							</span>
						);
					})}
			</div>

			<div className="work__container grid">
				{items &&
					items.map((ele) => {
						const { id, image, title, category, link } = ele;
						// console.log("from inside");
						return (
							<div className="work__card" key={id}>
								<div className="work__thumbnail">
									<img src={image} alt={category} className="work__img" />
									<div className="work__mask"></div>
								</div>
								<span className="work__category">{category}</span>
								<h3 className="work__title">{title}</h3>
								<a href={link} target="_blank" className="work__button">
									<i className="icon-link work__button-icon"></i>
								</a>
							</div>
						);
					})}
				{portoflioData && !items && <p>loading...</p>}
			</div>
		</section>
	);
};
export default Portoflio;
