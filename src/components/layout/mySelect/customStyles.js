const customStyles = {
  control: (base, state) => ({
    ...base,
    background: "rgba(255, 255, 255, 0.16)",
    color: "#fff",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    cursor: "pointer",
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    height: "52px",
  }),
  option: (provided) => ({
    ...provided,
    color: "#fff",
    backgroundColor: "#2D415B",
    cursor: "pointer",
  }),
  menu: (base) => ({
    ...base,
    borderRadius: "8px",
    marginTop: 5,
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
