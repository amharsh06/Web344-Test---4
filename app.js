const express = require('express');
const app = express();
const data = require('./data');
const PORT = process.env.PORT || 8000;

app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views')); 
app.use(express.static('public'));

app.get('/', (req, res) => res.render('index'));
app.get('/user', (req, res) => res.render('user', { users: data.users }));
app.get('/products', (req, res) => res.render('products', { products: data.products }));
app.get('/products/filter', (req, res) => {
    const filteredProducts = data.products.filter(product => product.PID > 3);
    res.render('filteredProducts', { products: filteredProducts });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

module.exports = app;