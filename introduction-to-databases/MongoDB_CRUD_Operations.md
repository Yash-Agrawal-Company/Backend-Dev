# Assessment Questions

# 1. What are the advantages of using Mongoose over the native MongoDB driver?

Mongoose is an Object Data Modeling (ODM) library for MongoDB that provides a higher-level abstraction compared to the native MongoDB driver.

Advantages of using Mongoose:

* Schema Definition: Mongoose allows you to define schemas with structure, data types, and validations, whereas the native driver is schema-less.
* Data Validation: Built-in validation ensures data consistency before saving to the database.
* Middleware Support: You can use pre and post hooks for operations like save, update, and delete.
* Easy Query Building: Provides a more readable and structured way to write queries.
* Model-Based Approach: Data is managed through models, making code cleaner and organized.
* Relationship Handling: Supports population (similar to joins) for referencing documents.

Example:
Using Mongoose, you can define a schema for a user with validations, while in the native driver you directly insert JSON documents without structure.

---

# 2. Explain the difference between findOneAndUpdate() and updateOne().

Both methods are used to update documents in MongoDB, but they behave differently.

findOneAndUpdate():

* Finds a document and updates it in a single operation.
* Returns the document (either before or after update based on options).
* Useful when you need the updated document immediately.

updateOne():

* Updates the first matching document.
* Returns only the status/result of the operation (not the document itself).
* Slightly faster when you don’t need the updated document.

Example:

findOneAndUpdate:
await User.findOneAndUpdate({ name: "Yash" }, { age: 22 }, { new: true });

updateOne:
await User.updateOne({ name: "Yash" }, { age: 22 });

---

# 3. What is the purpose of middleware in Mongoose?

Middleware in Mongoose (also called hooks) are functions that run before or after certain operations.

Purpose of middleware:

* Data Processing: Modify or validate data before saving.
* Logging: Track operations like updates or deletions.
* Security: Hash passwords before saving users.
* Automation: Perform actions automatically (e.g., timestamps).

Types:

* Pre middleware: Runs before an operation (e.g., pre('save'))
* Post middleware: Runs after an operation (e.g., post('save'))

Example:
Hashing a password before saving a user document.

---

# 4. How do you implement pagination in Mongoose?

Pagination is used to limit and skip records while fetching data.

It is implemented using skip() and limit().

Example:

const page = 2;
const limit = 10;

const users = await User.find()
.skip((page - 1) * limit)
.limit(limit);

Explanation:

* skip(): Skips previous records.
* limit(): Limits the number of records returned.

This helps in efficiently loading large datasets page by page.

---

# 5. When should you use embedding vs referencing in MongoDB schema design?

Embedding and referencing are two ways to design relationships in MongoDB.

Embedding:

* Store related data inside a single document.
* Use when data is frequently accessed together.
* Faster reads, no need for joins.
* Example: Storing comments inside a blog post document.

Referencing:

* Store related data in separate documents and link using IDs.
* Use when data is large or shared across multiple documents.
* Helps avoid duplication.
* Example: User and orders stored separately, linked by userId.

Conclusion:

* Use embedding for tightly related, small datasets.
* Use referencing for large, reusable, or complex relationships.

---
