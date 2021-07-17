import React from 'react'
import { useEffect } from 'react'
import {useHistory} from 'react-router-dom'

const Logout = () => {
    const history = useHistory()
    useEffect(() => {
        fetchLogout();
    }, [])
    
    const fetchLogout = async () => {
        try {
            const res = await fetch('/auth/logout')
            if(res.status === 200)
            history.push('/Login', { replace: true })
        }
        catch (err) {
            console.log(err)
        }
        
    }
    return (
        <div>
            Logged Out
        </div>
    )
}

export default Logout
