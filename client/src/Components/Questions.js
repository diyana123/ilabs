import * as React from "react";
import { useState, useEffect } from "react";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridApi,
  GridCellValue,
} from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { FormControlLabel, IconButton } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./Questions.css";
//import Data from '../db.json';

const MatEdit = ({ index }) => {
  const handleEditClick = () => {
    // some action
  };

  // const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  //   <Tooltip {...props} classes={{ popper: className }} />
  // ))(({ theme }) => ({
  //   [`& .${tooltipClasses.tooltip}`]: {
  //     backgroundColor: theme.palette.common.white,
  //     color: 'rgba(0, 0, 0, 0.87)',
  //     boxShadow: theme.shadows[1],
  //     fontSize: 11,
  //     width: 100,
  //     height: 150,
  //     border: '1px solid #dadde9',
  //   },
  // }));

  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 11,
      width: 110,
      height: 170,
      // padiing: spacing (0,2,2),
      paddingBottom: "10px",
    },
  }));

  return (
    <div>
      <FormControlLabel
        control={
          <div>
            <LightTooltip
              title={
                <>
                  <div className="icon" onClick={handleClick}>
                    <RemoveRedEyeIcon
                      style={{
                        paddingRight: "15px",
                        fontSize: 40,
                      }}
                    />
                    <p>View</p>
                  </div>
                  <br />
                  <br />
                  <div className="icon">
                    <CheckCircleIcon
                      style={{
                        paddingRight: "15px",
                        fontSize: 40,
                      }}
                    />
                    <p>Deactivate</p>
                  </div>
                  <br />
                  <br />
                  <div className="icon">
                    <DeleteIcon
                      style={{
                        paddingRight: "15px",
                        fontSize: 40,
                      }}
                    />
                    <p>Delete</p>
                  </div>
                </>
              }
              placement="left"
              arrow
            >
              <IconButton
                color="secondary"
                aria-label="add an alarm"
                onClick={handleEditClick}
              >
                <MoreHorizIcon style={{ color: grey[900] }} />
              </IconButton>
            </LightTooltip>
            {/* <LightTooltip
              title={
                <>
                  <DeleteIcon />
                  View
                </>
              }
              placement="left"
              arrow
            >
              <IconButton
                color="secondary"
                aria-label="add an alarm"
                onClick={handleEditClick}
              >
                <MoreHorizIcon style={{ color: grey[900] }} />
              </IconButton>
            </LightTooltip> */}
          </div>
        }
      />
    </div>
  );
};

// let id = Data.faq[Data.faq.length - 1].id;
// console.log(id); // 3
// Data.faq.push({"id": id + 1,"question":"New Question","category":"About Company","status":"Pending"});
// id = Data.faq[Data.faq.length - 1].id;
// console.log(id); // 4
// Data.faq.push({"id": id + 1,"question":"New Question 2","category":"About Company","status":"Pending"});
// console.log(Data.faq);

const rows = [
  {
    id: 1,
    col1: "1",
    col2: "What is the vision of ilabs ?",
    col3: "About Company",
  },
  {
    id: 2,
    col1: "2",
    col2: "What is the mission of ilabs?",
    col3: "About Company",
  },
  {
    id: 3,
    col1: "3",
    col2: "When ilabs got estabilished ?",
    col3: "About Comapany",
  },
];

// const columns = [
//   { field: 'col1', headerName: '#', width: 150 },
//   { field: 'col2', headerName: 'Question', width: 310 },
//   { field: 'col3', headerName: 'Category', width: 250 },
//   {
//     field: 'col4',
//     headerName: 'Status',
//     width: 310,
//     sortable: false,
//     renderCell: (params) => {
//       const onClick = (e) => {
//         e.stopPropagation(); // don't select this row after clicking

//         const api = params.api;
//         const thisRow = {};

//         api
//           .getAllColumns()
//           .filter((c) => c.field !== '__check__' && !!c)
//           .forEach(
//             (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
//           );

//         return alert(JSON.stringify(thisRow, null, 4));
//       };

//       return <Button onClick={onClick} variant="contained" color="success">Published</Button>;
//     },
//   },
//   {
//     field: "actions",
//     headerName: "Actions",
//     sortable: false,
//     width: 140,
//     disableClickEventBubbling: true,
//     renderCell: (params) => {
//       return (
//         <div
//           className="d-flex justify-content-between align-items-center"
//           style={{ cursor: "pointer" }}
//         >
//           <MatEdit index={params.row.id} />
//         </div>
//       );
//     }
//   },
// ];
const columns = [
  { field: "id", headerName: "#", width: 150 },
  { field: "question", headerName: "Question", width: 310 },
  { field: "category", headerName: "Category", width: 250 },
  {
    field: "status",
    headerName: "Status",
    width: 310,
    sortable: false,
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation(); // don't select this row after clicking

        const api = params.api;
        const thisRow = {};

        api
          .getAllColumns()
          .filter((c) => c.field !== "__check__" && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
          );

        return alert(JSON.stringify(thisRow, null, 4));
      };

      return (
        <Button onClick={onClick} variant="contained" color="success">
          Published
        </Button>
      );
    },
  },
  {
    field: "actions",
    headerName: "Actions",
    sortable: false,
    width: 140,
    disableClickEventBubbling: true,
    renderCell: (params) => {
      return (
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ cursor: "pointer" }}
        >
          <MatEdit index={params.row.id} />
        </div>
      );
    },
  },
];

function onDelete() {
  console.log("on delete!");
}

export default function App() {
  // console.log(Data);
  return (
    <div style={{ height: 300, width: "100%" }}>
      {/* <DataGrid rows={rows} columns={columns} /> */}
      {/*<DataGrid rows={Data.faq} columns={columns}/>*/}
    </div>
  );
}
