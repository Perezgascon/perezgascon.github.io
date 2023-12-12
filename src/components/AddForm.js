import React, { useState } from 'react'

export default function AddForm({ handlerAddItem }) {
    const [item, setItem] = useState();

    const handlerName = (e) => {
        const form = { ...item, name: e.target.value };
        setItem(form);
    }

    const handlerPrice = (e) => {
        const form = { ...item, price: e.target.value };
        setItem(form);
    }

    const handlerQuantity = (e) => {
        const form = { ...item, quantity: e.target.value };
        setItem(form);
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        handlerAddItem(item);
    }

    return (
        <div>
            <form onSubmit={handlerSubmit}>
                <input type="text" placeholder='name' name="item" onChange={handlerName} />
                <input type="number" placeholder='price' name="price" onChange={handlerPrice} />
                <input type="number" placeholder='quantity' name="quantity" onChange={handlerQuantity} />
                <button>Add</button>
            </form>
        </div>
    )
}
