import React, { useState } from "react";
import { userProfiles } from "../data/profiles";
import User from "../components/User";
import './Home.css'

function Home() {

const [filteredU, setFilteredU] = useState(userProfiles)

const searchItem =(e)=>{
  const search = e.target.value.toLowerCase()

  const filtered = userProfiles.filter(i=> i.userName.toLowerCase().includes(search))

  setFilteredU(filtered)

} 



  return (
    <>
      <h2>Home</h2>
      <input type="text" onChange={searchItem}/>
      <p>
        Welcome to the user site, here you get the oipportunity to meet our great users and 
        they'd share their experience
      </p>
      <div className="userLay">
        {!filteredU.length?<p>User not found</p>:filteredU.map(i=><User{...i}/>)}
      </div>
    </>
  );
}

export default Home;
