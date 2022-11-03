import React from 'react'
import axios from 'axios'


export const api =  axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})



export const getPostPage = async (pageParam = 1, options = {} ) => {
    const response = await api.get(`/posts?_page=${pageParam}`, options)
    return response.data
}

// https://jsonplaceholder.typicode.com/post?_page=${pageParam}