const Navs = (username) => [
    {
        id: 1,
        name: username ? username : 'Account',
        link: username ? 'profile' : 'signin',
        icon: '<ion-icon name="person-outline"></ion-icon>',
        //to be displayed by the account/user dropdown.
        subnavs: username ? [
            { name: 'Orders', link: '/orders' },
            { name: 'Profile', link: '/profile' },
            { name: 'Saved Items', link: '/saved-items' }
        ] : null, 
    },
    {
        id: 2,
        name: 'Cart',
        link: 'cart',
        icon: '<ion-icon name="cart-outline"></ion-icon>',
    },
];
export default Navs;
