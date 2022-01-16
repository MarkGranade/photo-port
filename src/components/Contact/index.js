import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

const ContactForm = () => {
	// Hook that'll manage the form data.
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errorMessage, setErrorMessage] = useState("");
	const { name, email, message } = formState;

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formState);
	};
	// console.log(formState);

	// Sync the internal state of the componenet "formState" with the user input from the DOM.
	// The "onChange" event listener will ensure that the "handleChange" function fires whenever a keystroke is typed into the input field for "name".
	const handleChange = (e) => {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			console.log(isValid);

			// isValid conditional statement
			if (!isValid) {
				setErrorMessage("Your email is invalid.");
			} else {
				setErrorMessage("");
			}
		} else {
			// Checking the "message" & "name" form element values.
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage("");
			}
		}

		// Using the "setFormState" function to update the "formState" value for the "name" property.
		// We use the spread operator, "...formState", so we can retain the other key-value pairs in this object. Without the spread operator, the "formState" object would be overwritten to only contain the " name: value" key pair.
		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}

		// console.log("errorMessage", errorMessage);
	};

	return (
		<section>
			<h1>Contact me</h1>
			<form id="contact-form" onSubmit={handleSubmit}>
				<div>
					{/* Due to keywords reserved in JavaScript, we need to replace the "for" attribute in the <label> element to "htmlFor" */}
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						name="name"
						defaultValue={name}
						onBlur={handleChange}
					/>
				</div>

				<div>
					<label htmlFor="email">Email address:</label>
					<input
						type="email"
						name="email"
						defaultValue={email}
						onBlur={handleChange}
					/>
				</div>

				<div>
					<label htmlFor="message">Message:</label>
					<textarea
						name="message"
						rows="5"
						defaultValue={message}
						onBlur={handleChange}
					/>
					{errorMessage && (
						<div>
							<p className="error-text">{errorMessage}</p>
						</div>
					)}
				</div>

				<button type="submit">Submit</button>
			</form>
		</section>
	);
};

export default ContactForm;
