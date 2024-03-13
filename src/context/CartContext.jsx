import { useState, createContext, useContext } from "react";

const CarritoContext = createContext() //Creando el contexto (por el momento vacio)

export const useCarritoContext = () => useContext(CarritoContext)

export const CarritoProvider = (props) => { 

    const [carrito, setCarrito] = useState([])

    //Buscar Producto
    const isInCart = (id) => {
        return carrito.some(prod => prod.id === id) 
    }

    //Agregar producto
    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {

            const indice = carrito.findIndex(prod => prod.id === item.id)
            const aux = [...carrito]
            aux[indice].quantity = cantidad
            console.log(aux[indice])
            console.log(aux)
            setCarrito(aux)
        } else {
            const newItem = {
                ...item,
                quantity: cantidad
            }

            setCarrito([...carrito, newItem]) 
        }
    }

    //Eliminar producto
    const removeItem = (id) => {
        setCarrito(carrito.filter(prod => prod.id !== id))
    }

    //Vaciar carrito
    const emptyCart = () => {
        setCarrito([])
    }

    const updateItem = (id, newQuantity) => {
        const indice = carrito.findIndex(prod => prod.id === id)
        const aux = carrito
        aux[indice].quantity = newQuantity
        setCarrito([...aux])
    }

    //Obtener cantidad de productos
    const getItemQuantity = () => {
        return carrito.reduce((acum, prod) => acum += prod.quantity, 0)
    }

    //Obtener precio total del carrito
    const totalPrice = () => {
        return carrito.reduce((acum, prod) => acum += (prod.quantity * prod.price), 0)
    }

    return (
        <CarritoContext.Provider value={{ carrito, addItem, removeItem, updateItem, emptyCart, getItemQuantity, totalPrice }}>
            {props.children}
        </CarritoContext.Provider>
    )
}