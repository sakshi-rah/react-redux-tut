import React from 'react'

function Header(props) {
    console.warn(props.data)
    return (
        <div>
            <div className='add-to-card'>
            <span className="cart-count">{props.data.length}</span>
                <img src='https://cdn1.iconfinder.com/data/icons/shopping-e-commerce-part-1/33/add_cart-512.png' alt='addtocart Logo' />
            </div>
        </div>
    )
}


export default Header