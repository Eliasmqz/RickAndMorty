import axios from "axios"
import { useEffect, useState } from "react"
import Location from "./components/Location"
import ResidentInfo from "./components/ResidentInfo"
import getRandomNumber from "./utils/getRandomNumber"

function App() {
  const [universe, setUniverse] = useState()
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const URL = search? `https://rickandmortyapi.com/api/location/${search}` : `https://rickandmortyapi.com/api/location/${getRandomNumber()}`;
    axios.get(URL)
    .then(res => setUniverse(res.data))
    .catch(err => {
      console.log(err)
      alert("Dimension does not exist")
    })
  }, [search])

  setTimeout (() =>{
    setLoading(false)
  }, 3000)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(e.target.input_search.value)
  }
  
  return (
    loading ? 
      <section className="loading_page">
        <img src="./public/loading.png" alt="loading_img" className="loading_img" />
      </section>
    :
      <div className="App">
      <form onSubmit={handleSubmit} className="form">
        <input id="input_search" type="text" placeholder="Enter the dimension ID" />
        <button>Search</button>
      </form>
      <Location  universe={universe}/>
      {
        universe?.residents.length > 0 ?       
          <section className="resident_container">
          {
            universe.residents.map(resident => <ResidentInfo key={resident} resident ={resident}/>)
          }
          </section> :
          <section className="no_residents">
            <h2 className="no_residents--txt">NO RESIDENTS HERE</h2>
            <img src="./public/no_residents.png" className="no_residents--img" alt="no_residents" />
          </section>
      }

  </div>
  )
}

export default App
