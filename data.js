const bcrypt = require('bcrypt');

const data = {
    users: [
        {
            name: 'fahstjlps',
            email: 'admin@admin.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true
        },

        {
            name: 'Kris',
            email: 'kris@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false
        },
    ],

    products: [
        {
          name: 'Slim Shirt',
          category: 'Shirts',
          image: '/images/p1.jpg',
          price: 60,
          brand: 'Nike',
          description: 'Hight quality product is here',
          rating: 4.5,
          numReviews: 10
        },
        {
          name: 'Fit Shirt',
          category: 'Shirts',
          image: '/images/p2.jpg',
          price: 50,
          brand: 'Nike',
          description: 'Hight quality product is here',
          rating: 4.2,
          numReviews: 5
        },
        {
          name: 'Best Pants',
          category: 'Pants',
          image: '/images/p3.jpg',
          price: 70,
          brand: 'Nike',
          description: 'Hight quality product is here',
          rating: 4.5,
          numReviews: 8
        }, {
          name: 'Best Pants',
          category: 'Pants',
          image: '/images/p4.jpg',
          price: 70,
          brand: 'Nike',
          description: 'Hight quality product is here',
          rating: 4.5,
          numReviews: 8
        },
      ]
}

module.exports = data;