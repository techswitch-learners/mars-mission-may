import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "../../components/Home";

test("renders Home Page", () => {
    render(<Home />);
    const homePageElement = screen.getByText("Home Page");
	
    expect(homePageElement).toBeInTheDocument();
});