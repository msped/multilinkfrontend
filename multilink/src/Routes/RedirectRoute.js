import API from '../Api'
import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

export default function RedirectRoute({ children }) {
    const jwt = localStorage.getItem('access');
    const [verified, setVerified] = useState(false)

    useEffect(() => {
        const verify = async () => {
            await API.post('/auth/jwt/verify/',{
                'token': jwt
            }).then((res) => {
                if (res.status === 200){
                    setVerified(true)
                } else {
                    ['access', 'refresh', 'user'].map((jwtItem) =>
                        localStorage.removeItem(jwtItem)
                    )
                }
            })
        }
        verify()
    }, [jwt])

    return verified ? children : <Navigate to={`/${localStorage.getItem('user')}`} />
}
