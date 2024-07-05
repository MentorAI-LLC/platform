import React from 'react';
import Container from '@/components/Container';
import PageDivider, { FirstSide, ImageSide } from '@/components/PageDivider';
import RegisterForm from '@/components/RegisterForm';
import Image from 'next/image';
import register from '/public/images/register.svg';

function page() {
  return (
    <Container className="flex items-center justify-center h-screen md:pt-0 pt-10">
      <PageDivider>
        <FirstSide>
          <RegisterForm />
        </FirstSide>
        <ImageSide>
          <Image src={register} alt="register Image" priority={true} />
        </ImageSide>
      </PageDivider>
    </Container>
  );
}

export default page;
