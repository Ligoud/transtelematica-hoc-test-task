import React, { useState } from "react";
import Autocomplete from "../components/Autocomplete";
import Select from "../components/Select";
import "../css/form.css";

const withForm = (Wrapped) => (props) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <Wrapped
      {...props}
      FormComponent={() => (
        <div className="form">
          <h2>Форма </h2>
          <Select
            setSelectedCategory={setSelectedCategory}
            value={selectedCategory}
          />
          <br />
          <Autocomplete category={selectedCategory} />
        </div>
      )}
    />
  );
};

export default withForm;
