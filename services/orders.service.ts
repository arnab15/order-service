import { OrderDocument, OrderModel } from "../models/Order.model";

export const createOrder = async (order: Omit<OrderDocument, "createdAt" | "updatedAt">) => {
    const newOrder = new OrderModel(order);
    return newOrder.save();
}

export const updateOrderStatus = async (id: string, status: OrderDocument["status"]) => {
    return OrderModel.findByIdAndUpdate(id, { status }, { new: true })
}