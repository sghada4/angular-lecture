# README: Multiple Collections in MongoDB

## Overview
This document explains how to establish relationships among multiple collections in MongoDB. It focuses on creating nested documents, determining when to use them, and understanding alternatives like referencing other collections. By the end, you'll be equipped to use MongoDB's relational capabilities effectively.

---

## Nested Documents
Nested documents allow for embedding data within a single document. While convenient for some use cases, they aren't always suitable for relationships that involve a one-to-many structure across collections.

For example:
- **Stand-alone models** like `Users` work well independently.
- For relational data like `Teachers` and their `Students`, MongoDB offers support through references.

---

## Example: Teacher-Student Relationship

### Defining Schemas
Below is an example of schemas to model the `Teacher` and `Student` relationship:

#### Teacher Schema
```javascript
const teacherSchema = Schema({
    teacher_name: String,
    students: [{ type: Schema.Types.ObjectId, ref: 'Student' }]
});
```

#### Student Schema
```javascript
const studentSchema = Schema({
    student_name: String,
    teacher_id: { type: Schema.Types.ObjectId, ref: 'Teacher' }
});
```

### Key Concepts
1. **Foreign Key Reference**:
   ```javascript
   students: [{ type: Schema.Types.ObjectId, ref: 'Student' }]
   ```
   - The `students` field stores an array of `ObjectId`s referencing `Student`.

2. **Reverse Reference**:
   ```javascript
   teacher_id: { type: Schema.Types.ObjectId, ref: 'Teacher' }
   ```
   - The `teacher_id` field in the `Student` schema stores the `ObjectId` of the associated `Teacher`.

---

## Querying Relationships
MongoDB's `populate()` method allows us to fetch related data conveniently.

### Example Query
To find a teacher along with their students:
```javascript
const teacher = await Teacher
    .findById(req.params.id)
    .populate('students')
    .exec();
```
- The `populate()` method fetches and inserts the related `Student` documents.

---

## Benefits of Referencing
- **Scalability**: Storing references instead of embedding data keeps documents lightweight.
- **Flexibility**: Enables complex queries and relationships across collections.
- **Maintainability**: Decouples collections, making updates easier.

---

## Additional Resources
To learn more about defining and using relationships in MongoDB, visit the [official MongoDB documentation](https://mongoosejs.com/docs/subdocs.html).
