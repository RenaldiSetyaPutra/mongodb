package com.example.test.mongodb.impl;

import com.example.test.mongodb.collection.Customers;
import com.example.test.mongodb.repository.CustomersRepository;
import com.example.test.mongodb.service.CustomersService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CustomersServicesImpl implements CustomersService {

    private final CustomersRepository customersRepository;
    @Override
    public Customers saveCustomers(Customers customer) {
        customer.setCreatedDate(new Date());
        customer.setUpdatedDate(new Date());

        return customersRepository.insert(customer);
    }

    @Override
    public List<Customers> getCustomers() {

        return customersRepository.findAll();
    }

    @Override
    public Customers getCustomerById(String id) {
        Optional<Customers> customers = customersRepository.findById(id);

        return customers.get();
    }

    @Override
    public Customers getCustomerByFullName(String fullName) {
        return customersRepository.findByFullName(fullName);
    }

    @Override
    public Customers getCustomerByIdAndFullName(String id, String fullName) {

        return customersRepository.findByIdAndFullName(id, fullName);
    }

    @Override
    public Customers updateCustomerById(String id, Customers request) {
        Optional<Customers> updateCustomer = customersRepository.findById(id);

        if(updateCustomer.isPresent()) {
            updateCustomer.get().setFull_name(request.getFull_name());
            updateCustomer.get().setEmail(request.getEmail());
            updateCustomer.get().setUpdatedDate(new Date());

            customersRepository.save(updateCustomer.get());
        }

        return updateCustomer.get();
    }

    @Override
    public String deleteCustomers(String id) {
        customersRepository.deleteById(id);

        return "Hapus Data Berhasil";
    }
}
