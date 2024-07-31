import React, { useEffect, useState } from "react";
import Form from "./Employee/Form";
import Table from "./Employee/Table";
import AdminService from "../../service/AdminService";

function EmployeeCRUD() {
  const [activeTab, setActiveTab] = useState("form");

  const [list, setList] = useState([]);

  const getAll = async () => {
    try {
      const list = await AdminService.getAll();
      setList(list.content);
      console.log(list.content);
    } catch (error) {
      console.log("Error getall", error);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "form" ? "active" : ""}`}
            href="#form"
            onClick={() => setActiveTab("form")}
          >
            Form
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "table" ? "active" : ""}`}
            href="#table"
            onClick={() => setActiveTab("table")}
          >
            Table
          </a>
        </li>
      </ul>
      <div className="tab-content mt-3">
        {activeTab === "form" && <Form />}
        {activeTab === "table" && <Table list={list} />}
      </div>
    </div>
  );
}

export default EmployeeCRUD;
