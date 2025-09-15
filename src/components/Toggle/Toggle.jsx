import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { useTheme } from "../../Context";
import "./Toggle.css";

const Toggle = () => {
  const { state, dispatch } = useTheme();
  const { darkMode } = state;

  const handleClick = () => {
    dispatch({ type: "toggle" });
  };
  
  return (
    <div className="toggle" onClick={handleClick}>
      <Moon />
      <Sun />
      <div
        className="t-button"
        style={{ left: darkMode ? "2px" : "20px" }}
      ></div>
    </div>
  );
};

export default Toggle;
