import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export const CartWidget = () =>{

    return (
        <>
            <button className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                <div className='relative'>
                    <FontAwesomeIcon className="mr-2" icon={faCartShopping} />
                    <span className="absolute right-0 top-0 rounded-full bg-blue-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm leading-tight text-center">5</span>
                </div>
            </button>
        </>
        )
    
    }