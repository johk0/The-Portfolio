import React, { useEffect } from "react";
import swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./order.css";
import Form from "./form";
import { useSelector } from "react-redux";
const Order = (props) => {
	const mySwal = withReactContent(swal);
	let data = useSelector((res) => res.data.pricing);

	useEffect(() => {
		if (props.clickState >= 1) {
			setTimeout(() => {
				handleFormSubmit();
			}, 0);
		}
	}, [props.clickState]);

	const handleFormSubmit = async () => {
		await mySwal.fire({
			title: "Make an order!",
			text: "Any text that you consider useful for the form",
			icon: "info",
			html: <Form data={data} />,
			showCancelButton: true,
			showConfirmButton: false,
			showLoaderOnConfirm: true,

			preConfirm: () => {
				return {
					formData: document.getElementById("yourFormId"), // Serialize form data
				};
			},
		});
		// .then((result) => {
		// 	if (result.isConfirmed) {
		// 		swal.fire({
		// 			title: "Good job!",
		// 			text: "You clicked the button!",
		// 			icon: "success",
		// 		});
		// 	}
		// });
	};

	return null; // or any JSX if needed
};

export default Order;
