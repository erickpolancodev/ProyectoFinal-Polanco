import { Link } from "react-router-dom"
import { useCarritoContext } from "../context/CartContext"
import { ItemList } from "./ItemList"
import { HeroContainer } from "./HeroContainer"
export const Cart = ({actual}) => {
    const { carrito, totalPrice, emptyCart } = useCarritoContext()

    return (
        <div className="flex justify-center flex-col items-center">
            <HeroContainer titulo={actual}/>
            {
                carrito.length === 0 ?
                    <>
                        <h1 className="text-center my-4">Carrito Vacio</h1>
                        <button className="bg-indigo-500 text-white px-4 py-2 rounded my-5 w-40" >
                            <Link to={'/'}>
                                Volver al inicio
                            </Link>
                        </button>
                    </>
                    :
                    <div>
                        {<ItemList products={carrito} plantilla="ItemCart" />}
                        <div className="my-10 flex justify-around mx-auto lg:w-2/3 md:w-full sm:w-full">
                            <p className="my-4 px-4">TOTAL DE LA COMPRA: <strong>$USD {totalPrice()}</strong> </p>
                            <div>
                                <button className="btn-azul text-white py-2 rounded px-4 m-2" onClick={emptyCart}>
                                    Vaciar Carrito
                                </button>
                                <button className="btn-azul text-white py-2 rounded px-4 m-2" >
                                    <Link to={'/'}>
                                        Continuar Comprando
                                    </Link>
                                </button>
                                <button className="btn-azul text-white py-2 rounded px-4 m-2" >
                                    <Link to={'/checkout'}>
                                        Finalizar compra
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>

            }

        </div>
    )
}