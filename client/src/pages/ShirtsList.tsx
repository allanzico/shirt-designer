import ShirtsCollar from 'components/shirt/ShirtCollar'
import { shirts } from 'data'
import React from 'react'
import { Link } from 'react-router-dom'

const ShirtsList = () => {

  return (
    <div>
        {
            shirts.map((shirt) => (
                <Link to={`/edit/${shirt.id}`} key={shirt.id}>
                    <h4>{shirt.name}</h4>
                </Link>
            ))
        }
    </div>
  )
}

export default ShirtsList