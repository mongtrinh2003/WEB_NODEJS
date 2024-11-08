const Order = require('../models/order');
const moment = require('moment');

const getOrderService = async () => {
    try{
        return await Order.find();
    }catch(error) {
        console.error('Error getting list of orders:', error);
        throw error;
    }
}

const createOrderService = async (orderData) => {
    try{
        console.log(JSON.parse(orderData));
        const order = new Order(JSON.parse(orderData));
        if(await order.save()){
            return order;
        }
        else{
            return false;
        }
    }catch(error) {
        console.error('Error creating order:', error);
        throw error;
    }
}

const getOrderByCustomerIdService = async (id) => {
    try{
        const history = await Order.find({customerId: id})
            .populate('saleId')
            .populate('customerId')
            .populate('products.productId')
            .sort({purchaseDate : 1});
        if(history){
            return history
        }else{
            return false;
        }
         
    }catch(error) {
        console.error('Error getting history purchase:', error);
        throw error;
    }
}

const getOrderByTimeService = async (start,end) => {
    try{
        const startTime = moment(start).startOf('day').toISOString();
        const endTime = moment(end).endOf('day').toISOString();
        return await Order.find({
            purchaseDate: {
                $gte: startTime,
                $lte: endTime
            }
        })
            .populate('saleId')
            .populate('customerId')
            .populate('products.productId')
            .sort({purchaseDate : 1});
    }catch(error) {
        console.error('Error getting list of orders by time:', error);
        throw error;
    }
}


module.exports = {getOrderService, createOrderService, getOrderByTimeService, getOrderByCustomerIdService};