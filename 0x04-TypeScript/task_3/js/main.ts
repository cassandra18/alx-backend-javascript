import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

// Create an object of type RowElement
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert the row and capture the newRowID
const newRowID: RowID = CRUD.insertRow(row);

// Update the row with an age field
const updatedRow: RowElement = { ...row, age: 23 };

// Perform update and delete operations
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
