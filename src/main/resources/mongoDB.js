db.createCollection("customers");

db.createCollection("products");

db.createCollection("orders");

db.getCollectionNames();

db.customers.find()

// insert collection
db.customers.insertOne({
    _id: "Aldi",
    name: "Renaldi Setya Putra"
})

db.products.insertMany([
{
    _id: 1,
    name: "Indomie Ayam Bawang",
    price: new NumberLong("3500")
},
{
    _id: 2,
    name: "Indomie Goreng",
    price: new NumberLong("3500")
},
{
    _id: 3,
    name: "Pop Mie Ayam Bawang",
    price: new NumberLong("8500")
},
{
    _id: 4,
    name: "Pop Mie Goreng",
    price: new NumberLong("8000")
},
{
    _id: 5,
    name: "Pop Mie Bakso",
    price: new NumberLong("8000")
}
])

db.products.insertMany([
    {
        _id: 6,
        name: "Xiaomi 12 Lite",
        price: new NumberLong("5000000"),
        category: "handphone"
    },
    {
        _id: 7,
        name: "Lenovo LOQ",
        price: new NumberLong("18500000"),
        category: "laptop"
    },
    {
        _id: 8,
        name: "Teacgear",
        price: new NumberLong("400000"),
        category: "keyboard"
    },
    {
        _id: 9,
        name: "Foxbat-III",
        price: new NumberLong("200000"),
        category: "mouse"
    },
    {
        _id: 10,
        name: "Mouse LOQ",
        price: new NumberLong("250000"),
        category: "mouse"
    }
])

db.orders.insertOne({
    _id: new ObjectId(),
    total: new NumberLong("14000"),
    items: [
        {
            product_id: 1,
            price: new NumberLong("3500"),
            quantity: new NumberInt("2")
        },
        {
            product_id: 2,
            price: new NumberLong("3500"),
            quantity: new NumberInt("2")
        }
    ]
})

// Query Document
db.customers.find({
    _id: "Aldi"
})

db.customers.find({
    name: "Renaldi Setya Putra"
})

db.products.find({
    price: 3500
})

db.orders.find({
    "items.product_id": 1
})

// Comparison Operator
db.customers.find({
    _id:{
        $eq: "Aldi"
    }
})

db.products.find({
    price:{
        $lt:8000
    }
})

db.products.find({
    category:{
        $eq:"keyboard"
    }
})

db.products.find({
    category:{
        $in: ["laptop", "handphone"]
    }
})

db.products.find({
    category:{
        $in: ["laptop", "handphone"]
    },
    price: {
        $gt: 10000000
    }
})

// Logical Operator
db.products.find({
    $and: [
        {
            category:{
                $in: ["laptop", "handphone"]
            },
            price: {
                $gt: 10000000
            }
        }
    ]
})

db.products.find({
    category:{
        $not:{
            $in: ["laptop", "handphone"]
        },
    }
})

// Element Operator
db.products.find(
    {
        category: {
            $exists: false
        }
    }
)

db.products.find(
    {
        category: {
            $exists: true
        }
    }
)

db.products.find(
    {
        category:{
            $type: "string"
        }
    }
)

db.products.find(
    {
        price:{
            $type: ["int", "long"]
        }
    }
)

// Evaluation Operator
db.customers.find(
    {
        $expr: {
            $not:{
                $eq: [
                    "$_id", "$name"
                ]
            }
        }
    }
)

db.products.find(
    {
        $jsonSchema: {
            required: ["name", "category"] 
        }
    }
)

db.products.find(
    {
        $jsonSchema: {
            required: ["name", "category"],
            properties: {
                name: {
                    type: "string"
                },
                price: {
                    type: "number"
                }
            }
        }
    }
)

// Mod Operator
db.products.find(
    {
        price: {
            $mod: [5, 0]
        }
    }
)

// Regex Operator
db.products.find(
    {
        name: {
            $regex: /mie/,
            $options: "i"
        }
    }
)

db.products.find(
    {
        name: {
            $regex: /^Pop Mie/
        }
    }
)

// Where Operator
db.customers.find(
    {
        $where: function(){
            return this._id = this.name
        }
    }
)

// Array Operator
db.products.insertMany(
    [
        {
            _id: 11,
            name: "Logitech Wireless Mouse",
            price: new NumberLong("250000"),
            category: "mouse",
            tags: ["logitech", "mouse", "accesories"]
        },
        {
            _id: 12,
            name: "Cooler Pad Gaming",
            price: new NumberLong("250000"),
            category: "cooler",
            tags: ["cooler", "accesories"]
        },
        {
            _id: 13,
            name: "Samsung Curve Monitor",
            price: new NumberLong("250000"),
            category: "monitor",
            tags: ["samsung", "monitor", "computer"]
        },
        {
            _id: 14,
            name: "Gaming Chair",
            price: new NumberLong("250000"),
            category: "chair",
            tags: ["chair", "accesories", "computer"]
        },
        {
            _id: 15,
            name: "Table Gaming",
            price: new NumberLong("250000"),
            category: "table",
            tags: ["table", "accesories", "computer"]
        }
    ]
)

db.products.find(
    {
        tags: {
            $all: ["accesories", "computer"]
        }
    }
)

db.products.find(
    {
        tags: {
            $elemMatch: {
                $in: ["mouse", "monitor", "chair", "table"]
            }
        }
    }
)

db.products.find(
    {
        tags: {
            $size: 3
        }
    }
)

// Projection Operator
db.products.find(
    {},
    {
        name: 1,
        category: 1
    }
)

db.products.find(
    {},
    {
        tags: 0,
        price:0
    }
)

db.products.find(
    {},
    {
        name: 1,
        tags: {
            $elemMatch: {
                $in: ["samsung", "logitech"]
            }
        }
    }
)

db.products.find(
    {
        tags: {
            $exists: true
        }
    },
    {
        name: 1,
        "tags.$": 1
    }
)

db.products.find(
    {
        tags: {
            $exists: true
        }
    },
    {
        name: 1,
        tags: {
            $slice: 2
        }
    }
)

// Query Modifier
db.products.find({}).count()

db.products.find({}).limit(5)

db.products.find({}).skip(5).limit(5)

db.products.find({}).skip(5).sort(
    {
        category: 1,
        name: -1
    }
).limit(4)

// Update Document
db.products.updateOne(
    {
        _id: 1
    },
    {
        $set:{
            category: "food"
        }
    }
)

db.products.updateOne(
    {
        _id: 2
    },
    {
        $set:{
            category: "food"
        }
    }
)

db.products.updateMany(
    {
        category: {
            $exists: false
        }
    },
    {
        $set: {
            category: "food"
        }
    }
)

db.products.updateMany({
        $and: [
            {
                category: {
                    $eq: "food"
                }
            },
            {
                tags: {
                    $exists: false
                }
            }
        ]
    },
    {
        $set: {
            tags: ["food"]
        }
})

db.products.insertOne({
    _id:16,
    name: "Salah",
    wrong: "salah"
})

db.products.replaceOne({
    _id: 16
}, {
    name:"Adidas",
    price: new NumberLong("1100000"),
    category: "shoes",
    tags: ["shoes", "adidas"]
})

// Update Operator
db.products.updateMany(
    {},
    {
        $set: {
            stock: 0
        }
    }
)

db.products.updateMany(
    {},
    {
        $inc: {
            stock: 10
        }
    }
)

db.customers.updateMany(
    {},
    {
        $rename: {
            name: "full_name"
        }
    }
)

db.customers.updateMany(
    {},
    {
        $set: {
            wrong: "ups"
        }
    }
)

db.customers.updateMany(
    {},
    {
        $unset: {
            wrong: ""
        }
    }
)

db.products.updateMany(
    {},
    {
        $currentDate: {
            lastModifiedDate: {
                $type: "date"
            }
        }
    }
)

// Array $ Operator
db.products.updateMany({},
    {
        $set: {
            ratings: [90, 80, 70]
        }
    }
)

db.products.updateMany(
    {
        ratings: 90
    },
    {
        $set: {
            "ratings.$": 100
        }
    }
)

db.products.updateMany(
    {},
    {
        $set: {
            "ratings.$[]": 100
        }
    }
)

db.products.updateMany(
    {},
    {
        $set: {
            "ratings.$[element]" : 100
        }
    },
    {
        arrayFilters: [
            {
                element:{
                    $gte: 80
                }
            }
        ]
    }
)

db.products.updateMany(
    {},
    {
        $set: {
            "ratings.0": 90,
            "ratings.1": 80
        }
    }
)

db.products.updateOne(
    {
        _id: 1
    },
    {
        $addToSet: {
            tags: "favorit"
        }
    }
)

db.products.updateOne(
    {
        _id: 1
    },
    {
        $pop: {
            ratings: -1
        }
    }
)

db.products.updateOne(
    {
        _id: 2
    },
    {
        $pop: {
            ratings: 1
        }
    }
)

db.products.updateMany(
    {},
    {
        $pull: {
            ratings: {
                $gte: 80
            }
        }
    }
)

db.products.updateMany(
    {},
    {
        $push: {
            ratings: 100
        }
    }
)

db.products.updateMany(
    {},
    {
        $pullAll: {
            ratings: [100, 0]
        }
    }
)

db.products.updateMany(
    {},
    {
        $push: {
            ratings: {
                $each: [100, 200, 300]
            }
        }
    }
)

db.products.updateMany(
    {},
    {
        $addToSet: {
            tags: {
                $each: ["favorit"]
            }
        }
    }
)

db.products.updateMany(
    {},
    {
        $push: {
            tags: {
                $each: ["favorit"],
                $position: 1
            }
        }
    }
)

db.products.updateMany(
    {},
    {
        $push: {
            ratings: {
                $each: [100, 200, 300, 400, 500],
                $sort: -1
            }
        }
    }
)

db.products.updateMany(
    {},
    {
        $push: {
            ratings: {
                $each: [100, 200, 300, 400, 500],
                $slice: -10,
                $sort: -1
            }
        }
    }
)

// Delete Operator
db.customers.insertOne(
    {
        _id: "spammer",
        full_name: "Spammer"
    }
)

db.customers.deleteOne(
    {
        _id: "spammer"
    }
)

db.customers.insertMany(
    [
        {
            _id: "spammer",
            full_name: "Spammer"
        },
        {
            _id: "spammer1",
            full_name: "Spammer1"
        },
        {
            _id: "spammer2",
            full_name: "Spammer2"
        }
    ]
)

db.customers.deleteMany(
    {
        _id: {
            $regex: "spammer"
        }
    }
)

// Bulk Write Operation
db.customers.bulkWrite([
    {
        insertOne: {
            document:{
                _id: "user",
                full_name: "user"
            }
        }
    },
    {
        insertOne: {
            document:{
                _id: "admin",
                full_name: "Administrator"
            }
        }
    },
    {
        updateMany: {
            filter: {
                _id:{
                    $in: ["user", "admin"]
                }
            },
            update: {
                $set: {
                    full_name: "Renaldi Setya Putra"
                }
            }
        }
    }
])

// Index Function
db.products.getIndexes()

db.products.createIndex({
    category: 1
})

db.products.dropIndex("category_1")

db.products.find({
    category: "food"
}).explain()

db.products.find({
    category: "food"
}).sort({
    category:1
}).explain()

db.products.find({
    category: "food"
}).sort({
    category:-1
}).explain()

db.products.find({
    tags: "mouse"
}).explain() // untuk debug

// Compound Index
db.products.createIndex(
    {
        stock:1,
        tags:1
    }
)

db.products.find(
    {
        stock:10,
        tags:"favorit"
    }
)

db.products.find(
    {
        stock:10,
        tags:"favorit"
    }
).explain()

db.products.find(
    {
        stock:10
    }
).explain()

// Text Index
db.products.createIndex(
    {
        name: "text",
        category: "text",
        tags: "text"
    },
    {
        weights: {
            name: 10,
            category: 5,
            tags: 1
        }
    }
)

db.products.find(
    {
        $text: {
            $search: "mie"
        }
    }
)

db.products.find(
    {
        $text: {
            $search: "mie mouse"
        }
    }
)

db.products.find(
    {
        $text: {
            $search: '"pop mie"'
        }
    }
)

db.products.find(
    {
        $text: {
            $search: "pop mie -ayam"
        }
    }
).explain()

// Meta Operator
db.products.find(
    {
        $text: {
            $search: "mie mouse"
        }
    },
    {
        searchScore: {
            $meta: "textScore"
        }
    }
)

// Wildcard Index
db.customers.createIndex({
    "customFields.$**": 1
})

db.customers.insertMany(
    [
        {
            _id: "aldie",
            full_name: "RSP",
            customFields: {
                hobby: "Gaming",
                university: "Universitas Belum Ada"
            }
        },
        {
            _id: "setya",
            full_name: "RSP",
            customFields: {
                ipk: "5.00",
                university: "Universitas Belum Ada"
            }
        },
        {
            _id: "putra",
            full_name: "RSP",
            customFields: {
                status: "Belum Menikah",
                university: "Universitas Belum Ada"
            }
        }
    ]
)

db.customers.find(
    {
        "customFields.status": "Belum Menikah"
    }
)

db.customers.find(
    {
        "customFields.university": "Universitas Belum Ada"
    }
)

// TTL Index
db.createCollection("sessions");

db.sessions.createIndex(
    {
        createdAt: 1
    },
    {
        expireAfterSeconds: 10
    }
)

db.sessions.insertOne(
    {
        _id: 1,
        session: "Session 1",
        createdAt: new Date()
    }
)

// Unique Index
db.customers.createIndex(
    {
        email:1
    },
    {
        unique: true,
        sparse: true
    }
)

db.customers.updateOne(
    {
        _id: "Aldi"
    },
    {
        $set: {
            email: "aldi@example.com"
        }
    }
)

// Case Insensitive
db.customers.find(
    {
        full_name: "renaldi Setya Putra"
    }
)

db.customers.createIndex(
    {
        full_name:1
    },
    {
        collation: {
            locale: "en",
            strength: 2 // 1 = sensitive, 2 = tidak sensitive
        }
    }
)

db.customers.find(
    {
        full_name: "renaldi Setya Putra"
    }
).collation( {
    locale: "en",
    strength: 2 // 1 = sensitive, 2 = tidak sensitive
})

// Partial Index
db.products.createIndex(
    {
        price: 1
    },
    {
        partialFilterExpression: {
            stock: {
                $gt: 0
            }
        }
    }
)

db.products.find(
    {
        price: {
            $eq: 3500
        }
    }
)

db.products.find(
    {
        price: {
            $eq: 3500
        },
        stock:{
            $gt:0
        }
    }
)

// Security
db.createUser(
    {
        user: "admin",
        pwd: "admin",
        roles: [
            "userAdminAnyDatabase",
            "readWriteAnyDatabase"
        ]
    }
)

db.createUser(
    {
        user: "user",
        pwd: "user",
        roles: {
            role: "read",
            db:"namaDb"
        }
    }
)

"mongodb://mongo:mongo@localhost:27017/belajar?authSource=admin"
"mongodb://salah:salah@localhost:27017/belajar?authSource=admin"

// User Management
db.changeUserPassword("user", "password")

db.dropUser("user")

db.updateUser("user", {
    roles: [
        {
            role: "readWrite",
            db: "namaDb"
        }
    ]
})

db.createRole(
    {
        role: "session_management",
        roles:[
            {
                role: "read",
                db: "belajar"
            }
        ],
        privileges:[
            {
                resource:{
                    db: "belajar",
                    collection: "sessions"
                },
                actions: ["insert"]
            }
        ]
    }
)

db.getRoles(
    {
        showPrivileges: true
    }
)

db.products.find(
    {
        stock:{
            $lt:10
        }
    }
)