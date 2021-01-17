import React from 'react'
import apiClient from './apiClient'

const DigimonsToGet = '?limit=10'

const getMon =()=>{
    console.log("this is client")
    return apiClient.get(DigimonsToGet)
}

export default getMon