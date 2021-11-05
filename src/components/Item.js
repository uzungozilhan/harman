import { useState, useEffect } from 'react'
import List from './List/List'
import Purchasing from './Purchasing/Purchasing'

const Item = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
    
}, [item])

    return (
        <div>
            <Purchasing addItem={setItem} item={ item }/>
            <List />
        </div>
    )
}

export default Item
