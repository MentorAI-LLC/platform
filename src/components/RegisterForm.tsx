import ContinueWithGoogle from './ContinuewithGoogle';
import OrHr from './OrHr';
import FormTitle from './FormTitle';
import FormInput from './FormInput';
import FormEnd from './FormEnd';

function RegisterForm() {
  return (
    <form className="w-full max-w-md">
      <FormTitle title="Create your Account" />
      <ContinueWithGoogle />
      <OrHr text="Or Sign up with email" />
      <FormInput
        label="First Name"
        type="text"
        placeholder="John"
        id="firstName"
      />
      <FormInput
        label="Last Name"
        type="text"
        placeholder="Doe"
        id="lastName"
      />
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
      <FormInput
        label="Confirm Password"
        type="password"
        placeholder="********"
        id="confirmPassword"
      />
      <div className="flex items-center justify-between mb-6">
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox accent-secondary" />
          <span className="ml-2 text-sm text-gray-600">Remember Me</span>
        </label>
      </div>
      <button
        className="w-full bg-secondary hover:bg-secondary/80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Login
      </button>
      <FormEnd
        text="Already have an account?"
        link="/login"
        linkText="Login here"
      />
    </form>
  );
}

export default RegisterForm;
