import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ItemList } from "../components/ItemList"


export const ItemListContainer = ({greeting}) =>{
    const [products, setProducts] = useState([])
    const { cid } = useParams()

    useEffect( () =>{
        fetch('../data/productos.json')
        .then((res) => res.json())
        .then((prods) =>{
            if(cid){
                const productsByCat = prods.filter(prod => prod.category == cid)
                setProducts(productsByCat)
            }else{
                setProducts(prods)
            }
        })
        .catch((err) => console.log(err))
    },[cid])

    return (
        <div className="container grid grid-flow-row mx-auto my-5 px-4">
            <ItemList products={products} />
        </div>
    )
}