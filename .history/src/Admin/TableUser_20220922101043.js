import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { fetchAllUser } from "../services/apiServices";

const TableUser = () => {
    const [listUsers, setListUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        let res = await fetchAllUser();
        if (res && res.data && res.data.data) {
            setListUsers(res.data.data);
        }
    };

    console.log("check listUsers", listUsers);
    return (
        <>
            <div className="my-3">
                <span>List Users:</span>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Avatar</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers &&
                        listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.email}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td>{item.avatar}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </Table>
        </>
    );
};
export default TableUser;
