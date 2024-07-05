/**
 * FormTitle Component
 * 
 * This component renders a title for a form, styled with responsive typography.
 * It ensures the title is prominent and appropriately styled for different screen sizes.
 * 
 * @param {FormTitleProps} props - The props for the FormTitle component.
 * @param {string} props.title - The title text to display.
 * 
 * @returns {JSX.Element} A styled form title.
 */
interface FormTitleProps {
  title: string;
}

function FormTitle({ title }: FormTitleProps) {
  return (
    <h2 className="text-lg md:text-3xl font-bold mb-8 text-text text-center md:text-start">
      {title}
    </h2>
  );
}

export default FormTitle;
