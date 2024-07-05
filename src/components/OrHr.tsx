/**
 * OrHr Component
 *
 * This component renders a horizontal line with text in the middle.
 * It is typically used to separate sections of a form or interface,
 * providing a visual break with a label in the center.
 *
 * @param {OrHrProps} props - The props for the OrHr component.
 * @param {string} props.text - The text to display in the middle of the horizontal line.
 *
 * @returns {JSX.Element} A styled horizontal line with centered text.
 */
interface OrHrProps {
  text: string;
}

function OrHr({ text }: OrHrProps) {
  return (
    <div className="flex items-center my-8">
      <hr className="flex-grow border-gray-300" />
      <span className="px-2 text-sm text-gray-500">{text}</span>
      <hr className="flex-grow border-gray-300" />
    </div>
  );
}

export default OrHr;
