import './App.css';
import { useEffect,useState } from 'react';
import Display from './components/Display';
import SearchBar from './components/SearchBar';
import axios from 'axios'
import Paginate from './components/Paginate';

function App() {

  useEffect(()=>{ 
      setLoading(false)
  },[])

    //store data
  const [data,setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const itemsPerpage = 10
  const [pageNum, setPageNum] = useState(0)
  const pageCount = Math.ceil(data.length/itemsPerpage)
  const pagesVisited = pageNum * itemsPerpage
  const currItems = data.slice(pagesVisited, pagesVisited + itemsPerpage)

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

  const changePage = ({selected}) =>{
    setPageNum(selected)
  }

if (search===''){
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
        </div>
      </div>
    </div>)
}

else {
  return(
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
          currItems={currItems}
          itemsPerpage={itemsPerpage}
          />

          <Paginate 
          changePage={changePage} 
          pageCount={pageCount}
          itemsPerpage={itemsPerpage}
          totalItems={data.length}/>

        </div>
      </div>
    </div>
  )
}

}

export default App;
