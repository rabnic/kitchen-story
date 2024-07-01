package com.kitchenstory.service;

import com.kitchenstory.entity.Order;
import com.kitchenstory.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public Order saveOrder(Order order) {
        return this.orderRepository.save(order);
    }

    public List<Order> getOrders(){
        return this.orderRepository.findAll();
    }

    public void deleteOrder(Long id) {
        this.orderRepository.deleteById(id);
    }
    public Order getOrder(Long id) {
        return this.orderRepository.findById(id).get();
    }
}
