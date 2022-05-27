import './App.css';
import { useEffect,useState } from 'react';
import Display from './components/Display';
import SearchBar from './components/SearchBar';
import axios from 'axios'

function App() {

  useEffect(()=>{ 
      setLoading(false)
  },[])

    //store data
  const [data,setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')

  const handleSearch = (e) =>{
    setSearch(e.target.value)
  }

  const handleSubmit = async e =>{
      e.preventDefault()
      setLoading(true)
      const results = await axios('https://api.giphy.com/v1/gifs/search',{
        params:{
          api_key :'GlVGYHkr3WSBnllca54iNt0yFbjz7L65',
          q: search
        }
      });
      setData(results.data.data)
      setLoading(false)
  }

  return (
    <div className="app">
      <div className="space">
        <div className="content">
          <SearchBar 
          data={data} 
          loading={loading} 
          search={search} 
          handleSearch={handleSearch}
          handleSubmit={handleSubmit}/>

          <Display 
          data={data} 
          loading={loading}
          setData={setData}
          setLoading={setLoading}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
