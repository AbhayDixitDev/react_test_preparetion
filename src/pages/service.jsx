import axios from "axios";
import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap";

const Service = () => {
    const [employees, setEmployees] = useState([]);
    const [userdata, setUserdata] = useState({
        employee_name: "",
        age: "",
        email: "",
        number: "",
        salary: ""
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserdata({ ...userdata, [name]: value });
        console.log(userdata);
    }
    useEffect(() => {
        axios.get("http://localhost:4000/employee").then((res) => {
            setEmployees(res.data);
        })
    },[userdata])
    const submitData=(e)=>{
        axios.post("http://localhost:4000/employee",userdata).then((res)=>{
            console.log(res.data);
        })
    }
    return (
        

        <Container>
            <Row>
                <Col> 
                 <table>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Salary</th>
                    </tr>

            {
                employees.map((employee) => {
                    if(employee.salary<20000){
                    return (
                      
                         <tr>
                         <td>{employee.employee_name}</td>
                            <td>{employee.age}</td>
                            <td>{employee.email}</td>
                            <td>{employee.number}</td>
                            <td>{employee.salary}</td>
                       </tr>
                    )}
                           
                        
                    
                })
            }
            </table>
                </Col>
                <Col>
                   <form>
                       <input type="text" name="employee_name" placeholder="Name" value={userdata.employee_name} onChange={handleInput}></input>
                       <input type="text" name="age" placeholder="Age" value={userdata.age} onChange={handleInput}></input> 
                       <input type="text" name="email" placeholder="Email" value={userdata.email} onChange={handleInput}></input>
                       <input type="text" name="number" placeholder="Phone" value={userdata.number} onChange={handleInput}></input>
                       <input type="text" name="salary" placeholder="Salary" value={userdata.salary} onChange={handleInput}></input>
                       <button type="submit" onClick={submitData}>Submit</button>
                   </form>
                </Col>
            </Row>
        </Container>
    )
}

export default Service