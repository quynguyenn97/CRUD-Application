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
import { toast } from "react-toastify";
import Papa from "papaparse";

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
    const [dataExport, setDataExport] = useState("");
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
    }, 500);
    const csvData = [
        ["firstname", "lastname", "email"],
        ["Ahmed", "Tomi", "ah@smthing.co.com"],
        ["Raed", "Labes", "rl@smthing.co.com"],
        ["Yezzi", "Min l3b", "ymin@cocococo.com"],
    ];
    const getUsersExport = (event, done) => {
        let result = [];
        if (listUsers && listUsers.length > 0) {
            result.push(["Id", "Email", "First name", "Last name"]);
            listUsers.map((item, index) => {
                let arr = [];
                arr[0] = item.id;
                arr[1] = item.email;
                arr[2] = item.first_name;
                arr[3] = item.last_name;
                result.push(arr);
            });
            setDataExport(result);
            done();
        }
    };
    const handleImportCSV = (event) => {
        if (event.target && event.target.files && event.target.file[0]) {
            let file = event.target.files[0];
            if (file.type !== "text/csv") {
                toast.error("Only accept csv files...");
                return;
            }
            Papa.parse(file, {
                header: true,
                complete: function (result) {
                    let rawCSV = result.data;
                    if (rawCSV.length > 0) {
                        if (
                            rawCSV[0][0] !== "email" ||
                            rawCSV[0][1] !== "fisrt_name"
                        ) {
                            toast.error("Wrong format header CSV file!");
                        } else {
                            let result = [];
                            rawCSV.map((item, index) => {
                                if (index > 0 && item.length === 3) {
                                    let obj = {};
                                    obj.email = item[0];
                                    obj.first_name = item[1];
                                    obj.last_name = item[2];
                                    result.push(obj);
                                }
                            });
                        }
                    } else {
                        toast.error("wrong format CSV file");
                    }
                },
            });
        } else toast.error("Not found data");
    };
    return (
        <>
            <div className="add-new my-3 d-sm-flex justify-content-between align-items-center">
                <span className="">
                    <b>List Users:</b>
                </span>
                <div className="group-btns mt-sm-0 mt-2">
                    <label htmlFor="test" className="btn btn-warning">
                        <i className="fas fa-upload"></i> Import
                    </label>
                    <input id="test" type="file" hidden />
                    <CSVLink
                        data={listUsers}
                        filename={"users.csv"}
                        className="btn btn-primary"
                        asyncOnClick={true}
                        onClick={getUsersExport}>
                        <i className="fas fa-arrow-down"></i> Export
                    </CSVLink>
                    <button
                        className="btn btn-success"
                        onClick={() => handleAddNewUser()}>
                        <i className="fa-solid fa-circle-plus "></i> Add hoc
                        sinh
                    </button>
                </div>
            </div>
            <div className="col-12 col-sm-4 my-3">
                <input
                    className="form-control"
                    placeholder="Search user by email..."
                    // value={keyword}
                    onChange={(event) => handleSearch(event)}
                />
            </div>
            <div className="customize-table">
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
            </div>

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
