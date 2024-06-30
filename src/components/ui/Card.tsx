import { cn } from "@/lib/utils";
import React from "react";

// Define the props for the Card component
type CardProps = {
  className?: string;
  children: React.ReactNode;
};

// Define the Card component
function Card({ className, children }: CardProps) {
  return (
    <div className={cn("border rounded-lg shadow-md p-4", className)}>
      {children}
    </div>
  );
}

// Define the props for the CardTitle component
type CardTitleProps =
  | { title: string; children?: never; className?: string }
  | { title?: never; children: React.ReactNode; className?: string };

// Define the CardTitle component
function CardTitle(props: CardTitleProps) {
  return (
    <h3
      className={cn(
        "text-lg font-semibold",
        props.className
      )}
    >
      {props.title ?? props.children}
    </h3>
  );
}

// Define the props for the CardDescription component
type CardDescriptionProps = {
  children: React.ReactNode;
  className?: string;
};

// Define the CardDescription component
function CardDescription({ className, children }: CardDescriptionProps) {
  return <p className={cn("text-sm text-gray-600 mb-4", className)}>{children}</p>;
}

// Define the props for the CardContent component
type CardContentProps = {
  children: React.ReactNode;
  className?: string;
};

// Define the CardContent component
function CardContent({ className, children }: CardContentProps) {
  return <div className={cn("mb-4", className)}>{children}</div>;
}

// Attach the Title, Description, and Content components to the Card component
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Content = CardContent;

export default Card;
export { CardTitle as Title, CardDescription as Description, CardContent as Content };
