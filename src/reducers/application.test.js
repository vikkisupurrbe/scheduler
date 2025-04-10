import reducer from "./application";
import '@testing-library/jest-dom';
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import Application from "../components/Application"

describe("Application Reducer", () => {
  it("thows an error with an unsupported type", () => {
    expect(() => reducer({}, { type: null })).toThrow();
  });

  it("defaults to Monday and changes the schedule when a new day is selected", () => {
    const { findByText } = render(<Application />);
  
    return findByText("Monday");
  });

  it("defaults to Monday and changes the schedule when a new day is selected", () => {
    const { queryByText, findByText } = render(<Application />);
  
    return findByText("Monday").then(() => {
      fireEvent.click(queryByText("Tuesday"));
      expect(queryByText("Leopold Silvers")).toBeInTheDocument();
    });
  });
});
