import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { UdemyDemo } from "./udemy-demo";

describe.concurrent("udemy-demo", () => {
	afterEach(cleanup);

	test("check if h1 heading exists", ({ expect }) => {
		render(<UdemyDemo />);
		expect(screen.getByTestId("udemy-demo-h1").textContent).toBe("udemy demo");
	});
});
