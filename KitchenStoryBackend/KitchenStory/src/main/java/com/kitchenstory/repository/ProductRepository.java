package com.kitchenstory.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.kitchenstory.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    public Product findByName(String name);
    public Iterable<Product> findByNameContainingIgnoreCase(String name);
}
