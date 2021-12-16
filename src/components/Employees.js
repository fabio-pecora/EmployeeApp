import axios from "axios";
import Employee from "./Employee";
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import "../css/Employees.css";
function Employees(){

    const [employeeData, setEmployeeData] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    useEffect(getEmployees, []);

    function getEmployees() {
        axios.get('https://statenweb.mockable.io/employees').then(function(response){
            setEmployeeData(response.data);
        })
    }

    function getEmployeeById(id) {
        setSelectedEmployee(id);
    }

    if(employeeData.length === 0) {
        return <p>Are you in a hurry? WAIT!!</p>
    }

    if(selectedEmployee){
        return <div>
            
            <Employee selectedEmployee = {selectedEmployee}/>
            <button onClick = {() => setSelectedEmployee(null)}>Reset</button>
        </div>
    }

    return <div>
        <h4 className="center permanent">Employee List</h4>
            <p className="App Alfa">Here there is a list of expert employees, clicking on the name you can get more informations. </p>
        {employeeData.map((employee) => <p key={employee.id}><Button variant ="primary hisWidth border border-solid border-success border-2" onClick={() => getEmployeeById(employee.id)}>{employee.name} - {employee.department}</Button></p>)}
    </div>;
}


export default Employees;