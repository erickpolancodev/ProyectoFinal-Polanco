import { Item } from "./Item"
export const ItemList = ({ products }) => {
    return (
        <div className="flex flex-wrap">
            {products.map(prod => <Item product={prod} />)}
        </div>

    )
}