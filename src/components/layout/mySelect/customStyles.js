const customStyles = {
  control: (base, state) => ({
    ...base,
    background: "rgba(255, 255, 255, 0.16)",
    color: "#fff",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    borderColor: "#9e9e9e",
    minHeight: "52px",
    height: "52px",
    boxShadow: state.isFocused ? null : null,
    cursor: "pointer",
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    height: "52px",
    padding: "0 6px",
    color: "#fff",
  }),
  option: (provided) => ({
    ...provided,
    color: "#fff",
    backgroundColor: "rgba(255, 255, 255, 0.16)",
    cursor: "pointer",
  }),
  menu: (base) => ({
    borderRadius: "8px",
    marginTop: 2,
  }),
  menuList: (base) => ({
    ...base,
    borderRadius: "8px",
    padding: 0,
  }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      opacity: 0.64,
    };
  },
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";
    const color = "#fff";
    return { ...provided, opacity, transition, color };
  },
};

export default customStyles;
