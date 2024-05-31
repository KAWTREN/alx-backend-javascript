export default function createIteratorObject(report) {
    const allEmployees = report.allEmployees;
  
    function* employeeIterator() {
      for (const department in allEmployees) {
        for (const employee of allEmployees[department]) {
          yield employee;
        }
      }
    }
  
    return employeeIterator();
  }
  