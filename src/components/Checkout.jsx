import { useRef } from "react"
import { useCarritoContext } from "../context/CartContext.jsx"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { createOrdenCompra, getOrdenCompra, getProduct, updateProduct } from "../firebase/firebase.js"
import { HeroContainer } from "./HeroContainer.jsx"

export const Checkout = ({actual}) => {
    const formRef = useRef()
    const navigate = useNavigate()//Devuelve la locacion actual de mi componente (ruta)
    const { carrito, totalPrice, emptyCart } = useCarritoContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        const datForm = new FormData(formRef.current) //Paso un formulario HTML a un objeto iterator
        const cliente = Object.fromEntries(datForm) //Paso un objeto iterator a un objeto simple

        //Modificar stock

        const aux = [...carrito]

        aux.forEach(prodCarrito => {
            getProduct(prodCarrito.id).then(prodBDD => {
                if (prodBDD.stock >= prodCarrito.quantity) { //Si existe stock suficinete para realizar la compra
                    prodBDD.stock -= prodCarrito.quantity
                    updateProduct(prodBDD.id, prodBDD)
                } else {
                    toast.info(`El producto con el nombre ${prod.name} no puede continuar con la compra ya que no posee stock suficiente`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark"
                    })
                    aux.filter(prod => prod.id != prodBDD.id) //Elimino el producto del carrito al tener stock suficiente
                }

            })

        })
        //Generar la orden de Compra
        const aux2 = aux.map(prod => ({ id: prod.id, quantity: prod.quantity, price: prod.price }))

        createOrdenCompra(cliente, totalPrice(), aux2, new Date().toLocaleDateString('es-AR', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
            .then(ordenCompra => {
                toast.success(`🛒 Muchas gracias por comprar con nosotros, su ID de compra es: ${ordenCompra.id} por un total de $${totalPrice()}. En breve nos contactaremos para realizar envio`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                })

                emptyCart()
                e.target.reset()
                navigate('/')
            })
            .catch(e => {
                toast.error(`Error al generar orden de compra: ${e}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                })
            })

    }
    return (
        <>
            {
                carrito.length === 0 ?
                    <>
                        <h2>Para finalizar compra debe tener productos en el carrito</h2>
                        <Link to={"/"}>
                            <button className="bg-indigo-500 text-white px-4 py-2 rounded">
                                Volver al inicio
                            </button>
                        </Link>

                    </>
                    :
                    <div className="p-4">
                        <HeroContainer titulo={actual} />
                        <div className="max-w-lg mx-auto my-10 p-6 mt-2  rounded-md ">
                            <form action="" ref={formRef} onSubmit={handleSubmit}>
                                <label className="block mb-1 text-gray-700">Nombre: </label>
                                <input type="text" className="w-full p-2 mb-3 border-b-2" name="nombre" />
                                <label className="block mb-1 text-gray-700">Apellido: </label>
                                <input type="text" className="w-full p-2 mb-3 border-b-2" name="apellido" />
                                <label className="block mb-1 text-gray-700">Direccion: </label>
                                <input type="text" className="w-full p-2 mb-3 border-b-2" name="direccion" />
                                <label className="block mb-1 text-gray-700">DNI: </label>
                                <input type="number" className="w-full p-2 mb-3 border-b-2" name="dni" />
                                <label className="block mb-1 text-gray-700">Email: </label>
                                <input type="email" className="w-full p-2 mb-3 border-b-2" name="email" />
                                <label className="block mb-1 text-gray-700">Telefono: </label>
                                <input type="number" className="w-full p-2 mb-3 border-b-2" name="telefono" />
                                <button type="submit" className="btn-azul w-full p-2 my-8  text-white rounded-md">Finalizar</button>
                            </form>
                        </div>
                    </div>
            }
        </>

    )
}