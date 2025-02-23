```javascript
// Incorrect use of $inc operator for updating embedded documents
db.collection.updateMany({
  "fieldName": "value"
}, {
  $inc: {
    "embeddedField.subField": 1 // This will not update the subfield
  }
});
```