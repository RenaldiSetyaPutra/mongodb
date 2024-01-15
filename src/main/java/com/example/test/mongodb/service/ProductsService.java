package com.example.test.mongodb.service;

import com.example.test.mongodb.collection.Products;

import java.util.List;

public interface ProductsService {
    Products saveProducts(Products products);

    List<Products> getProducts();

    List<Products> getProductsWhereStockGt(int stock);

    List<Products> getProductsWhereStockLt(int stock);

    Products getProductById(int id);

    Products updateProductById(int id, Products request);

    String deleteProducts(int id);
}
