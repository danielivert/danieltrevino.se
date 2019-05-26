import * as React from 'react'

const SingleProject = (props: any) => {
  const { pageContext } = props

  return (
    <div>
      <h1>{pageContext.title[0].text}</h1>
      <p>{pageContext.description[0].text}</p>
    </div>
  )
}

export default SingleProject
