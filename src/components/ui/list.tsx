import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

// Define the props for the List component
type ListProps = React.HTMLProps<HTMLUListElement> &
  VariantProps<typeof listVariants> & { asChild?: boolean };

// Extend the type definition for List to include Item and Header
interface ListComponent
  extends React.ForwardRefExoticComponent<
    React.PropsWithoutRef<ListProps> & React.RefAttributes<HTMLUListElement>
  > {
  Item: typeof ListItem;
  Header: typeof ListHeader;
}

const listVariants = cva("w-full text-base space-y-4 px-2", {
  variants: {
    style: {
      disc: "list-disc",
      decimal: "list-decimal",
      none: "list-none",
    },
  },
  defaultVariants: {
    style: "disc",
  },
});

// Define the List component
const List = React.forwardRef<HTMLUListElement, ListProps>(
  ({ className, style, asChild = false, ...props }, ref) => {
    return (
      <ul className={cn(listVariants({ style, className }))} ref={ref} {...props} />
    );
  }
) as ListComponent;

// Define the ListItem component
const ListItem: React.FC<ListProps> = ({ className, children }) => {
  return <li className={cn("text-base", className)}>{children}</li>;
};

// Define the ListHeader component
const ListHeader: React.FC<ListProps> = ({ className, children }) => {
  return <h4 className={cn("text-lg font-semibold", className)}>{children}</h4>;
};

// Attach the Item and Header components to the List component
List.Item = ListItem;
List.Header = ListHeader;

export default List;
export { ListItem as Item, ListHeader as Header };
