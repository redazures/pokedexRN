import React from 'react'

import client from './client'

const getMon =()=>{
    return client.get()
}

export default getMon