import React from "react";
import customStyles from "./customStyles";
import Select from "react-select";

export default function MySelect(props) {
  return (
    <div>
      <Select
        styles={customStyles}
        isSearchable={false}
        options={props.options}
        defaultValue={props.options[0]}
        placeholder={"Linguagem..."}
        onChange={(e) => {
          props.mudarLinguagem({
            name: e.label,
            value: e.value,
          });
        }}
      />
    </div>
  );
}
