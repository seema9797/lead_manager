import React, { Component } from "react"
import { Table, Button, Popconfirm, Row, Col, Icon, Upload } from "antd"
import { ExcelRenderer } from "react-excel-renderer"
import { EditableFormRow, EditableCell } from "./ediable"

export default class ExcelPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          cols: [],
          rows: [],
          errorMessage: null,
          columns: [
            {
              title: "NAME",
              dataIndex: "name",
              editable: true
            },
            {
              title: "AGE",
              dataIndex: "age",
              editable: true
            },
            {
              title: "GENDER",
              dataIndex: "gender",
              editable: true
            },
            {
              title: "Action",
              dataIndex: "action",
              render: (text, record) =>
                this.state.rows.length >= 1 ? (
                  <Popconfirm
                    title="Sure to delete?"
                    onConfirm={() => this.handleDelete(record.key)}
                  >
                    <Icon
                      type="delete"
                      theme="filled"
                      style={{ color: "red", fontSize: "20px" }}
                    />
                  </Popconfirm>
                ) : null
            }
          ]
        };
      }

      handleSave = row => {
        const newData = [...this.state.rows]
        const index = newData.findIndex(item => row.key === item.key)
        const item = newData[index]
        newData.splice(index, 1, {
          ...item,
          ...row,
        })
        this.setState({ rows: newData })
      }
  render() {
    return (
      <>
        <h1>Importing Excel Component</h1>
      </>
    )
  }
}