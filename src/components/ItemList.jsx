import { Item } from "./Item"
import { ItemCart } from "./ItemCart"
export const ItemList = ({ products, plantilla }) => {
    return (
        <div className="flex flex-wrap">
            {
                plantilla === 'Item'
                    ?
                    products.map(prod => <Item key={prod.id} product={prod} />)
                    :
                    products.map(prod => <ItemCart key={prod.id} product={prod} />)

            }
        </div>

    )
}