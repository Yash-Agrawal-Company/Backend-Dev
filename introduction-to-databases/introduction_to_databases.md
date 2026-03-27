# Assessment Questions

# 1. Explain the key differences between SQL and NoSQL databases with examples.

Difference between SQL and NoSQL databases is mainly based on structure, scalability, and usage.

SQL databases (Structured Query Language) are relational databases. They store data in tables with predefined schemas (rows and columns). Examples include MySQL, PostgreSQL, and Oracle. These databases are best suited for structured data and applications where relationships between data are important, such as banking systems.

NoSQL databases (Not Only SQL) are non-relational and store data in flexible formats like documents, key-value pairs, graphs, or wide-columns. Examples include MongoDB, Cassandra, and Redis. They are ideal for handling large volumes of unstructured or semi-structured data, such as real-time applications, social media platforms, and big data systems.

Key Differences:

* SQL databases use structured schema; NoSQL uses dynamic schema.
* SQL uses tables; NoSQL uses collections, documents, or key-value pairs.
* SQL is vertically scalable; NoSQL is horizontally scalable.
* SQL supports complex joins; NoSQL avoids joins and uses embedded data.
* SQL is ACID-compliant; NoSQL often follows eventual consistency.

Example:
A banking system would use SQL for strict transactions, while a social media app may use NoSQL to store user posts and interactions.

---

# 2. What does the CAP theorem state, and why can’t a distributed system guarantee all three properties?

The CAP theorem states that a distributed system can only guarantee two out of the following three properties at the same time:

* Consistency (C): All nodes see the same data at the same time.
* Availability (A): Every request gets a response (success or failure).
* Partition Tolerance (P): The system continues to operate despite network failures.

In real-world distributed systems, network partitions (failures) are unavoidable. When a partition occurs, the system must choose between consistency and availability.

* If it chooses consistency, some requests may fail (not available).
* If it chooses availability, some data may be outdated (not consistent).

Hence, it is impossible to guarantee all three simultaneously.

---

# 3. Describe three scenarios where MongoDB would be preferred over a relational database.

MongoDB is preferred in the following scenarios:

1. Handling Unstructured Data
   When data does not follow a fixed schema (e.g., user-generated content, logs), MongoDB’s flexible document model is useful.

2. Real-time Applications
   Applications like chat apps or live analytics systems benefit from MongoDB’s fast read/write operations.

3. Rapid Development and Scaling
   When requirements change frequently, MongoDB allows developers to modify schema easily without migrations. It also supports horizontal scaling for large-scale systems.

---

# 4. Why does MongoDB use BSON internally instead of storing documents as JSON?

MongoDB uses BSON (Binary JSON) instead of plain JSON for several reasons:

* Efficiency: BSON is binary-encoded, making it faster to store and retrieve.
* Rich Data Types: Supports additional data types like Date, ObjectId, and Binary data.
* Faster Traversal: BSON allows quicker parsing compared to text-based JSON.
* Size Optimization: Some data types take less space in BSON.

Thus, BSON improves performance and flexibility compared to JSON.

---

# 5. Write MongoDB queries to find all students with GPA above 3.5 and enrolled in “CS101”.

Assuming a collection named "students", the query would be:

db.students.find({
gpa: { $gt: 3.5 },
course: "CS101"
})

If courses are stored as an array:

db.students.find({
gpa: { $gt: 3.5 },
courses: "CS101"
})

This query returns all students whose GPA is greater than 3.5 and who are enrolled in the CS101 course.

---
