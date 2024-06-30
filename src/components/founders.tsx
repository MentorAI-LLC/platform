import Card, { Description, Title } from "./ui/Card"
import Image from "next/image"
import SEO from "@./../../public/person/SEO.jpg"
import person from "@./../../public/person/person.jpg"


export default function Founders(){
    const superparson=[
        {
            name:"Abdulrahman Moussa",
            position:"Front-End Engineer & Co-founder of Mentor.Ai",
            image:SEO
        },
        {
            name:"Abdel-Moneim Ibrahim",
            position:"Software Engineer & Founder of Mentor.Ai",
            image:person
        },
        {
            name:"Salia Brik",
            position:"Back-End Engineer & Co-founder of Mentor.Ai",
            image:person
        },
    ]

    return(
        <div className="w-full flex flex-col md:flex-row gap-8">
            {superparson.map((parson,k)=>(
                <Card
                    key={k}
                    className="flex w-full gap-8 justify-center items-center"
                >
                    <Image
                        className="block h-24 w-24 rounded-full object-cover"
                        src={parson.image}
                        alt="pow"
                    />
                    <div className="w-full">
                       <Title>
                        {parson.name}
                        </Title>
                        <Description>
                            {parson.position}
                        </Description>
                    </div>
                </Card>
            ))}
        </div>
    )
}
