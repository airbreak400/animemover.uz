import { useState } from "react";

const SearchBar = ({handleSearchSubmit}) => {

  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    handleSearchSubmit(inputText)
  }

  return (
    <form onSubmit={handleSubmit}>
        <input onChange={(e) => setInputText(e.target.value)} value={inputText} className="u-full-width" type="text" placeholder="Please write the name of the anime" />
    </form>
  )
}

export default SearchBar