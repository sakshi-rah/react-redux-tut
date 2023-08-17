import React from 'react'

function Home() {
    return (
        <React.Fragment>
            <div className='add-to-card'>
                <img src='https://cdn1.iconfinder.com/data/icons/shopping-e-commerce-part-1/33/add_cart-512.png' />
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://images.hindustantimes.com/productimages/htmobile4/P31397/heroimage/121008-v1-apple-iphone-x-mobile-phone-large-1.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span><br />
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add To Cart</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home