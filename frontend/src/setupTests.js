import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

//to clean dom afer every test
afterEach(() => {
  cleanup();
});
