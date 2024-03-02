import React from 'react'

const page = ({ params } : any) => {
  return (
    <>
      <div>{params.groupId}</div>
      <p>This page is for unique groups</p>
    </>
    
  )
}

export default page