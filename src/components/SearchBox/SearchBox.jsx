import s from "./SearchBox.module.css";
// import { useState } from "react";

const SearchBox = ({ value, onFilter }) => {
  // const [inputValue, setInputValue] = useState("");

  // const handlechange = (e) => {
  //   setInputValue(e.target.value);
  // };
  // console.log({ inputValue });
  return (
    <div className={s.wrapper}>
      <p className={s.title}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
      <p>{value}</p>
    </div>
  );
};

export default SearchBox;
