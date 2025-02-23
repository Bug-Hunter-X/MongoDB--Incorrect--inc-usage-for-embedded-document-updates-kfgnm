# MongoDB Incorrect $inc Usage for Embedded Documents
This repository demonstrates a common error when using the `$inc` operator in MongoDB to update embedded documents.  The issue lies in the incorrect path specification when attempting to increment a subfield within an embedded document.  The provided solution showcases the correct way to achieve the desired update.

## Bug Description
The bug arises from a misunderstanding of how `$inc` and dot notation work with embedded documents.  Simply specifying the subfield path within `$inc` does not correctly update the embedded document's subfield. This often leads to the field remaining unchanged or producing unexpected results.

## Solution
The solution demonstrates using the dot notation correctly within the `$inc` operator and provides the proper syntax for updating the subfield of an embedded document.
