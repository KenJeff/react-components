const users = [
    { name: "Alex", membershipTier: "gold", totalSpend: 1200, isVerified: true },
    { name: "Jordan", membershipTier: "silver", totalSpend: 450, isVerified: true },
    { name: "Sam", membershipTier: "none", totalSpend: 80, isVerified: false },
    { name: "Taylor", membershipTier: "gold", totalSpend: 3200, isVerified: true },
    { name: "Morgan", membershipTier: "silver", totalSpend: 290, isVerified: false }
];

const cart = [
    { name: "Laptop", price: 999, quantity: 1, inStock: true },
    { name: "Mouse", price: 29, quantity: 2, inStock: true },
    { name: "Monitor", price: 349, quantity: 1, inStock: false },
    { name: "Keyboard", price: 79, quantity: 1, inStock: true }
];

function getCheckoutCart(cart) {
    return cart.filter(item => item.inStock === true)

}

function calculateTotal(user, items) {
    const eligbleItems = getCheckoutCart(items)
    const total = eligbleItems.reduce((sum, eligbleItems) => sum + eligbleItems.price * eligbleItems.quantity, 0)

    if (user.membershipTier === 'gold') {
        return total * (1 - (20 / 100))
    }

    if (user.membershipTier === 'silver') {
        return total * (1 - 10 / 100)
    }

    return total

}

export function getVerifiedUsers(users) {
    const verifiedUsers = users.filter(user => user.isVerified == true)
    return verifiedUsers.map((verified) => ({ name: verified.name, membershipTier: verified.membershipTier }))

}


console.log(calculateTotal(users[1], cart))