import React, { Fragment } from 'react'

export default ({ title = 'about', text = [] }) => {
  return (
    <Fragment>
      <h1>{title}</h1>
      {text.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </Fragment>
  )
}
