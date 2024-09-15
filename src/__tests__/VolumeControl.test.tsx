import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import VolumeControls from "../components/VolumeControls";

test("Cover Art renders correctly", () => {
  const { container } = render(<VolumeControls />);
  expect(container).toMatchSnapshot();
});
