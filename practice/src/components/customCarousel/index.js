import React, { useState } from 'react'
import "./dashboard.css"



const imageArray = [
    "https://images.unsplash.com/photo-1695653422468-e28c0b88c143?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1695653422536-d1e9d449ce7b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1695654397438-9856b753d83f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    "https://images.unsplash.com/photo-1695654397565-b904c10fe594?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    "https://images.unsplash.com/photo-1695654395342-593936746d41?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
]

const CustomCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    console.log(imageArray.length,"this is state",activeIndex);

    const next = () => {
        setActiveIndex(activeIndex === imageArray.length - 1 ? 0 : activeIndex + 1)
    }
    const previous = () => {

        setActiveIndex(activeIndex === 0 ? imageArray.length - 1 : activeIndex - 1)
    }

    return (
        <>
            <div className='abcd'>

                <div className='bcd'>
                    <button onClick={previous}>
                        prev
                    </button>

                    <img src={imageArray[activeIndex]}  alt="" />

                    <button onClick={next}>
                        next
                    </button>
                </div>

            </div>
        </>
    )
}

export default CustomCarousel