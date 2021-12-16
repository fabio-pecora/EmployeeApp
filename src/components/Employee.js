import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
import "../css/Employee.css";
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
function Employee({selectedEmployee}){

    const [selectedEmployeeData, setSelectedEmployeeData] = useState(null);

    useEffect(() => {
        axios.get(`http://statenweb.mockable.io/employee/${selectedEmployee}`).then((r) => setSelectedEmployeeData(r.data));
    }, [selectedEmployee]);


    if(!selectedEmployeeData){
        return <p>It is loading!</p>;
    }

    const {
        name,
        startDate,
        role,
        department,
        photo,
    } = selectedEmployeeData;

    return <div>
    <h3 className="Rubik">Employee</h3>
        <Card style={{ width: '18rem' }} className = "customCard center border border-solid border-dark border-4">
            <Card.Img variant="top" src={photo} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text className="rubik">
                Here you can find all the informations about {name}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem className="color1"> Start Date: {startDate}</ListGroupItem>
                <ListGroupItem className="color2">Role: {role}</ListGroupItem>
                <ListGroupItem className="color3">Department: {department}</ListGroupItem>
            </ListGroup>
        </Card>

    </div>;
}

export default Employee;