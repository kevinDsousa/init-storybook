import React from "react"
import './reactCe.css'
import event1 from '../images/event1.jpeg'
import event2 from '../images/event2.jpeg'
import event3 from '../images/event2.jpeg'
import event4 from '../images/event4.jpeg'
import cicero from '../images/cicero.png'

export const ReactCe = () => {
    return (
        <>
            <div className="reactContainer">
                <div className="reactComponent">
                    <img src={event1} alt="react ceara imagem" />
                    <img src={event2} alt="react ceara imagem" />
                    <img src={event3} alt="react ceara imagem" />
                    <img src={event4} alt="react ceara imagem" />
                </div>
                <div className="cicero">
                    <img src={cicero} />
                </div>
            </div>
        </>
    )
}