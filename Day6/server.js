const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3000;

const products = [
    {
        id: 1,
        name: "Nike Air Max",
        price: 5000
    },
    {
        id: 2,
        name: "Adidas Ultraboost",
        price: 7000
    }
];

// GET - Get all products
app.get("/products", (req, res) => {
    res.json(products);
});

// POST - Add a new product
app.post("/products", (req, res) => {
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    };

    products.push(newProduct);

    res.status(201).json(newProduct);
});

// PUT - Update a product
app.put("/products/:id", (req, res) => {
    const id = Number(req.params.id);

    const product = products.find((product) => product.id === id);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    product.name = req.body.name;
    product.price = req.body.price;

    res.json(product);
});

// DELETE - Delete a product
app.delete("/products/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = products.findIndex((product) => product.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    const deletedProduct = products.splice(index, 1);

    res.json(deletedProduct[0]);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});