import React from "react";

type ButtonProps = React.ComponentPropsWithoutRef<"button">;

export default function Button({ type, autoFocus, ...props }: ButtonProps){
    return <button type={type} autoFocus={autoFocus} {...props}>Click Me!</button>
}

 