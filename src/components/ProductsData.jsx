import Card from "./PhoneCard";
import styles from './ProductsData.module.css';
import { useState } from "react";
import Header from "./Header";

const Products = () => {
    const data = [
        { img: 'https://www.course-api.com/images/cart/phone-1.png', name: 'Samsung Galaxy S8', price: 799.99, items: 0 },
        { img: 'https://www.course-api.com/images/cart/phone-2.png', name: 'Google Pixel', price: 499.99, items: 0 },
        { img: 'https://www.course-api.com/images/cart/phone-3.png', name: 'Xiaomi Redmi Note 2', price: 699.99, items: 0 },
        { img: 'https://www.course-api.com/images/cart/phone-4.png', name: 'Samsung Galaxy S7', price: 599.99, items: 0 }
    ];

    const [arr, setArr] = useState([...data]);


    const removeItem = (idx) => {   
        setArr(prevArr => prevArr.filter((_, index) => index !== idx));
    };

    const onIncrease = (idx) => {
        setArr(prevArr => prevArr.map((item, index) =>
            index === idx ? { ...item, items: item.items + 1 } : item
        ));
    };

    const onDecrease = (idx) => {
        setArr(prevArr => prevArr.map((item, index) =>
            index === idx && item.items > 0 ? { ...item, items: item.items - 1 } : item
        ));
    };

    const clearCart = ()=>{
        setArr([])
    }

    const totalPrice = arr.reduce((acc,item)=> acc + item.price * item.items , 0) ;
    const totalItems = arr.reduce((acc,item)=> acc + item.items ,0)

    return (

        <>
        <Header totalItems={totalItems} />
        <div className={styles.cart}>
            {arr.map((item, idx) => (
                <Card
                    key={idx}
                    id={idx}
                    {...item}
                    removeItem={removeItem}
                    onIncrease={onIncrease}
                    onDecrease={onDecrease}
                />
            ))}
    
            <h2>Total : ${totalPrice.toFixed(2)} </h2>

            <button  onClick={clearCart}  className={styles.clearCartBtn}>Clear Cart</button>
        </div>
        </>
    );
}

export default Products;
