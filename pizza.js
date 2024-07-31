const menu = [
  { name: "Margherita", price: 5 },
  { name: "Pepperoni", price: 7 },
  { name: "Hawaiian", price: 8 },
  { name: "Diabolo", price: 9 },
  { name: "Veggie", price: 6 },
];

const cashInRegister = 100;
const orderQueue = [];
const orderIdCounter = 1;

const addNewPizza = (pizza) => {
  menu.push(pizza);
};

const placeOrder = (pizzaName) => {
  const selectedPizza = menu.find((pizza) => pizza.name === pizzaName);
  cashInRegister += selectedPizza.price;
  const newOrder = {
    id: orderIdCounter++,
    pizza: selectedPizza,
    status: "ordered",
  };
  return newOrder;
};

const completeOrder = (orderId) => {
  const currentOrder = orderQueue.find((order) => order.id === orderId);
  currentOrder.status = "completed";
  return currentOrder;
};

addNewPizza({ name: "Quattro Stagioni", price: 10 });
addNewPizza({ name: "Quattro Formaggi", price: 11 });
addNewPizza({ name: "Capricciosa", price: 12 });

placeOrder("Margherita");
placeOrder("Pepperoni");

completeOrder("1");

console.log("Menu: ", menu);
console.log("Cash in register: ", cashInRegister);
console.log("Order queue: ", orderQueue);
