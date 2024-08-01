import s from "./SearchBox.module.css";
import { useState } from "react";

const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");

  const handlechange = (e) => {
    setInputValue(e.target.value);
  };
  console.log({ inputValue });
  return (
    <div className={s.wrapper}>
      <p className={s.title}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={inputValue}
        onChange={handlechange}
      />
      <p>{inputValue}</p>
    </div>
  );
};

export default SearchBox;
