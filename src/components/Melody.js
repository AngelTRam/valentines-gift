import { useState } from "react"
import { Carta } from "./Carta"

export const Melody = () => {
    const [isChecked, setIsChecked] = useState(false)

    const checkHandler = () => {
        setIsChecked(!isChecked)
    }

    return (
        <div>
            <img
                src={require("../img/my-melody-love.gif")}
                className="Melody"
                onClick={checkHandler}
                style={{
                    maxHeight: isChecked ? "20vmin" : "40vmin",
                    transition: "2s"
                }}
            />
            {isChecked && (
                    <Carta />  
            )}
        </div>
    )
}
