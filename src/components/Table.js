import React from 'react'

import styles from './Table.module.css'

export default function Table({ list }) {
    return (
        <div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.createdAt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
