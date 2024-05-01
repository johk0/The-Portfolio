import React, { useEffect } from "react";
import swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const Inspect = ({ state }) => {
	const mySwal = withReactContent(swal);
	useEffect(() => {
		if (state == "true") {
			function handleKeyDown(event) {
				if (
					(event.ctrlKey && event.keyCode === 67) || // Ctrl+C
					(event.ctrlKey && event.keyCode === 86) || // Ctrl+V
					(event.ctrlKey && event.keyCode === 85) || // Ctrl+U
					(event.metaKey && event.altKey && event.keyCode === 73) || // Cmd+Option+I (Mac)
					(event.metaKey && event.altKey && event.keyCode === 67) // Cmd+Option+C (Mac)
				) {
					swal.fire({
						title: "You can't you're not Joe!",
						icon: "error",
						text: "This website is protected by the developer to prevent unauthorized access.",
					});
					event.preventDefault(); // Prevent the default action
				}
			}

			document.addEventListener("keydown", handleKeyDown);

			return () => {
				document.removeEventListener("keydown", handleKeyDown);
			};
		}
	}, []);

	return null;
};

export default Inspect;
