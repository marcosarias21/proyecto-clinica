import React from 'react'

function AreasCards(props) {
  return (
    <div className='col-10 col-md-5 mx-1 '>
        <div className="   ">
    <img
      className="w-100"
      src={props.imagen}
      alt=""
      data-bs-target="#carouselExampleA"
      data-bs-slide-to="0"
    />
    <h5>{props.nombre}</h5>

  </div>
  </div>
  )
}

export default AreasCards