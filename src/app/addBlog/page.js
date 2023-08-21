'use client'
import React from 'react'
import BlogForm from '../../components/BlogForm'

function page() {
  return (
    <div className="flex flex-col gap-10">
    <h1 className="text-2xl font-bold text-gray-800">Add a Blog Post</h1>
    <hr />
    <BlogForm />
  </div>
  )
}

export default page