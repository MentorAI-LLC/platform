import Founders from "@/components/founders";
import Section, { Description, Title } from "@/components/ui/section";
import { Inter } from "next/font/google";

const InterMedium = Inter({ weight: "500", subsets: [] });
const InterBold = Inter({ weight: "700", subsets: [] });


export default function AboutUs(){


    return(
        <Section
            name="about-us"
            className="justify-center items-center container mx-auto"
        >
            <Title
                className={`${InterBold.className}`}
            >
                About Us
            </Title>
            <p
                className={`max-w-5xl text-center text-base ${InterMedium.className}`}
                style={{ color: "17284C", opacity: "0.70" }}
            >
                At Mentor.ai, our mission is to empower tech learners with personalized, AI-driven roadmaps. We aim to simplify the educational journey, providing tailored guidance to help students unlock their full potential and achieve mastery in the ever-evolving field of technology
            </p>
        <Founders />
        </Section>
    )
}
