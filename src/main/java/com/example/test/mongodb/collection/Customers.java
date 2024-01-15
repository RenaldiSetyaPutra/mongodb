package com.example.test.mongodb.collection;

import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@Builder
@Document("customers")
public class Customers {

    @Id
    private String _id;

    private String full_name;

    @Indexed
    private String email;

    private Date createdDate;

    private Date updatedDate;
}
