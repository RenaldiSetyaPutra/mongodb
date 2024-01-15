package com.example.test.mongodb.controller;

import com.example.test.mongodb.collection.Customers;
import com.example.test.mongodb.service.CustomersService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/customers")
public class CustomersController {
    private final CustomersService customersService;

    @PostMapping("/saveCustomer")
    public ResponseEntity<?> saveCustomers(@RequestBody Customers customers){
        Customers response = customersService.saveCustomers(customers);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/getAllCustomer")
    public ResponseEntity<?> getCustomers(){
        List<Customers> customers = customersService.getCustomers();

        return new ResponseEntity<>(customers, HttpStatus.OK);
    }

    @GetMapping("/getById/{id}")
    public ResponseEntity<?> getCustomerById(@PathVariable String id){
        Customers customers = customersService.getCustomerById(id);

        return new ResponseEntity<>(customers, HttpStatus.OK);
    }

    @GetMapping("/getByFullName/{fullName}")
    public ResponseEntity<?> getCustomerByFullName(@PathVariable String fullName) {
        Customers customers = customersService.getCustomerByFullName(fullName);

        return new ResponseEntity<>(customers, HttpStatus.OK);
    }

    @GetMapping("/getByIdAndFullName/{id}/{fullName}")
    public ResponseEntity<?> getCustomerByFullName(@PathVariable String id, @PathVariable  String fullName) {
        Customers customers = customersService.getCustomerByIdAndFullName(id, fullName);

        return new ResponseEntity<>(customers, HttpStatus.OK);
    }

    @PostMapping("/updateCustomerById/{id}")
    public ResponseEntity<?> updateCustomerById(@PathVariable String id, @RequestBody Customers request){
        Customers customers = customersService.updateCustomerById(id, request);

        return new ResponseEntity<>(customers, HttpStatus.OK);
    }

    @DeleteMapping("/deleteById/{id}")
    public ResponseEntity<?> deleteCustomers(@PathVariable String id){
        String response = customersService.deleteCustomers(id);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
