import React from 'react';
import Container from '@/components/Container';
import PageDivider, { Form, SideImage } from '@/components/PageDivider';
import LoginForm from '@/components/LoginForm';
import Image from 'next/image';
import login from '/public/images/login.svg';

/**
 * Login Component
 *
 * This component renders a login page using the PageDivider component.
 * The page is divided into two sections: a form section with the login form,
 * and an image section with a login-related image.
 *
 * @returns {JSX.Element} The rendered login page.
 */
function Login() {
  return (
    <Container className="flex items-center justify-center h-screen md:pt-0 pt-10">
      <PageDivider>
        <Form>
          <LoginForm />
        </Form>
        <SideImage>
          <Image src={login} alt="login Image" priority={true} />
        </SideImage>
      </PageDivider>
    </Container>
  );
}

export default Login;
