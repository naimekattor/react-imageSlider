import { useEffect, useRef, useState } from "react";
import data from "./data.json";
import "./App.css";
import "./App.css";
const App = () => {
  let ref = useRef(null);
  const [index, setIndex] = useState(0);
  const handlenext = () => {
    setIndex((prevIndex) => {
      if (prevIndex === data.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };
  const handlePrev = () => {
    if (index == 0) {
      return setIndex(data.length - 1);
    }
    setIndex(index - 1);
  };
  useEffect(() => {
    ref.current = setInterval(handlenext, 2000);
    return () => {
      clearInterval(ref.current);
    };
  }, []);
  return (
    <div
      className="slider-content"
      onMouseEnter={() => clearInterval(ref.current)}
      onMouseLeave={() => setInterval(handlenext, 2000)}
    >
      <div className="left-btn" onClick={handlePrev}>
        {"<"}
      </div>
      <img src={data[index].url} alt="" />
      <div className="right-btn" onClick={handlenext}>
        {">"}
      </div>
    </div>
  );
};

export default App;
