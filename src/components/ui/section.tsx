import { cn } from '@/lib/utils';

// Define the props for the Section component
type SectionProps = {
  name: string;
  className?: string;
  children: React.ReactNode;
};

// Define the Section component
function Section({ name, className, children }: SectionProps) {
  return (
    <section
      id={name}
      className={cn('w-full flex flex-col gap-8 py-24 px-8', className)}
    >
      {children}
    </section>
  );
}

// Define the props for the TitleSection component
type TitleProps =
  | { title: string; children?: never; className?: string }
  | { title?: never; children: React.ReactNode; className?: string };

// Define the TitleSection component
function TitleSection(props: TitleProps) {
  return (
    <h2
      className={cn(
        'text-center font-bold leading-snug  text-3xl md:text-5xl',
        props.className
      )}
    >
      {props.title ?? props.children}
    </h2>
  );
}

// Define the props for the DescriptionSection component
type DescriptionProps = {
  children: React.ReactNode;
  className?: string;
};

// Define the DescriptionSection component
function DescriptionSection({ className, children }: DescriptionProps) {
  return <p className={cn('text-base', className)}>{children}</p>;
}

// Attach the Title and Description components to the Section component
Section.Title = TitleSection;
Section.Description = DescriptionSection;

export default Section;
export { TitleSection as Title, DescriptionSection as Description };
