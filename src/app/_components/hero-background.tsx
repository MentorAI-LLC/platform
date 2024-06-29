import hero from "@/../public/images/hero-rectangle.svg";
import Image from "next/image";

type Props = {
  className?: string;
};

export default function HeroBackground({ className }: Props) {
  return (
    <div className={className}>
      <Image src={hero} alt="Hero" className="h-full w-full object-cover" />
    </div>
  );
}
