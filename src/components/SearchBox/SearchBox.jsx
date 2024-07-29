// import s from './SearchBox.module.css'
import { useState } from "react";

const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");

  const handlechange = (e) => {
    setInputValue(e.target.value);
  };
  console.log({ inputValue });
  return (
    <div>
      <p>SearchBox</p>
      <input type="text" value={inputValue} onChange={handlechange} />
      <p>{inputValue}</p>
    </div>
  );
};

export default SearchBox;
