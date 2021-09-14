import React from 'react'

export default function TeamMember(props) {
  const { details } = props

  if (!details) {
    return <h3>Working fetching your Teammate&apos;s details...</h3>
  }

  return (
    <div className='Teammate container'>
      <h2>{details.name}</h2>
      <p>Favorite Color: {details.favoriteColor}</p>
    </div>
  )
}