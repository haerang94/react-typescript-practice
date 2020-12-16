import React from "react";
import MyForm from "components/MyForm";

const App: React.FC = () => {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return <MyForm onSubmit={onSubmit}></MyForm>;
};

export default App;
