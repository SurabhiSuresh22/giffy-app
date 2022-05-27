import React,{useEffect, useState} from 'react'
import './Display.css'
import axios from 'axios'
import Loader from './Loader'

const Display = () => {

  //store data
const [data,setData] = useState([])
const [loading, setLoading] = useState(false)

  useEffect(()=>{
    const fetchData = async() =>{
      setLoading(true)
      const results = await axios('https://api.giphy.com/v1/gifs/trending',{
        params:{
          api_key :'GlVGYHkr3WSBnllca54iNt0yFbjz7L65'
        }
      })
      console.log(results);
      setData(results.data.data)
      setLoading(false)
    }
    fetchData()
  },[])

  const renderGif  = () =>{

    if(loading){
      return <div className="loader"><Loader/></div>
    }
    return data.map(e =>{
      return (
        <div key={e.id} className="gif">
          Display
           <img src={e.images.fixed_height.url} alt="" /> 
        </div>
      )
    })
  }

  return (
    <div className='giphy-container'>
      {renderGif()}
    </div>
  )
}

export default Display