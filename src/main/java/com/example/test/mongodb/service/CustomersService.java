package com.example.test.mongodb.service;

import com.example.test.mongodb.collection.Customers;

import java.util.List;

public interface CustomersService {
    Customers saveCustomers(Customers customer);

    List<Customers> getCustomers();

    Customers getCustomerById(String id);

    Customers getCustomerByFullName(String fullName);

    Customers getCustomerByIdAndFullName(String id, String fullName);

    Customers updateCustomerById(String id, Customers request);

    String deleteCustomers(String id);
}
