import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Copyable from "@/components/copyable";

describe("Copyable", () => {
  it("should render the label correctly", () => {
    const { getByText } = render(<Copyable label="Test Label" />);

    const copyable = getByText("Test Label");

    expect(copyable).toBeInTheDocument();
  });

  it("should copy text to clipboard when copy button is clicked", async () => {
    const user = userEvent.setup();
    const textToCopy = "bla bla bla";

    const { getByRole } = render(<Copyable label={textToCopy} />);
    const copyButton = getByRole("button");

    await user.click(copyButton);

    const clipboardText = await navigator.clipboard.readText();

    expect(clipboardText).toEqual(textToCopy);
  });
});
