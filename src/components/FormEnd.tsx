import Link from 'next/link';

/**
 * FormEnd Component
 *
 * This component renders a text element with a link, typically used at the end of a form.
 * It provides a way to redirect users to another page, such as a registration or password recovery page.
 *
 * @param {FormEndProps} props - The props for the FormEnd component.
 * @param {string} props.text - The main text to display.
 * @param {string} props.link - The URL to navigate to when the link is clicked.
 * @param {string} props.linkText - The text to display for the link.
 *
 * @returns {JSX.Element} A styled text element with a link.
 */
interface FormEndProps {
  text: string;
  link: string;
  linkText: string;
}

function FormEnd({ text, link, linkText }: FormEndProps) {
  return (
    <div className="text-center mt-8">
      <p className="text-sm text-text">
        {text}{' '}
        <Link href={link} className="text-blue-500 hover:text-blue-800">
          {linkText}
        </Link>
      </p>
    </div>
  );
}

export default FormEnd;
