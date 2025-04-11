import reducer from "./application";
import '@testing-library/jest-dom';
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { fireEvent, findByText, prettyDOM, getAllByTestId, getByAltText, getByPlaceholderText, getByText, waitForElementToBeRemoved, queryByText } from "@testing-library/react";
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

  it("loads data, books an interview and reduces the spots remaining for Monday by 1", async () => {
    const { container, debug } = render(<Application />);

    await findByText(container, "Archie Cohen");

    const appointments = getAllByTestId(container, "appointment");
    const appointment = appointments[0];

    fireEvent.click(getByAltText(appointment, "Add"));

    fireEvent.change(getByPlaceholderText(appointment, /enter student name/i), {
      target: { value: "Lydia Miller-Jones" },
    });
    fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));

    fireEvent.click(getByText(appointment, "Save"));

    // Confirm "Saving" shows up first
    expect(queryByText(appointment, "Saving")).toBeInTheDocument();

    // Wait for "Saving" to disappear
    await waitForElementToBeRemoved(() => queryByText(appointment, "Saving"));

    // Now confirm Lydia shows up
    await findByText(appointment, "Lydia Miller-Jones");

    const day = getAllByTestId(container, "day").find((day) => queryByText(day, "Monday"));

    expect(getByText(day, "no spots remaining")).toBeInTheDocument();

    // debug();

  });
});
