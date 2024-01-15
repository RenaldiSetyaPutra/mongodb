package com.example.test.mongodb.controller;

import com.example.test.mongodb.collection.Products;
import com.example.test.mongodb.service.ProductsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/products")
public class ProductsController {

    private final ProductsService productsService;

    @PostMapping("/saveProduct")
    public ResponseEntity<?> saveProduct(@RequestBody Products products){
        Products response = productsService.saveProducts(products);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/getAllProduct")
    public ResponseEntity<?> getAllProduct(){
        List<Products> products = productsService.getProducts();

        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/getAllProductGt/{stock}")
    public ResponseEntity<?> getAllProductWhereStockGt(@PathVariable int stock){
        List<Products> products = productsService.getProductsWhereStockGt(stock);

        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/getAllProductLt/{stock}")
    public ResponseEntity<?> getAllProductWhereStockLt(@PathVariable int stock){
        List<Products> products = productsService.getProductsWhereStockLt(stock);

        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/getProductById/{id}")
    public ResponseEntity<?> getProductById(@PathVariable int id){
        Products products = productsService.getProductById(id);

        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @PostMapping("/updateProductById/{id}")
    public ResponseEntity<?> updateProductById(@PathVariable int id, @RequestBody Products products){
        Products response = productsService.updateProductById(id, products);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/deleteById/{id}")
    public ResponseEntity<?> deleteProductById(@PathVariable int id){
        String response = productsService.deleteProducts(id);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
