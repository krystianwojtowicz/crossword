import { StylesConfig } from "react-select";

export const customStyles = (
  isDark: boolean,
  color: string = "#4262FF",
  isDisabled?: boolean
) => {
  return <StylesConfig>{
    control: (base, state) => ({
      ...base,
      background: isDark ? "#191919" : isDisabled ? "#f8f8f8" : "#fff",
      height: "50px",
      borderRadius: "12px",
      // Overwrittes the different states of border
      borderColor: isDark ? "#434343" : "#e7e7e7",
      borderWidth: "1px",
      // Removes weird border around container
      boxShadow: state.isFocused ? "" : "",
      "&:hover": {
        // Overwrittes the different states of border
        borderColor: color,
      },
      transition: "",
    }),
    singleValue: (base) => ({
      ...base,
      color: isDark ? "#ffffff" : "#101010",
    }),
    valueContainer: (base) => ({
      ...base,
      //placeholder color
      color: color,
      width: "100%",
    }),
    placeholder: (base) => ({
      ...base,
      color: isDark ? "#e7e7e7" : "#101010",
    }),
    option: (base, state) => ({
      cursor: "pointer",
      height: "30px",
      display: "flex",
      alignItems: "center",
      paddingLeft: "10px",
      borderRadius: "2px",
      backgroundColor: state.isSelected ? color : isDark ? "#191919" : "#fff",
      color: state.isSelected ? "#fff" : isDark ? "#e7e7e7" : "#101010",
      "&:hover": {
        backgroundColor: color,
        color: "#fff",
      },
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: isDark ? "#191919" : "#fff",
    }),
  };
};
