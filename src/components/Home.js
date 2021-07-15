import React from "react";
import { useState, useEffect } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/user/list/")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jres) => {
        setUsers(jres.data);
      });
  },[]);

  return (
    <div className="card border-0">   
          <h1>Welcome To Resin Art Store By AJ</h1>
      </div>
   
  );
};

export default Home;
