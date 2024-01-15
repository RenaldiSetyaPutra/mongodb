package com.example.test.mongodb.impl;

import com.example.test.mongodb.collection.Products;
import com.example.test.mongodb.repository.ProductsRepository;
import com.example.test.mongodb.service.ProductsService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductsServicesImpl implements ProductsService {

    private final ProductsRepository productsRepository;

    @Override
    public Products saveProducts(Products products) {
        products.setCreatedDate(new Date());
        products.setUpdatedDate(new Date());

        return productsRepository.insert(products);
    }

    @Override
    public List<Products> getProducts() {
        return productsRepository.findAll();
    }

    @Override
    public List<Products> getProductsWhereStockGt(int stock) {
        return productsRepository.getProductsWhereStockGt(stock);
    }

    @Override
    public List<Products> getProductsWhereStockLt(int stock) {

        return productsRepository.getProductsWhereStockLt(stock);
    }

    @Override
    public Products getProductById(int id) {
        Optional<Products> product = productsRepository.findById(id);

        return product.get();
    }

    @Override
    public Products updateProductById(int id, Products request) {
        Optional<Products> updateProduct = productsRepository.findById(id);
        if (updateProduct.isPresent()) {
            updateProduct.get().setName(request.getName());
            updateProduct.get().setPrice(request.getPrice());
            updateProduct.get().setCategory(request.getCategory());
            updateProduct.get().setTags(request.getTags());
            updateProduct.get().setStock(request.getStock());
            updateProduct.get().setUpdatedDate(new Date());
            updateProduct.get().setRatings(request.getRatings());

            productsRepository.save(updateProduct.get());
        }

        return updateProduct.get();
    }

    @Override
    public String deleteProducts(int id) {
        productsRepository.deleteById(id);

        return "Hapus Data Berhasil";
    }
}
