import React from "react";
// "render" will render the component
// "cleanup" is used to remove components from the DOM to prevent memory leaking, as well as variable or data collisions between tests that could corrupt test results
import { render, cleanup } from "@testing-library/react";
// "jest-dom" offers access to custom matchers that are used to test DOM elements
import "@testing-library/jest-dom/extend-expect";
// import the component we will be testing
import About from "..";

afterEach(cleanup);

describe("About component", () => {
	// First Test
	it("renders", () => {
		render(<About />);
	});

	// Second Test
	it("matches snapshot DOM node structure", () => {
		// Use "asFragment" which returns a snapshot of the "About" component.
		const { asFragment } = render(<About />);
		expect(asFragment()).toMatchSnapshot();
	});
});
