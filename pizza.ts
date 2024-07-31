type Pizza = {
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: string;
};

const menu: Pizza[] = [
  { name: "Margherita", price: 5 },
  { name: "Pepperoni", price: 7 },
  { name: "Hawaiian", price: 8 },
  { name: "Diabolo", price: 9 },
  { name: "Veggie", price: 6 },
];

let cashInRegister: number = 100;
let orderIdCounter: number = 1;
const orderQueue: Order[] = [];

const addNewPizza = (pizza: Pizza) => {
  menu.push(pizza);
};

const placeOrder = (pizzaName: string) => {
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

const completeOrder = (orderId: number) => {
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
