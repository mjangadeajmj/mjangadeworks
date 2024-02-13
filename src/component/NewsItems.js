import React from 'react'
//import PropTypes from 'prop-types'

const Newsitems = (props) => {
  let { title, description, imageUrl, newsUrl, publishedAt, author } = props;
  return (
    <div className='my-2'>
      <div className="card my-2" >
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small>Updated by {author} on {new Date(publishedAt).toDateString()}</small></p>
          <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )

}

export default Newsitems
