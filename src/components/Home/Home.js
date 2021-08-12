import React from "react";
import { useState, useEffect } from "react";
import { useHistory} from 'react-router-dom'




const Home = () => {
  const history = useHistory()
  const [user, setUser] = useState({});


  useEffect(() => {
    fetchUser()
    
  }, []);

 

  const fetchUser = async () => {
    try {
      const user = await fetch("/user")
      const userData = await user.json()
      if (userData.status === 403) {
        alert("permission denied")
        history.push('/Login')
      }
      else {
        const data = userData.data
        if (data)
        {
          setUser(data);
          const userRole = userData.role
          if (userRole.index_id === 3)
            history.push('/customerHome')
          else if (userRole.index_id === 2) {
            history.push('/adminHome')

          }
          else {
            history.push('/superAdminHome')

          }
          
        }
          
        
        
      }

    }
     catch (err) {
    console.log(err);
    history.push('/Login')
  }

  }
  
  

  return (
    <>
      
    </>
  )

};

export default Home;
