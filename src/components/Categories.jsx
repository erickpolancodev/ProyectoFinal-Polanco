import { Link } from "react-router-dom"
export const Categories = () => {
    return(
        <div className="flex space-x-4">
            <li className="text-white">
                <Link to={'/category/apple'}>
                    <button className="bg-transparent text-white rounded-md px-3 py-2 text-sm font-medium hover:border-2 border-white">Apple</button>
                </Link>
            </li>
            <li className="text-white">
                <Link to={'/category/samsung'}>
                    <button className="bg-transparent text-white rounded-md px-3 py-2 text-sm font-medium hover:border-2 border-white">Samsung</button>
                </Link>
            </li>
            <li className="text-white">
                <Link to={'/category/amazon'}>
                    <button className="bg-transparent text-white rounded-md px-3 py-2 text-sm font-medium hover:border-2 border-white ">Amazon</button>
                </Link>
            </li>
        </div>
        
    )
}