const Navs = (username) => [
  
    {
        id: 1,
        name: username ? username : 'Account', // Conditionally show username or 'Account'
        link: username ? 'profile' : 'signin', // Link to profile if logged in, otherwise signin
        icon: '<ion-icon name="person-outline"></ion-icon>',  
    },
    {
        id: 2,
        name: 'Cart',
        link: 'cart',
        icon: '<ion-icon name="cart-outline"></ion-icon>'
    }
];
export default Navs;