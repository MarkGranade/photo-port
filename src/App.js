import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact";

function App() {
	const [categories] = useState([
		{
			name: "commercial",
			description:
				"Photos of grocery stores, food trucks, and other commercial projects",
		},
		{ name: "portraits", description: "Portraits of people in my life" },
		{ name: "food", description: "Delicious delicacies" },
		{
			name: "landscape",
			description: "Fields, farmhouses, waterfalls, and the beauty of nature",
		},
	]);

	const [currentCategory, setCurrentCategory] = useState(categories[0]);

	// We set the initial value of "contactSelected" to false. This is to prevent the contact form from showing when a user initially navigates to the homepage. The "Gallery" will display instead.
	const [contactSelected, setContactSelected] = useState(false);

	return (
		<div>
			<Nav
				categories={categories}
				setCurrentCategory={setCurrentCategory}
				currentCategory={currentCategory}
				contactSelected={contactSelected}
				setContactSelected={setContactSelected}
			></Nav>
			<main>
				{/* if contactSelected is false, render Gallery & About. ELSE render ContactForm */}
				{/* This shorthand is called a "ternary operator", identified with the "?" & ":" */}
				{!contactSelected ? (
					// "<> </>" are REACT FRAGMENTS- a shorthand abbreviation for "<React.Fragment> </React.Fragments>"
					// React Fragments are a useful tool in React to allow multiple elements to be grouped together.
					<>
						<Gallery currentCategory={currentCategory}></Gallery>
						<About></About>
					</>
				) : (
					<ContactForm></ContactForm>
				)}
			</main>
		</div>
	);
}

export default App;
