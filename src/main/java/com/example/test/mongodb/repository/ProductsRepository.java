package com.example.test.mongodb.repository;

import com.example.test.mongodb.collection.Products;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductsRepository extends MongoRepository<Products, Integer> {

    @Query("{" +
            "stock: {$gt: ?0}" +
            "}")
    List<Products> getProductsWhereStockGt(int stock);

    @Query(value = "{" +
            "stock: {$lt: ?0}" +
            "}",
            fields = "{" +
                    "name : 1," +
                    "price : 1," +
                    "category : 1," +
                    "tags : 1," +
                    "stock : 1," +
                    "ratings : 1," +
                    "createdDate : 1," +
                    "updatedDate : 1" +
                    "}")
    List<Products> getProductsWhereStockLt(int stock);
}
