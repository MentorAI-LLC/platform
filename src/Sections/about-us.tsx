import Founders from "@/components/founders";
import Section, { Description, Title } from "@/components/ui/section";

export default function AboutUs(){


    return(
        <Section
            name="about-us"
            className="justify-center items-center container mx-auto"
        >
            <Title
                className=""
            >
                About Us
            </Title>
            <Description
                className="max-w-3xl text-center"
            >
                At Mentor.ai, our mission is to empower tech learners with personalized, AI-driven roadmaps. We aim to simplify the educational journey, providing tailored guidance to help students unlock their full potential and achieve mastery in the ever-evolving field of technology
            </Description>
        <Founders />
        </Section>
    )
}
