import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import CoverArt from "../components/CoverArt";

test("Cover Art renders correctly", () => {
  const { container } = render(<CoverArt />);
  expect(container).toMatchSnapshot();
});
