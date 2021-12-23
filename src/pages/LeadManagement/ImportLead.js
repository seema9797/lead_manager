// import React, { Component,useState } from "react";
// // import SettingMenu from "../Shared/SettingMenu";
// import { Row, Col, Card, Container } from "reactstrap";
// import{Table,Button,Stack,Form} from 'react-bootstrap';
// import { Link,withRouter } from "react-router-dom";
// import Select from 'react-select'



// const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' }
//   ]
// const ImportLead = () => {
 
      
//     return (
//         <React.Fragment>
//         <Row>
//           <Col xl={12} space={3}>
          
//             <Card>
//               <Container>
//             <Col lg={8}>
//                   <Stack gap={2}>
//                     <Button variant="success" className="card-title mb-4 mt-4">DOWNLOAD</Button>
//                     </Stack>
//                   </Col>
                 
              
//             <Table responsive bordered>
//   <thead>
//     <tr>
//       <th>#</th>
//       {Array.from({ length: 8 }).map((_, index) => (
//         <th key={index}>Table heading</th>
//       ))}
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>1</td>
//       {Array.from({ length: 8}).map((_, index) => (
//         <td key={index}>Table cell {index}</td>
//       ))}
//     </tr>
//     <tr>
//       <td>2</td>
//       {Array.from({ length: 8 }).map((_, index) => (
//         <td key={index}>Table cell {index}</td>
//       ))}
//     </tr>
//     <tr>
//       <td>3</td>
//       {Array.from({ length: 8 }).map((_, index) => (
//         <td key={index}>Table cell {index}</td>
//       ))}
//     </tr>
//   </tbody>
// </Table>
// <Col lg={8} space={3}>
// <Form.Group controlId="formFile" className="mb-3">
//     <Form.Label><span style={{color:"red"}}>*</span> Choose CSV File</Form.Label>
//     <Form.Control type="file" />
//   </Form.Group>
// </Col>
// <Col lg={8}>
// <Form>
//     <Form.Group as={Col} controlId="formGridPassword" className="mb-3">
//     <Form.Label><span style={{color:"red"}}>*</span>Status</Form.Label>
//      <Select options={options} />
//     </Form.Group>
//     <Form.Group as={Col} controlId="formGridPassword" className="mb-3">
//     <Form.Label><span style={{color:"red"}}>*</span>Sourece</Form.Label>
//      <Select  options={options} />
//     </Form.Group>
//     <Form.Group as={Col}className="mb-3" controlId="formGridPassword">
//     <Form.Label><span style={{color:"red"}}>*</span> Responsible(Assignee)</Form.Label>
//      <Select  options={options} />
//     </Form.Group>

// <Button variant="primary" type="submit" className="mr-3">
//     IMPORT
//   </Button>
//   <Button variant="primary" type="submit">
//     SIMULATE IMPORT
//   </Button>
//   </Form>
//   </Col>
// </Container>
//             </Card>
//                 </Col>
//                 </Row>
              
              
//       </React.Fragment>
//     )
// }

// export default ImportLead
import React, { Component } from "react";
import{Table,Button,Stack,Form} from 'react-bootstrap';
import { Row, Col, Card, Container } from "reactstrap";
import { ExcelRenderer } from "react-excel-renderer";
//import {ExcelRenderer, OutTable} from 'react-excel-renderer';
import Select from 'react-select'
//import { EditableFormRow, EditableCell } from "./ediable";
import Icon from "@ant-design/icons"
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
        // {
        //   title: "Action",
        //   dataIndex: "action",
        //   render: (text, record) =>
        //     this.state.rows.length >= 1 ? (
        //       <Popconfirm
        //         title="Sure to delete?"
        //         onConfirm={() => this.handleDelete(record.key)}
        //       >
        //         <Icon
        //           type="delete"
        //           theme="filled"
        //           style={{ color: "red", fontSize: "20px" }}
        //         />
        //       </Popconfirm>
        //     ) : null
        // }
      ]
    };
  }

  handleSave = row => {
    const newData = [...this.state.rows];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row
    });
    this.setState({ rows: newData });
  };

  checkFile(file) {
    let errorMessage = "";
    if (!file || !file[0]) {
      return;
    }
    const isExcel =
      file[0].type === "application/vnd.ms-excel" ||
      file[0].type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    if (!isExcel) {
      errorMessage = "You can only upload Excel file!";
    }
    console.log("file", file[0].type);
    const isLt2M = file[0].size / 1024 / 1024 < 2;
    if (!isLt2M) {
      errorMessage = "File must be smaller than 2MB!";
    }
    console.log("errorMessage", errorMessage);
    return errorMessage;
  }

  fileHandler = fileList => {
    console.log("fileList", fileList);
    let fileObj = fileList;
    if (!fileObj) {
      this.setState({
        errorMessage: "No file uploaded!"
      });
      return false;
    }
    console.log("fileObj.type:", fileObj.type);
    if (
      !(
        fileObj.type === "application/vnd.ms-excel" ||
        fileObj.type ===
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      )
    ) {
      this.setState({
        errorMessage: "Unknown file format. Only Excel files are uploaded!"
      });
      return false;
    }
    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        let newRows = [];
        resp.rows.slice(1).map((row, index) => {
          if (row && row !== "undefined") {
            newRows.push({
              key: index,
              name: row[0],
              age: row[1],
              gender: row[2]
            });
          }
        });
        if (newRows.length === 0) {
          this.setState({
            errorMessage: "No data found in file!"
          });
          return false;
        } else {
          this.setState({
            cols: resp.cols,
            rows: newRows,
            errorMessage: null
          });
        }
      }
    });
    return false;
  };

  handleSubmit = async () => {
    console.log("submitting: ", this.state.rows);
    //submit to API
    //if successful, banigate and clear the data
    //this.setState({ rows: [] })
  };

  handleDelete = key => {
    const rows = [...this.state.rows];
    this.setState({ rows: rows.filter(item => item.key !== key) });
  };
  handleAdd = () => {
    const { count, rows } = this.state;
    const newData = {
      key: count,
      name: "User's name",
      age: "22",
      gender: "Female"
    };
    this.setState({
      rows: [newData, ...rows],
      count: count + 1
    });
  };

  render() {
    // const components = {
    //   body: {
    //     row: EditableFormRow,
    //     cell: EditableCell
    //   }
    // };
    const columns = this.state.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave
        })
      };
    });
    return (
      <>
        <h1>Importing Excel Component</h1>
        <Row gutter={16}>
          <Col
            span={8}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "5%"
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="page-title">Upload User Data</div>
            </div>
          </Col>
          <Col span={8}>
            <a
              href="https://res.cloudinary.com/bryta/raw/upload/v1562751445/Sample_Excel_Sheet_muxx6s.xlsx"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Sample excel sheet
            </a>
          </Col>
          <Col
            span={8}
            align="right"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            {this.state.rows.length > 0 && (
              <>
                <Button
                  onClick={this.handleAdd}
                  size="large"
                  type="info"
                  style={{ marginBottom: 16 }}
                >
                  <Icon type="plus" />
                  Add a row
                </Button>{" "}
                <Button
                  onClick={this.handleSubmit}
                  size="large"
                  type="primary"
                  style={{ marginBottom: 16, marginLeft: 10 }}
                >
                  Submit Data
                </Button>
              </>
            )}
          </Col>
        </Row>
        <div>
        <Form.Group controlId="formFile" className="mb-3">
    <Form.Label> Choose CSV File</Form.Label>
    <Form.Control type="file" beforeUpload={this.fileHandler}
            onRemove={() => this.setState({ rows: [] })}
            multiple={false}
                                  
                                />
  </Form.Group>
        {/* <Form.Group as={Col} controlId="formGridPassword" className="mb-3">
//     <Form.Label><span style={{color:"red"}}>*</span>Status</Form.Label>
//      <Select  name="file"
            beforeUpload={this.fileHandler}
            onRemove={() => this.setState({ rows: [] })}
            multiple={false} />
//     </Form.Group> */}
          {/* <Upload
            name="file"
            beforeUpload={this.fileHandler}
            onRemove={() => this.setState({ rows: [] })}
            multiple={false}
          >
            <Button>
              <Icon type="upload" /> Click to Upload Excel File
            </Button>
          </Upload> */}
        </div>
        <div style={{ marginTop: 20 }}>
          <Table
            components
            rowClassName={() => "editable-row"}
            dataSource={this.state.rows}
            columns={columns}
          />
        </div>
      </>
    );
  }
}