import React from 'react'

const page = ({ params } : any) => {
  return (
    <div>{`User ${params.profileId}`}</div>
  )
}

export default page