/**
 * FormInput Component
 *
 * This component renders a labeled input field for a form.
 * It includes a label and an input element with styling for appearance and interaction.
 *
 * @param {FormInputProps} props - The props for the FormInput component.
 * @param {string} props.label - The text to display as the label for the input.
 * @param {string} props.type - The type of the input (e.g., "text", "password", "email").
 * @param {string} props.placeholder - The placeholder text for the input.
 * @param {string} props.id - The id for the input element, which connects the label to the input.
 *
 * @returns {JSX.Element} A styled input field with a label.
 */
interface FormInputProps {
  label: string;
  type: string;
  placeholder: string;
  id: string;
}

function FormInput({ label, type, placeholder, id }: FormInputProps) {
  return (
    <div className="mb-4">
      <label
        className="block text-sm text-gray-500 font-semibold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default FormInput;
