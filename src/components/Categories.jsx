import { Link } from "react-router-dom"
export const Categories = () => {
    return(
        <div className="flex space-x-4">
            <li className="text-white">
                <Link to={'/category/apple'}>
                    <button className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium">Apple</button>
                </Link>
            </li>
            <li className="text-white">
                <Link to={'/category/samsung'}>
                    <button className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium">Samsung</button>
                </Link>
            </li>
            <li className="text-white">
                <Link to={'/category/amazon'}>
                    <button className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium">Amazon</button>
                </Link>
            </li>
        </div>
        
    )
}