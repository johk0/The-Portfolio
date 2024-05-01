import React, { useEffect } from "react";
import "./App.css";
import Sidebar from "./components/sidbar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/services";
import Resume from "./components/resume/Resume";
import Portoflio from "./components/portoflio/Portoflio";
import Pricing from "./components/pricing/Pricing";
import Testimonilas from "./components/testimonials/Testimonilas";
import Blog from "./components/bolg/Blog";
import Contact from "./components/contact/Contact";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./store/slices/alldata";

function App() {
	const state = useSelector((res) => res.data);
	// console.log(state);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchData());
		// console.log(state);
	}, []);
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Sidebar />
							<main className="main">
								<Home />
								<About />
								<Services />
								<Resume />
								<Portoflio />
								<Pricing />
								<Testimonilas />
								{/* <Blog /> */}
								<Contact />
							</main>
						</>
					}
				/>
				<Route path="/hi" element={<About />} />
			</Routes>
		</>
	);
}

export default App;
