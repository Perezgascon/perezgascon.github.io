import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function YesOrNo() {
    const [answer, setAnswer] = useState(null)
    const [image, setImage] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://yesno.wtf/api')
                setAnswer(response.data.answer)
                setImage(response.data.image)

            } catch (error) {
                console.error("API error", error)
            }
        }

        fetchData()
    }, []);

    return (
        <div>
            <h1>Yes or No</h1>
            <p>Your answer: {answer}</p>
            <img src={image} alt="Yes or No" />
        </div>
    )
}
