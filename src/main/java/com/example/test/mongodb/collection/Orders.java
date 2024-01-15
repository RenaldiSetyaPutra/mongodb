package com.example.test.mongodb.collection;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@Document
public class Orders {

    @Id
    private String _id;
    private String total;
    private String[] items;
}
