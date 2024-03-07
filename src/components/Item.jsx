import { Link } from "react-router-dom"
export const Item = ({ product }) => {
    return(
        
            <div className=" mx-auto border-gray-200 p-3 my-2  rounded-md shadow-sm hover:shadow-md  ">
                <Link to={`/item/${product.id}`}>
                    <img className="w-100" src={`../img/${product.img}`} alt={`Imagen de ${product.name}`} />
                    <div>
                        <h2 className="font-extrabold uppercase title-prod">{product.name} {product.capacity}</h2>
                        <h3 className="font-semibold  capitalize">{product.category}</h3>
                        <p className=" text-gray-500">Disponibles: {product.stock}</p>
                        <p className=" text-gray-500">$USD {product.price} </p>
                    </div>
                </Link>
            </div>
        
    )
}