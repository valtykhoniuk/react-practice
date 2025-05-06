import React from "react";

interface Props {
  children: string;
  onClick: () => void;
}
const Button = ({ children, onClick }: Props) => {
  return (
    <button onClick={onClick} className="btn btn-primary">
      {children}
    </button>
  );
};

export default Button;
