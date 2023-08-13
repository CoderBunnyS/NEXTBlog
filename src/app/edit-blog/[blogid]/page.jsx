import React from 'react'

function page({ params }) {
  return (
    <div>
    <h1>Edit blog number: {params.blogid}</h1>
    </div>
  )
}
export default page;