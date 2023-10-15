import React from "react";
import axios from "axios";
import { render } from "react-dom";

const url = "https://dummyjson.com/users"
function DummyData(){
    const [userData, setUserData] = React.useState([]);
    React.useEffect(() => {
        axios.get(url).then((response) => {
            setUserData(response.data.users)
        });

    }, []);
    const table = userData.map((item, index) => 
        <tr key={index}>
            <td>{item.id}</td>
            <td><img src={item.image}/></td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.gender}</td>
            <td>{item.email}</td>
            <td>{item.username}</td>
            <td>{item.domain}</td>
            <td>{item.ip}</td>
            <td>{item.university}</td>
        </tr>
    );

    return(
        <>
        <center><h1>User Data</h1></center>
        <table className="user-table">
            <tbody>
            <tr>
                <th>Sno</th>
                <th>Profile Pic</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Username</th>
                <th>Domain</th>
                <th>IP</th>
                <th>University</th>
            </tr>
            {table}
            </tbody>
        </table>
        </>
    );
}

export default DummyData;