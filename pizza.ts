type Pizza = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: "ordered" | "completed";
};

let cashInRegister: number = 100;
let orderIdCounter: number = 1;
const orderQueue: Order[] = [];
let pizzaIdCounter: number = 1;

const menu: Pizza[] = [
  { id: pizzaIdCounter++, name: "Margherita", price: 5 },
  { id: pizzaIdCounter++, name: "Pepperoni", price: 7 },
  { id: pizzaIdCounter++, name: "Hawaiian", price: 8 },
  { id: pizzaIdCounter++, name: "Diabolo", price: 9 },
  { id: pizzaIdCounter++, name: "Veggie", price: 6 },
];

const addNewPizza = (pizza: Omit<Pizza, "id">): Pizza => {
  const newPizza: Pizza = {
    id: pizzaIdCounter++,
    ...pizza,
  };
  menu.push(newPizza);
  return newPizza;
};

const placeOrder = (pizzaName: string): Order | undefined => {
  const selectedPizza = menu.find((pizza) => pizza.name === pizzaName);
  if (!selectedPizza) {
    throw new Error(`Pizza ${pizzaName} not found`);
  }
  cashInRegister += selectedPizza.price;
  const newOrder: Order = {
    id: orderIdCounter++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
};

const completeOrder = (orderId: number): Order | undefined => {
  const currentOrder = orderQueue.find((order) => order.id === orderId);
  if (!currentOrder) {
    throw new Error(`Order ${orderId} not found`);
  }
  currentOrder.status = "completed";
  return currentOrder;
};

addNewPizza({ name: "Quattro Stagioni", price: 10 });
addNewPizza({ name: "Quattro Formaggi", price: 11 });
addNewPizza({ name: "Capricciosa", price: 12 });

placeOrder("Margherita");
placeOrder("Pepperoni");

completeOrder(1);

console.log("Menu: ", menu);
console.log("Cash in register: ", cashInRegister);
console.log("Order queue: ", orderQueue);

function getPizzaDetail(identifier: number | string): Pizza | undefined {
  if (typeof identifier === "number") {
    return menu.find((pizza) => pizza.id === identifier);
  } else if (typeof identifier === "string") {
    return menu.find(
      (pizza) =>
        pizza.name.toLocaleLowerCase() === identifier.toLocaleLowerCase()
    );
  } else {
    throw new Error("Invalid identifier");
  }
}
