import React, { useState } from "react";
import "../css/form.css";

const withForm = (Wrapped) => (props) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  console.log(Wrapped);
  console.log(props);
  return (
    <Wrapped
      {...props}
      data={<div>123</div>}
      //   formComponent={
      //     <div className="form">
      //       <h2>Форма </h2>
      //       <Select setSelectedCategory={setSelectedCategory} />
      //       <br />
      //       <Autocomplete category={selectedCategory} />
      //     </div>
      //   }
    />
  );
};

export default withForm;
