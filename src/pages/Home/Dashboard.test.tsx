import { Dashboard } from ".";
import { render, screen } from "@testing-library/react"

describe("Dashboard", () => {

  test("testing dashboard", () => {
    render(<Dashboard />);
    expect(screen.getByText("Home Page")).toBeDefined();
  })

})

