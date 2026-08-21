export let products = [
  {
    id: 1,
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with USB receiver",
    price: 799,
    category: "Electronics",
    stock: 25,
    imageUrl: "https://via.placeholder.com/300x300?text=Wireless+Mouse",
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard, blue switches",
    price: 2999,
    category: "Electronics",
    stock: 12,
    imageUrl: "https://via.placeholder.com/300x300?text=Mechanical+Keyboard",
  },
  {
    id: 3,
    name: "Cotton T-Shirt",
    description: "Plain cotton round-neck t-shirt",
    price: 499,
    category: "Apparel",
    stock: 50,
    imageUrl: "https://via.placeholder.com/300x300?text=T-Shirt",
  },
];

let nextId = 4;

export const getNextId = () => nextId++;