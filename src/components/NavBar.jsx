import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { CartWidget } from "./CartWidget"
import { Categories } from './Categories'
import { Link } from 'react-router-dom'
export const Navbar = () =>{

return (
    <header>
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                    <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                    <span className="absolute -inset-0.5"></span>
                    <span className="sr-only">Open main menu</span>

                    
                    <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center mr-6">
                        <Link to={'/'}>
                            <p className='logo text-white font-extrabold'>TechStore</p>
                        </Link>
                    </div>
                    <div className="hidden sm:ml-6 sm:block lg:justify-end">
                    <div>
                        <ul className='flex mx-auto space-x-4 list-none'>
                            <Categories/>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <Link to={'/cart'}>
                        <CartWidget/>
                    </Link>
                    
                </div>
            </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
            <Categories />
            </div>
        </div>
        </nav>
    </header>
    )

}