import React from 'react'
import apiClient from './apiClient'

const DigimonsToGet = '?limit=3'

const getMon =()=>{
    return apiClient.get(DigimonsToGet)
}

export default getMon