import Card, { Description, Title } from "./ui/Card"
import Image from "next/image"
import SEO from "@./../../public/person/SEO.jpg"
import CEO from "@./../../public/person/CTO.jpg"
import STE from "@./../../public/person/STE.jpg"


export default function Founders(){
    const superparson=[
        {
            name:"Mr:Cat Cat",
            position:"Product Engineer",
            image:SEO
        },
        {
            name:"Mr:Dog Dog",
            position:"Software Engineer",
            image:CEO
        },
        {
            name:"Mr:Cat Cat",
            position:"Markting salar",
            image:STE
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
