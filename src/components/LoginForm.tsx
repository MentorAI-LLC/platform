import React from 'react';
import ContinueWithGoogle from './ContinuewithGoogle';
import Link from 'next/link';
import OrHr from './OrHr';
import FormTitle from './FormTitle';
import FormInput from './FormInput';
import FormEnd from './FormEnd';

/**
 * LoginForm Component
 *
 * This component renders a login form with multiple elements including a title, a button to continue with Google,
 * a divider with text, input fields for email and password, a "Remember Me" checkbox, a "Forgot Password?" link,
 * a login button, and a registration link.
 *
 * @returns {JSX.Element} The rendered login form.
 */
function LoginForm() {
  return (
    <form className="w-full max-w-md">
      <FormTitle title="Login to your Account" />
      <ContinueWithGoogle />
      <OrHr text="Or login with email" />
      <FormInput
        label="Email"
        type="email"
        placeholder="mail@abc.com"
        id="email"
      />
      <FormInput
        label="Password"
        type="password"
        placeholder="********"
        id="password"
      />
      <div className="flex items-center justify-between mb-6">
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox accent-secondary" />
          <span className="ml-2 text-sm text-gray-600">Remember Me</span>
        </label>
        <Link
          href="#"
          className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
        >
          Forgot Password?
        </Link>
      </div>
      <button
        className="w-full bg-secondary hover:bg-secondary/80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Login
      </button>
      <FormEnd
        text="Not registered yet?"
        link="/register"
        linkText="Create an account"
      />
    </form>
  );
}

export default LoginForm;
