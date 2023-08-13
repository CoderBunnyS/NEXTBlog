import React from "react";

function page({params}) {
  return (
    <div>
      <h1>Blog Info for blog ID: {params.blogid}</h1>
    </div>
  );
}

export default page;
