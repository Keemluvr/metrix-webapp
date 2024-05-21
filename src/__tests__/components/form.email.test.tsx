import { useForm } from "react-hook-form";
import { render } from "@/test-util";
import Email from "../../components/form/email";

describe("Email Component", () => {
  it("renders with placeholder text", () => {
    const { getByPlaceholderText } = render(<Email control={useForm().control} />);

    expect(getByPlaceholderText("Email Address")).toBeInTheDocument();
  });

  //   it("starts with no error message", () => {
  //     const { queryByText } = render(<Email label="Email" />);
  //     expect(queryByText("")).toBeNull();
  //   });

  //   it("displays error message when invalid email is entered", () => {
  //     const { getByPlaceholderText, getByText } = render(<Email label="Email" />);
  //     const input = getByPlaceholderText("Email");
  //     fireEvent.change(input, { target: { value: "invalid_email" } });
  //     fireEvent.blur(input);
  //     expect(getByText("Invalid email")).toBeInTheDocument();
  //   });

  //   it("does not display error message when valid email is entered", () => {
  //     const { getByPlaceholderText, queryByText } = render(<Email label="Email" />);
  //     const input = getByPlaceholderText("Email");
  //     fireEvent.change(input, { target: { value: "test@example.com" } });
  //     fireEvent.blur(input);
  //     expect(queryByText("Invalid email")).toBeNull();
  //   });

  //   it("calls onChange prop when input value changes", () => {
  //     const handleChange = jest.fn();
  //     const { getByPlaceholderText } = render(<Email label="Email" onChange={handleChange} />);
  //     const input = getByPlaceholderText("Email");
  //     fireEvent.change(input, { target: { value: "test@example.com" } });
  //     expect(handleChange).toHaveBeenCalledWith("test@example.com");
  //   });

  // Add more test cases as needed
});
