import React from "react";
import {
  render,
  screen,
  fireEvent,
  cleanup,
  getByRole,
  waitFor,
  within,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import SongList from "./SongList";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "../reducers";

describe("Testing Song Selection Funcionality", () => {
  it("renders correct song details on button click", async () => {
    // Render new instance in every test to prevent leaking state
    const { debug } = render(
      <Provider store={createStore(reducers)}>
        <App />
      </Provider>
    );

    const selectButton = within(screen.getByTestId("All Star")).getByText(
      /select/i
    );
    fireEvent.click(selectButton);

    await waitFor(() => screen.getByRole("heading", { level: 3 }));

    expect(screen.getByText("Details for:")).toBeInTheDocument();
    const songDetail = screen.getByTestId("song-detail");
    expect(songDetail).toHaveTextContent("Title: All Star");
    expect(songDetail).toHaveTextContent("Duration: 3:15");
  });
});
