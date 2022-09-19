import {useState} from 'react';
import './App.css';
import Kings from './components/Kings';
import Searchbar from './components/Searchbar/Searchbar';

function App() {

  const title : string = "Top 6 Notorious Rulers of the History";
  const [searchVal, setSearchVal] = useState<string>("");

 const handleValue = (e:string) => {
    console.log(e);
    setSearchVal(e);
 }


  return (
    <div className='app'>
      <Searchbar searchInputVal={handleValue}/>
      <h3 id="main_title">{title}</h3>
      <Kings filterSearchVal={searchVal} />
    </div>
  );
}

export default App;
