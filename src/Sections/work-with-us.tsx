import Section, { Description, Title } from "@/components/ui/section";
import image1 from "@./../../public/images/work-with-us.png"
import Image from "next/image";
import List, { Item } from "@/components/ui/list";

export default function WorkWithUs(){
    const item=[
        "We provide a platform for everyone to learn and engage in",
        "A community for learners and tutors",
        "Free & paid content",
        "rewarding system for those who engage.",
    ]
    return(
        <Section
            name="work"
            className="gap-32"
        >
           <Title>
                Why Work With Us
            </Title>
            <div
                className="flex flex-col justify-around md:flex-row gap-8"
            >
               <Image
                  src={image1}
                  alt="work-us"
                />
                <div className="flex flex-col gap-8">
                   <Title
                        className="md:max-w-xl text-left text-pretty text-xl"
                   >
                        We Provide Many Features You Can Use
                   </Title>
                    <Description className="md:max-w-lg">
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa .
                    </Description>
                    <List
                        style="decimal"
                    >
                        {item.map((item,k)=>(
                           <Item
                                key={k}
                            >
                                {item}
                            </Item>
                        ))}
                    </List>
                </div>
            </div>
        </Section>
    )
}
