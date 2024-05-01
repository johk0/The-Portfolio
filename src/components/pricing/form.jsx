import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import "./form.css";
import swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";

// form actions
// import { setName } from "../../store/slices/sendfomrs";
// import { setJob } from "../../store/slices/sendfomrs";
// import { setCountry } from "../../store/slices/sendfomrs";
// import { setPhone } from "../../store/slices/sendfomrs";
// import { setPlan } from "../../store/slices/sendfomrs";
// import { setMessage } from "../../store/slices/sendfomrs";

function GridComplexExample({ data }) {
	let [basic, premium, ultimate] = data;

	const [selectedOption, setSelectedOption] = useState(basic.title);
	const [formData, setFormData] = useState({
		name: "",
		job: "",
		country: "",
		phone: "",
		plan: "",
		message: "",
	});

	const handleOptionChange = (event) => {
		setSelectedOption(event.target.value);
	};

	const validationE = (e, state) => {
		let value = e.target.value;
		if (state === "phone") {
			let reg = /^\+?[0-9]+$/;
			if (!reg.test(value)) {
				e.target.classList.add("is-invalid");
			} else {
				e.target.classList.remove("is-invalid");
			}
		}
	};

	const handleFormstore = (type, data) => {
		setFormData({ ...formData, [type]: data });
	};

	const mySwal = withReactContent(swal);
	const closedbtn = (e) => {
		e.preventDefault();
		// axios({
		// 	method: "post",
		// 	url: "http://localhost:3001/send",
		// 	data: formData,
		// });
		// console.log(formData);
		swal
			.fire({
				title: "Good job!",
				// text: "You clicked the button!",
				icon: "success",
				html: `<svg class="whats-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
						<path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
						</svg>`,
				confirmButtonText: "Be fast with whatsapp!",
				confirmButtonColor: "#24cc63 ",
			})
			.then((result) => {
				if (result.isConfirmed) {
					window.open(
						`https://wa.me/201229254999?text=Hello I'm ${formData.name}%0AJob: ${formData.job}%0ACountry: ${formData.country}%0APhone: ${formData.phone}%0APlan: ${formData.plan}%0AMessage: ${formData.message}`
					);
				}
				console.log(result);
			});
	};

	return (
		<Form className="the-form mt-3" id="order-form">
			<Row className="mb-3">
				<Form.Group
					controlId="form__name"
					className="col-sm-12 col-md-6 mt-3 mb-3 form-input">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="text"
						onChange={(e) => handleFormstore("name", e.target.value)}
						placeholder="Enter your name"
					/>
				</Form.Group>

				<Form.Group
					controlId="form__jobTitle"
					className="col-sm-12 col-md-6 mt-3 mb-3 form-input">
					<Form.Label>Job Title</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter your job title"
						onChange={(e) => handleFormstore("job", e.target.value)}
					/>
				</Form.Group>
			</Row>

			<Row className="mb-4">
				<Form.Group
					controlId="form__country"
					className="col-sm-12 col-md-6 mt-3 mb-3 form-input">
					<Form.Label>Country</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter your country"
						onChange={(e) => handleFormstore("country", e.target.value)}
					/>
				</Form.Group>

				<Form.Group
					controlId="form__phone"
					className="col-sm-12 col-md-6 mt-3 mb-3 form-input">
					<Form.Label>Phone Number</Form.Label>
					<Form.Control
						type="text"
						placeholder="+20 122 925 4888"
						onChange={(e) => {
							validationE(e, "phone");
							handleFormstore("phone", e.target.value);
						}}
					/>
				</Form.Group>
			</Row>

			<div className="select-menu mb-3">
				<div className="radio-inputs">
					<label className="radio">
						<input
							type="radio"
							name="radio"
							value={basic.title}
							checked={selectedOption === basic.title}
							onChange={(e) => {
								handleOptionChange(e);
								handleFormstore("plan", e.target.value);
							}}
						/>
						<span className="name">{basic.title}</span>
					</label>
					<label className="radio">
						<input
							type="radio"
							name="radio"
							value={premium.title}
							checked={selectedOption === premium.title}
							onChange={(e) => {
								handleOptionChange(e);
								handleFormstore("plan", e.target.value);
							}}
						/>
						<span className="name">{premium.title}</span>
					</label>

					<label className="radio">
						<input
							type="radio"
							name="radio"
							value={ultimate.title}
							checked={selectedOption === ultimate.title}
							onChange={(e) => {
								handleOptionChange(e);
								handleFormstore("plan", e.target.value);
							}}
						/>
						<span className="name">{ultimate.title}</span>
					</label>

					<label className="radio">
						<input
							type="radio"
							name="radio"
							value="Custom"
							checked={selectedOption === "Custom"}
							onChange={(e) => {
								handleOptionChange(e);
								handleFormstore("plan", e.target.value);
							}}
						/>
						<span className="name">Custom</span>
					</label>
				</div>
			</div>
			<Row>
				<p className="notice">
					Notice : custom mean the cost we will determine it in the meeting
				</p>
			</Row>
			{/* 			
			<Row className="mb-3">
				<Form.Group as={Col} controlId="formGridEmail" className="mt-3 mb-3">
					<Form.Label>Email</Form.Label>
					<Form.Control type="phone" placeholder="Enter email" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formGridAddress1">
					<Form.Label>Address</Form.Label>
					<Form.Control placeholder="1234 Main St" />
				</Form.Group>
			</Row>

			<Row className="mb-3">
				<Form.Group as={Col} controlId="formGridCity">
					<Form.Label>City</Form.Label>
					<Form.Control />
				</Form.Group>

				<Form.Group as={Col} controlId="formGridState">
					<Form.Label>State</Form.Label>
					<Form.Select defaultValue="Choose...">
						<option>Choose...</option>
						<option>...</option>
					</Form.Select>
				</Form.Group>

				<Form.Group as={Col} controlId="formGridZip">
					<Form.Label>Zip</Form.Label>
					<Form.Control />
				</Form.Group>
			</Row>

			<Form.Group className="mb-3" id="formGridCheckbox">
				<Form.Check type="checkbox" label="Check me out" />
			</Form.Group>

			<Button variant="primary" type="submit">
				Submit
			</Button> */}
			<Row>
				<label
					htmlFor="exampleFormControlTextarea1"
					className="mt-3 form-label">
					Any comments?
				</label>
				<textarea
					className="form-control textarea1"
					id="exampleFormControlTextarea1"
					onChange={(e) => handleFormstore("message", e.target.value)}
					rows="3"></textarea>
			</Row>
			<button className="mt-4 btn send-btn " onClick={(e) => closedbtn(e)}>
				Finish
			</button>
		</Form>
	);
}

export default GridComplexExample;
