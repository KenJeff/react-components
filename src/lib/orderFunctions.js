/* getCompletedOrders()
calculateRevenue()
getHighValueOrders()
createOrderDashboard() */

import { orders } from "../data/orderData.js";

export function getCompletedOrders() {
    return orders.filter(order => order.status === 'completed')

}

export function calculateRevenue() {
    const completed = getCompletedOrders(orders);

    return completed.reduce(
        (totalRev, order) => totalRev + order.total
    )

}

export function getHighValueOrders(orders) {
    return orders.filter(order => order.total >= 100);
}

export function createOrderDashboard(orders) {
    return {
        totalOrders: orders.length,
        completedOrders: getCompletedOrders(orders).length,
        pendingOrders: orders.filter(order => order.status === "pending").length,
        cancelledOrders: orders.filter(order => order.status === "cancelled").length,
        revenue: calculateRevenue(orders),
        highValueOrders: getHighValueOrders(orders).length
    };
}
