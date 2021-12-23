// import React from "react"
// import { Form, Input } from "antd"

// const EditableContext = React.createContext()

// const EditableRow = ({ form, index, ...props }) => (
//   <EditableContext.Provider value={form}>
//     <tr {...props} />
//   </EditableContext.Provider>
// )

// export const EditableFormRow = Form.create()(EditableRow)

// export class EditableCell extends React.Component {
//   state = {
//     editing: false,
//   }

//   toggleEdit = () => {
//     const editing = !this.state.editing
//     this.setState({ editing }, () => {
//       if (editing) {
//         this.input.focus()
//       }
//     })
//   }

//   save = e => {
//     const { record, handleSave } = this.props
//     this.form.validateFields((error, values) => {
//       if (error && error[e.currentTarget.id]) {
//         return
//       }
//       this.toggleEdit()
//       handleSave({ ...record, ...values })
//     })
//   }

//   renderCell = form => {
//     this.form = form
//     const { children, dataIndex, record, title } = this.props
//     const { editing } = this.state
//     return editing ? (
//       <Form.Item style={{ margin: 0 }}>
//         {form.getFieldDecorator(dataIndex, {
//           rules: [
//             {
//               required: true,
//               message: `${title} is required.`,
//             },
//           ],
//           initialValue: record[dataIndex],
//         })(
//           <Input
//             ref={node => (this.input = node)}
//             onPressEnter={this.save}
//             onBlur={this.save}
//           />
//         )}
//       </Form.Item>
//     ) : (
//       <div
//         className="editable-cell-value-wrap"
//         style={{ paddingRight: 24, minHeight: 32 }}
//         onClick={this.toggleEdit}
//       >
//         {children}
//       </div>
//     )
//   }
//   handleDelete = key => {
//     const rows = [...this.state.rows]
//     this.setState({ rows: rows.filter(item => item.key !== key) })
//   }
//   handleAdd = () => {
//     const { count, rows } = this.state
//     const newData = {
//       key: count,
//       name: "User's name",
//       age: "22",
//       gender: "Female",
//     }
//     this.setState({
//       rows: [newData, ...rows],
//       count: count + 1,
//     })
//   }

//   const components = {
//     body: {
//       row: EditableFormRow,
//       cell: EditableCell,
//   }
//   const columns = this.state.columns.map(col => 
//     if (!col.editable) {
//       return col
//     }
//     return {
//       ...col,
//       onCell: record => ({
//         record,
//         editable: col.editable,
//         dataIndex: col.dataIndex,
//         title: col.title,
//         handleSave: this.handleSave,
//       }),
//     }
//   )
  
//     <Row gutter={16} justify="space-between">
//     <Col
//       span={8}
//       style={{
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         marginBottom: "5%",
//       }}
//     >
//       <div style={{ display: "flex", alignItems: "center" }}>
//         <div className="page-title">Upload Farmer Data</div>
//       </div>
//     </Col>
//     <Col span={8}>
//       <a
//         href="https://res.cloudinary.com/bryta/raw/upload/v1562751445/Sample_Excel_Sheet_muxx6s.xlsx"
//         target="_blank"
//         rel="noopener noreferrer"
//         download
//       >
//         Sample excel sheet
//       </a>
//     </Col>
//     <Col
//       span={8}
//       align="right"
//       style={{ display: "flex", justifyContent: "space-between" }}
//     >
//       {this.state.rows.length > 0 && (
//         <>
//           <Button
//             onClick={this.handleAdd}
//             size="large"
//             type="info"
//             style={{ marginBottom: 16 }}
//           >
//             <Icon type="plus" />
//             Add a row
//           </Button>{" "}
//           <Button
//             onClick={this.handleSubmit}
//             size="large"
//             type="primary"
//             style={{ marginBottom: 16, marginLeft: 10 }}
//           >
//             Submit Data
//           </Button>
//         </>
//       )}
//     </Col>
//     <div>
//   <Upload
//     name="file"
//     beforeUpload={this.fileHandler}
//     onRemove={() => this.setState({ rows: [] })}
//     multiple={false}
//   >
//     <Button>
//       <Icon type="upload" /> Click to Upload Excel File
//     </Button>
//   </Upload>
// </div>
// <div style={{ marginTop: 20 }}>
//   <Table
//     components={components}
//     rowClassName={() => "editable-row"}
//     dataSource={this.state.rows}
//     columns={columns}
//   />
// </div>
//   </Row>
  
// import React from "react"
// import { Form, Input } from "antd"

// const EditableContext = React.createContext()

// const EditableRow = ({ form, index, ...props }) => (
//   <EditableContext.Provider value={form}>
//     <tr {...props} />
//   </EditableContext.Provider>
// )

// export const EditableFormRow = Form.create()(EditableRow)

// export class EditableCell extends React.Component {
//   state = {
//     editing: false,
//   }

//   toggleEdit = () => {
//     const editing = !this.state.editing
//     this.setState({ editing }, () => {
//       if (editing) {
//         this.input.focus()
//       }
//     })
//   }

//   save = e => {
//     const { record, handleSave } = this.props
//     this.form.validateFields((error, values) => {
//       if (error && error[e.currentTarget.id]) {
//         return
//       }
//       this.toggleEdit()
//       handleSave({ ...record, ...values })
//     })
//   }

//   renderCell = form => {
//     this.form = form
//     const { children, dataIndex, record, title } = this.props
//     const { editing } = this.state
//     return editing ? (
//       <Form.Item style={{ margin: 0 }}>
//         {form.getFieldDecorator(dataIndex, {
//           rules: [
//             {
//               required: true,
//               message: `${title} is required.`,
//             },
//           ],
//           initialValue: record[dataIndex],
//         })(
//           <Input
//             ref={node => (this.input = node)}
//             onPressEnter={this.save}
//             onBlur={this.save}
//           />
//         )}
//       </Form.Item>
//     ) : (
//       <div
//         className="editable-cell-value-wrap"
//         style={{ paddingRight: 24, minHeight: 32 }}
//         onClick={this.toggleEdit}
//       >
//         {children}
//       </div>
//     )
//   }
//   handleDelete = key => {
//     const rows = [...this.state.rows]
//     this.setState({ rows: rows.filter(item => item.key !== key) })
//   }
//   handleAdd = () => {
//     const { count, rows } = this.state
//     const newData = {
//       key: count,
//       name: "User's name",
//       age: "22",
//       gender: "Female",
//     }
//     this.setState({
//       rows: [newData, ...rows],
//       count: count + 1,
//     })
//   }

//   const components = {
//     body: {
//       row: EditableFormRow,
//       cell: EditableCell,
//   }
//   const columns = this.state.columns.map(col => 
//     if (!col.editable) {
//       return col
//     }
//     return {
//       ...col,
//       onCell: record => ({
//         record,
//         editable: col.editable,
//         dataIndex: col.dataIndex,
//         title: col.title,
//         handleSave: this.handleSave,
//       }),
//     }
//   )
  
//   render() {
//     return (
//           <Row gutter={16} justify="space-between">
//     <Col
//       span={8}
//       style={{
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         marginBottom: "5%",
//       }}
//     >
//       <div style={{ display: "flex", alignItems: "center" }}>
//         <div className="page-title">Upload Farmer Data</div>
//       </div>
//     </Col>
//     <Col span={8}>
//       <a
//         href="https://res.cloudinary.com/bryta/raw/upload/v1562751445/Sample_Excel_Sheet_muxx6s.xlsx"
//         target="_blank"
//         rel="noopener noreferrer"
//         download
//       >
//         Sample excel sheet
//       </a>
//     </Col>
//     <Col
//       span={8}
//       align="right"
//       style={{ display: "flex", justifyContent: "space-between" }}
//     >
//       {this.state.rows.length > 0 && (
//         <>
//           <Button
//             onClick={this.handleAdd}
//             size="large"
//             type="info"
//             style={{ marginBottom: 16 }}
//           >
//             <Icon type="plus" />
//             Add a row
//           </Button>{" "}
//           <Button
//             onClick={this.handleSubmit}
//             size="large"
//             type="primary"
//             style={{ marginBottom: 16, marginLeft: 10 }}
//           >
//             Submit Data
//           </Button>
//         </>
//       )}
//     </Col>
//     <div>
//   <Upload
//     name="file"
//     beforeUpload={this.fileHandler}
//     onRemove={() => this.setState({ rows: [] })}
//     multiple={false}
//   >
//     <Button>
//       <Icon type="upload" /> Click to Upload Excel File
//     </Button>
//   </Upload>
// </div>
// <div style={{ marginTop: 20 }}>
//   <Table
//     components={components}
//     rowClassName={() => "editable-row"}
//     dataSource={this.state.rows}
//     columns={columns}
//   />
// </div>
//   </Row>
//     );
//   }
// }