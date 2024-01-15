package com.example.test.mongodb.repository;

import com.example.test.mongodb.collection.Customers;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomersRepository extends MongoRepository<Customers, String> {

    @Query("{full_name: ?0}")
    Customers findByFullName(String name);

    @Query("{_id: ?0, full_name: ?1}")
    Customers findByIdAndFullName(String id, String name);
}
