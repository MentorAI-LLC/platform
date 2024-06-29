import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";


const listVariants = cva(
  "w-full text-base space-y-4 px-2",
  {
    variants: {
      style: {
        disc: "list-disc",
        decimal:
          "list-decimal",
        none:
          "list-none",
      },
      defaultVariants: {
        style:"disc"
      },
    },
  },
);


// Define the props for the List component
type ListProps =React.HTMLProps<HTMLUListElement> &
VariantProps<typeof listVariants> & {asChild?:boolean}
// Define the List component
const List =React.forwardRef<HTMLUListElement,ListProps>(
  ({ className, style, asChild = false, ...props }, ref) => {
    return (
      <ul
        className={cn(listVariants({ style, className }))}
        ref={ref}
        {...props}
      />
    );
  },

)


// Define the props for the ListItem component
type ListItemProps = {
  className?: string;
  children: React.ReactNode;
};

// Define the ListItem component
function ListItem({ className, children }: ListItemProps) {
  return (
    <li className={cn("text-base", className)}>
      {children}
    </li>
  );
}

// Define the props for the ListHeader component
type ListHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

// Define the ListHeader component
function ListHeader({ className, children }: ListHeaderProps) {
  return (
    <h4 className={cn("text-lg font-semibold", className)}>
      {children}
    </h4>
  );
}

// Attach the Item, Header, and Content components to the List component
List.Item = ListItem;
List.Header = ListHeader;

export default List;
export { ListItem as Item, ListHeader as Header};
