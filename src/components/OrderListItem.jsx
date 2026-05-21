import {FaUtensils} from "react-icons/fa"
import "./OrderListItem.css"
import { OrderAction } from "./OrderAction"

export function OrderListItem({mesa, cliente, pedido}) {
    const onEdit = () => {
        alert(`Editar pedido mesa ${mesa}`)
    }
  return (
    <div className='order-item'>
        <p className='order-text'>
            <FaUtensils className="icon"/>
            <strong>Mesa {mesa} </strong> - {cliente}: {pedido}
        </p>
        <OrderAction onEdit={onEdit}/>
        
    </div>
  )
}


