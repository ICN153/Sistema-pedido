import { OrderListItem } from "./OrderListItem";

const pedidos = [
  { mesa: 3, cliente: "Isaias", pedido: "Pizza de calabresa" },
  { mesa: 5, cliente: "João", pedido: "Açai e Milkshake" },
  { mesa: 6, cliente: "Paulo", pedido: "Hamburguer Artesanal" },
  { mesa: 1, cliente: "Adriana", pedido: "Lasanha e suco" },
];

export function OrderList() {
  return (
    <div>
      <ul>
        {pedidos.map((pedido, index) => (
          <OrderListItem
            key={index}
            mesa={pedido.mesa}
            cliente={pedido.cliente}
            pedido={pedido.pedido}
          />
        ))}
      </ul>
    </div>
  );
}
