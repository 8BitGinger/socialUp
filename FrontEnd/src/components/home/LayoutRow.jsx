import React from 'react'

const LayoutRow = (props) => {
    const { name, title, image, imageAlt, children } = props
  return (
    <div className='sections'>
        <img src={image} alt={imageAlt} />
        <label htmlFor={name}>{title}</label>
        <div className="row_1">
            {children}
        </div>
    </div>
  )
}

export default LayoutRow