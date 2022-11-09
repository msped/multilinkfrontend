import React from 'react';
import SignInHome from '../components/SignInHome'
import SignOutHome from '../components/SignedOutHome'

export default function Home(){
    const access_token = localStorage.getItem('access')

    return (
        access_token ? <SignInHome /> : <SignOutHome />
    )
}