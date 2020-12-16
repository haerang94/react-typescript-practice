import React from "react";

type GreetingsProps = {
  name: string;
  children: React.ReactNode;
  optional?: string;
  onClick: (name: string) => void;
};

const Test = ({ name, children, optional, onClick }: GreetingsProps) => {
  const handleClick = () => {
    onClick(name);
  };
  return (
    <div>
      {name} {children}
      {optional && <p>{optional}</p>}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

Test.defaultProps = {
  name: "default name",
};

export default Test;
