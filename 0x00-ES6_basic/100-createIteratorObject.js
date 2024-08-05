export default function createIteratorObject(report) {
    const employees = report.allEmployees;
    const allEmployees = [];
  
    for (const department in employees) {
      if (employees.hasOwnProperty(department)) {
        allEmployees.push(...employees[department]);
      }
    }
  
    return allEmployees[Symbol.iterator]();
  }  