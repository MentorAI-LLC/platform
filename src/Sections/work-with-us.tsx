import Section, { Description, Title } from "@/components/ui/section";
import image1 from "@./../../public/images/work-with-us.png"
import Image from "next/image";
import List, { Item } from "@/components/ui/list";
import { Inter, Rubik } from "next/font/google";
import { cn } from "@/lib/utils";
import checkCirlce from "@./../../public/images/check-circle.svg"

const rubikMedium = Rubik({ weight: "500", subsets: [] });
const rubikRegular = Rubik({ weight: "400", subsets: [] });
const inter = Inter({ subsets: ["latin"], weight: "600" });


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
           <Title className={ `${cn(inter.className)} text-xl` }>
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
                   <h1
                        className={`${rubikMedium.className} md:max-w-md text-left text-pretty text-3xl`}
                   >
                        We Provide Many Features You Can Use
                   </h1>
                    <Description className={` ${rubikRegular.className} md:max-w-lg text-xl`}>
                        Every feature is can be obtained by your hard work and everything is totally achievable!
                    </Description>
                    <List
                        style="none"
                    >
                        {item.map((item,k)=>(
                            <div className="flex flex-row space-x-1" key={k}>
                                <Image src={checkCirlce} alt="Check circle" />
                                <Item
                                >
                                    {item}
                                </Item>
                            </div>
                        ))}
                    </List>
                </div>
            </div>
        </Section>
    )
}
