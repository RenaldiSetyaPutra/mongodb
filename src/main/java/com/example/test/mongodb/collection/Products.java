package com.example.test.mongodb.collection;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Builder
@Document
public class Products {

    @Id
    private int _id;
    private String name;
    private int price;
    private String category;
    private String[] tags;
    private int stock;
    private int[] ratings;
    private Date createdDate;
    private Date updatedDate;
}
