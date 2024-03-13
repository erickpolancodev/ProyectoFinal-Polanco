import { Link } from "react-router-dom"
import { useCounter } from "../hooks/useCounter"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faPlus, faMinus, faCartPlus} from "@fortawesome/free-solid-svg-icons"
import { useCarritoContext } from "../context/CartContext"
import { toast } from "react-toastify"

export const ItemDetail = ({ item }) => {
    const { addItem } = useCarritoContext()
    const { count, increment, decrement, reset } = useCounter(1, item.stock, 1)


    const handleAddToCart = () => {
        addItem(item, count)
        toast.success(`Producto agregado al carrito correctamente`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        })
    }
    return (

        <div className="bg-white p-8 rounded-lg relative flex h-full">
            <Link to={'/'}>
                <button className="absolute top-4 left-4 text-gray-700 hover:text-gray-900">
                    <FontAwesomeIcon icon={faAngleLeft} /> Volver
                </button>
            </Link>
            <div className="img-product">
                <img className="w-full h-100 object-cover mb-6" src={`${item.img}`} alt={`Imagen de ${item.name}`} />
            </div>
            
            <div className="text-justify detail-product">
                <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                <p className="text-gray-700 mb-2 font-semibold">Capacidad: {(item.capacity)? item.capacity : 'No aplica'}</p>
                <p className="text-gray-700 mb-2 font-semibold">Stock: {item.stock}</p>
                <p className="text-gray-700 mb-2 font-semibold">Precio: ${item.price}</p>
                <div className="container mx-auto mt-12">
                    <div className="flex items-center justify-center space-x-4 button-0">
                        <button className="text-blue-600 font-black text-xxl px-4 py-2 rounded" onClick={decrement}>
                            <FontAwesomeIcon icon={faMinus}/>
                        </button>
                        <span className="text-xl font-bold">{count}</span>
                        <button className="text-blue-600 font-black text-xxl px-4 py-2 rounded" onClick={increment}>
                            <FontAwesomeIcon icon={faPlus}/>
                        </button>
                        <button className="btn-azul text-white px-4 py-2 rounded" onClick={reset}>
                            Reset
                        </button>
                        <button className="btn-azul text-white px-4 py-2 rounded" onClick={handleAddToCart}>
                            <FontAwesomeIcon icon={faCartPlus}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>


    )
}