import { test, expect } from "vitest";
import { render } from "../../utils/test_utils";
import '@testing-library/jest-dom'
import HeroSection from "../../components/HeroSection";

test("renders without crashing", () => {
  const { container } = render(<HeroSection />);
  expect(container.firstChild).toBeInTheDocument();
});
