import './Searchbar.css';
import {useState} from 'react';
type Props = {
    searchInputVal : (val: string) => void;
}

function Searchbar({searchInputVal} : Props) {

    const [userInput, setUserInput] = useState<string>("")
    const handleSearch = (e : React.FormEvent<HTMLInputElement>) =>{

        setUserInput(e.currentTarget.value);
        const searchValue = e.currentTarget.value;
        searchInputVal(searchValue);
    }

    const handleClick = () => {
      console.log('clicked');
        setUserInput("");
    }

  return (
    <div className='search'>
            <input type="text" placeholder="Search for a specific emperor..." value={userInput}  onChange={handleSearch} />
            <button onClick={handleClick}>Clear</button>
    </div>
  )
}

export default Searchbar