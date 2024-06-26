/**
 * Logo Component
 *
 * A functional component that renders the application's logo. The logo is a link that redirects to the home page.
 *
 * @returns {JSX.Element} A JSX element representing the logo.
 */
function Logo() {
  return (
    <a href="/">
      <h1 className="font-bold text-lg">Mentor.AI</h1>
    </a>
  );
}

export default Logo;
