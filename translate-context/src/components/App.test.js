import "@testing-library/jest-dom/extend-expect";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  cleanup,
  container
} from "@testing-library/react";
import React from "react";
import App from "./App";

beforeEach(() => render(<App />));
afterEach(cleanup);

test("loads App home", async () => {
  // const {debug } = render(<App />);

  const selectLanguageText = screen.getByText("Select a language:");
  expect(selectLanguageText).toBeTruthy();

  // debug()
});

test("language change by clicking on NL", async () => {
  // await waitFor(() => screen.getByRole('heading'))

  const dutchIcon = screen.getByTestId("nl");
  fireEvent.click(dutchIcon);

  expect(screen.getByText("Naam")).toBeInTheDocument();

  expect(screen.getByRole("button")).toHaveTextContent(/^Voorleggen$/);
});