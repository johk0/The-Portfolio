import React, { useEffect } from "react";
import swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Inspect = ({ state }) => {
	const mySwal = withReactContent(swal);

	useEffect(() => {
		if (state === "true") {
			function handleKeyDown(event) {
				if (
					(event.ctrlKey && event.keyCode === 67) || // Ctrl+C
					(event.ctrlKey && event.keyCode === 86) || // Ctrl+V
					(event.ctrlKey && event.keyCode === 85) || // Ctrl+U
					(event.metaKey && event.altKey && event.keyCode === 73) || // Cmd+Option+I (Mac)
					(event.metaKey && event.altKey && event.keyCode === 67) // Cmd+Option+C (Mac)
				) {
					event.preventDefault(); // Prevent the default action
					mySwal.fire({
						title: "You can't, you're not Joe!",
						icon: "error",
						text: "This website is protected by the developer to prevent unauthorized access.",
					});
				}
			}

			function handleContextMenu(event) {
				event.preventDefault(); // Prevent the context menu from appearing
				mySwal.fire({
					title: "You can't, you're not Joe!",
					icon: "error",
					text: "This website is protected by the developer to prevent unauthorized access.",
				});
			}

			document.addEventListener("keydown", handleKeyDown);
			document.addEventListener("contextmenu", handleContextMenu);

			return () => {
				document.removeEventListener("keydown", handleKeyDown);
				document.removeEventListener("contextmenu", handleContextMenu);
			};
		}
	}, []);

	return null;
};

export default Inspect;
