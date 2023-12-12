import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function GameOfThrones() {

    const [fullName, setFullName] = useState('')
    const [family, setFamily] = useState('')
    const [image, setImage] = useState('')
    const [id, setId] = useState(1)

    const fetchCharacter = async () => {
        try {
            const response = await axios.get(`https://thronesapi.com/api/v2/Characters/${id}`)
            setFullName(response.data.fullName)
            setFamily(response.data.family)
            setImage(response.data.imageUrl)
        } catch (error) {
            console.error("API error", error)
        }
    }

    useEffect(() => {
        fetchCharacter()
    }, [fullName, family, image, id])

    return (
        <div>
            <h1>Game of Thrones Character</h1>
            <p>Your character: {fullName}</p>
            <p>Your family: {family}</p>
            <img src={image} alt="Game of Thrones Character" />
            <button onClick={() => {
                setId(id + 1)
                fetchCharacter()
            }}>Next Character</button>
        </div>
    )
}
