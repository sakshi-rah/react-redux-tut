import React from 'react'

function Home(props) {
    console.warn(props)
    return (
        <React.Fragment>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://images.hindustantimes.com/productimages/htmobile4/P31397/heroimage/121008-v1-apple-iphone-x-mobile-phone-large-1.jpg" alt='IPhoneLogo' />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span><br />
                    <span>
                        Price: $2000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                <button 
                onClick={
                    ()=>{props.addToCartHandler({pice:2000,name:'i phone 14'})}
                    }>
                    Add To Cart</button>
            </div>
            </div>
        </React.Fragment>
    )
}

export default Home