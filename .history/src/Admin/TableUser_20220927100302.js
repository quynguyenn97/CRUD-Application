import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { fetchAllUser } from "../services/apiServices";
import ReactPaginate from "react-paginate";
import ModalAddNew from "./ModalAddNew";
import ModalEditUser from "./ModalEditUser";
import _ from "lodash";
import ModalConfirm from "./ModalConfirm";
import "./TableUser.scss";
import { debounce } from "lodash";
import { CSVLink, CSVDownload } from "react-csv";

const TableUser = () => {
    const [listUsers, setListUsers] = useState([]);
    const [totalUsers, setTotalUsers] = useState(0);
    const [totallPages, setTotalPages] = useState(0);
    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);
    const [isShowModalEditUser, setIsShowModalEditUser] = useState(false);
    const [isShowModalDeleteUser, setIsShowModalDeleteUser] = useState(false);
    const [dataUserEdit, setDataUserEdit] = useState({});
    const [dataUserDelete, setDataUserDelete] = useState({});
    const [sortBy, setSortBy] = useState("");
    const [sortField, setSortField] = useState("");
    const handleClose = () => {
        setIsShowModalAddNew(false);
        setIsShowModalEditUser(false);
        setIsShowModalDeleteUser(false);
    };
    const handleAddNewUser = () => {
        setIsShowModalAddNew(true);
    };
    useEffect(() => {
        getUsers(1);
    }, []);

    const getUsers = async (page) => {
        let res = await fetchAllUser(page);
        if (res && res.data) {
            setListUsers(res.data);
            setTotalUsers(res.total);
            setTotalPages(res.total_pages);
        }
    };

    const handlePageClick = (event) => {
        console.log(event);
        getUsers(+event.selected + 1);
    };

    const handleUpdateUser = (user) => {
        setListUsers([user, ...listUsers]);
    };

    // EDIT USER
    const handleEditUser = (user) => {
        setIsShowModalEditUser(true);
        setDataUserEdit(user);
    };
    const handleEditUserFromModal = (user) => {
        let cloneListUsers = _.cloneDeep(listUsers);
        let index = listUsers.findIndex((item) => item.id === user.id);
        cloneListUsers[index].first_name = user.first_name;
        setListUsers(cloneListUsers);
    };
    // DELETE USER
    const handleDeleteUser = (user) => {
        setIsShowModalDeleteUser(true);
        setDataUserDelete(user);
    };
    const handleDeleteUserFromModal = (user) => {
        let cloneListUsers = _.cloneDeep(listUsers);
        cloneListUsers = cloneListUsers.filter((item) => item.id !== user.id);
        setListUsers(cloneListUsers);
    };
    const handleSort = (sortBy, sortField) => {
        setSortBy(sortBy);
        setSortField(sortField);
        console.log(sortBy, sortField);
        let cloneListUsers = _.cloneDeep(listUsers);
        cloneListUsers = _.orderBy(cloneListUsers, [sortField], [sortBy]);
        setListUsers(cloneListUsers);
    };
    const handleSearch = debounce((event) => {
        let term = event.target.value;
        console.log(term);
        if (term) {
            let cloneListUsers = _.cloneDeep(listUsers);
            cloneListUsers = cloneListUsers.filter((item) =>
                item.email.includes(term)
            );
            setListUsers(cloneListUsers);
        } else {
            getUsers(1);
        }
    }, 2000);
    const csvData = [
        ["firstname", "lastname", "email"],
        ["Ahmed", "Tomi", "ah@smthing.co.com"],
        ["Raed", "Labes", "rl@smthing.co.com"],
        ["Yezzi", "Min l3b", "ymin@cocococo.com"],
    ];
    return (
        <>
            <div className="my-3 d-flex justify-content-between">
                <span>List Users:</span>
                <div>
                    <button className="btn btn-warning">Import</button>
                    <CSVLink
                        data={csvData}
                        filename={"users.csv"}
                        className="btn btn-primary">
                        <i class="fas fa-arrow-down"></i> Export
                    </CSVLink>

                    <button
                        className="btn btn-success"
                        onClick={() => handleAddNewUser()}>
                        <i className="fa-solid fa-circle-plus "></i> Add hoc
                        sinh
                    </button>
                </div>
            </div>
            <div className="col-4 my-3">
                <input
                    className="form-control"
                    placeholder="Search user by email..."
                    // value={keyword}
                    onChange={(event) => handleSearch(event)}
                />
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>
                            <div className="sort-header">
                                <span>ID</span>
                                <span>
                                    <i
                                        className="fa-solid fa-arrow-up-long"
                                        onClick={() =>
                                            handleSort("desc", "id")
                                        }></i>
                                    <i
                                        className="fa-solid fa-arrow-down-long"
                                        onClick={() =>
                                            handleSort("asc", "id")
                                        }></i>
                                </span>
                            </div>
                        </th>
                        <th>email</th>
                        <th>
                            <div className="sort-header">
                                <span>First Name</span>
                                <span>
                                    <i
                                        className="fa-solid fa-arrow-up-long"
                                        onClick={() =>
                                            handleSort("desc", "first_name")
                                        }></i>
                                    <i
                                        className="fa-solid fa-arrow-down-long"
                                        onClick={() =>
                                            handleSort("asc", "first_name")
                                        }></i>
                                </span>
                            </div>
                        </th>
                        <th>Last Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers &&
                        listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <tr key={`users-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.email}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td>
                                        <button
                                            className="btn btn-warning mx-3"
                                            onClick={() =>
                                                handleEditUser(item)
                                            }>
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() =>
                                                handleDeleteUser(item)
                                            }>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </Table>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={totallPages}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
            />
            <ModalAddNew
                show={isShowModalAddNew}
                handleClose={handleClose}
                handleUpdateUser={handleUpdateUser}
            />
            <ModalEditUser
                show={isShowModalEditUser}
                handleClose={handleClose}
                dataUserEdit={dataUserEdit}
                handleEditUserFromModal={handleEditUserFromModal}
            />
            <ModalConfirm
                show={isShowModalDeleteUser}
                handleClose={handleClose}
                dataUserDelete={dataUserDelete}
                handleDeleteUserFromModal={handleDeleteUserFromModal}
            />
        </>
    );
};
export default TableUser;
