import React from "react";
import { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { indigo } from "@material-ui/core/colors";
import Link from "@mui/material/Link";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
//import Data from '../db.json';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

const categories = [
  {
    value: "About Company",
    label: "About Company",
  },
  {
    value: "Terms of service",
    label: "Terms of service",
  },
  {
    value: "Privacy Policy",
    label: "Privacy Policy",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search1: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "90%",

    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "97%",
    },
  },
  AddCircleIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar(props) {
  console.log(props);
  const { addQues } = props.addQues;
  // console.log(props.addQues());

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");

  const onSubmit = () => {
    props.addQues({ question: question, category: category });

    setQuestion("");
    setCategory("");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}

          {
            <Typography className={classes.title} variant="h6" noWrap>
              <Link href="/Home" underline="none" color="black">
                {"FAQ Manager - iLabs"}
              </Link>
            </Typography>
          }
          <div>
            <div className={classes.search1}>
              <div className={classes.AddCircleIcon}>
                <AddCircleIcon />
              </div>
              <Button onClick={handleOpen} variant="contained">
                <AddCircleIcon />
                Add new questions
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Add a question
                  </Typography>
                  <br />
                  <div>
                    <TextField
                      error
                      id="question"
                      label="Add a Question"
                      helperText="Add a Question"
                      type="text"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                    />
                    <br />
                    <br />
                    <br />
                    <TextField
                      error
                      id="category"
                      select
                      label="Select"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      helperText="Please select your category"
                    >
                      {categories.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <br />

                    {/* <Button onClick={handleOpen} variant = "contained">Add</Button> */}
                    <Button onClick={onSubmit} variant="contained">
                      Add
                    </Button>
                  </div>
                </Box>
              </Modal>
              {/*<InputBase
                //placeholder="Add new questions"
              classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,

                }}

                inputProps={{ 'aria-label': 'search' }}
            />*/}
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
