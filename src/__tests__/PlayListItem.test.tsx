import { render } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import PlayListItem from "../components/PlayListItem";

describe("Testing for PlayListItem Component", () => {
  test("PlayListItem renders correctly", () => {
    const { container } = render(
      <PlayListItem
        title="Song Title"
        artist="Artist"
        backgroundColor="bg-light-burgundy"
        songLength="5:45"
        onClick={() => {}}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  test("PlayListItem renders correctly with empty strings", () => {
    const { container } = render(
      <PlayListItem
        title=""
        artist=""
        backgroundColor=""
        songLength=""
        onClick={() => {}}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  test("PlayListItem correctly applies background", () => {
    const { container, getByText } = render(
      <PlayListItem
        title="Song Title 1"
        artist="Artist 1"
        backgroundColor="bg-blue"
        songLength="5:45 1"
        onClick={() => {}}
      />,
    );
    const titleElement = getByText("Song Title 1");
    const backgroundDiv = titleElement.closest("div")?.parentElement;
    expect(backgroundDiv).toHaveClass("bg-blue");
    expect(container).toMatchSnapshot();
  });
});
