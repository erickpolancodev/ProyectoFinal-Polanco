import { useCarritoContext } from "../context/CartContext"
import { useCounter } from '../hooks/useCounter.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faTrashCan } from "@fortawesome/free-solid-svg-icons"

export const ItemCart = ({ product }) => {
    const { removeItem, updateItem } = useCarritoContext()
    const { count, increment, decrement } = useCounter(product.quantity, product.stock, 1)
    return (
        <div className="flex items-center justify-center p-4 border-gray-300 text-center flex-column flex-wrap">
            <div className="mr-6">
                <img src={`${product.img}`} alt={`Imagen de ${product.name}`} className="w-48 h-48 object-cover" />
            </div>
            <div className="flex-1 mr-3">
                <h3 className="text-lg font-semibold">{product.name} {product.capacity}</h3>
            </div>
            <div className="flex items-center">
                <button className=" px-4 py-2 rounded text-blue-600 font-black text-xxl" onClick={async () => {
                    updateItem(product.id, count - 1)
                    decrement()
                }}>
                    <FontAwesomeIcon icon={faMinus}/>
                </button>
                <span className="text-xl font-bold mx-2 border-2 p-2">{count}</span>
                <button className="px-4 py-2 rounded text-blue-600 font-black text-xxl" onClick={() => {
                    updateItem(product.id, count + 1)
                    increment()
                }}>
                    <FontAwesomeIcon icon={faPlus}/>
                </button>
            </div>
            <div className="ml-4">
                <p className="text-lg font-semibold">Subtotal: ${product.price * count}</p>
            </div>
            <div className="ml-4">
                <button className="bg-red-500  text-white px-4 py-2 rounded" onClick={() => removeItem(product.id)}>
                <FontAwesomeIcon icon={faTrashCan}/>
                </button>
            </div>
        </div>
    )
}