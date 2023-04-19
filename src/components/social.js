import React from "react"

const Social = ({ data }) => {
  return (
    <div
      style={{
        display: `flex`,
        alignItems: `center`,
      }}
    >
      <svg
        style={{
          stroke: `var(--color-text)`,
        }}
        className="" fillOpacity="0" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
        <path d={data.path}></path>
      </svg>
      <a href={`${data.link}${data.user}`}>@{data.user}</a>
    </div>
  )
}

export default Social
