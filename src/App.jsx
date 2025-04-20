import React from "react";
import Form from "./components/form";
import Table from "./components/Table";

function App() {
  return (
    <div className="py-10">

      <div className="flex justify-center items-center flex-col gap-3">
        <h1 className="text-5xl font-semibold text-hColor">ExpensePro</h1>
        <p className="text-sm text-hColor">Track Your Expenses like a Pro!</p>
      </div>

      <section className="flex flex-col gap-14 md:gap-0 md:flex-row justify-center items-center  md:justify-evenly pt-12">

        <div className="p-4 md:p-6 bg-fColor rounded-xl w-[92%] md:w-[45%] lg:w-[40%]">
          <h2 className="text-hColor text-xl mb-6 font-semibold">Add Your Expense</h2>
          <Form />
        </div>

        <div className="p-4 md:p-6 bg-fColor rounded-xl w-[92%] md:w-[45%] lg:w-[40%]">
          <h2 className="text-hColor text-xl mb-6 font-semibold">Your Expenses</h2>
          <Table/>
        </div>

      </section>

    </div>
  );
}

export default App;
