import Section, { Description, Title } from '@/components/ui/Section';
import Founders from '@/components/Founders';

export default function AboutUs() {
  return (
    <Section
      name="about"
      className="justify-center items-center container mx-auto"
    >
      <Title>About Us</Title>
      <Description className="max-w-3xl text-center">
        At Mentor.ai, our mission is to empower tech learners with personalized,
        AI-driven roadmaps. We aim to simplify the educational journey,
        providing tailored guidance to help students unlock their full potential
        and achieve mastery in the ever-evolving field of technology
      </Description>
      <Founders />
    </Section>
  );
}
