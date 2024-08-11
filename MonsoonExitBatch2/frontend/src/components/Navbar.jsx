import {
    AppBar,
    Box,
    IconButton,
    Toolbar,
    Typography,
  } from "@mui/material";
  import React from "react";
  import { Link } from "react-router-dom";
  import HomeIcon from "@mui/icons-material/Home";
  import AddIcon from "@mui/icons-material/Add";
  
  const Navbar = () => {
    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="secondary">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                EmployeeApp
              </Typography>
              <IconButton color="inherit" component={Link} to="/">
                <HomeIcon />
              </IconButton>
              <IconButton color="inherit" component={Link} to="/add">
                <AddIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    );
  };
  
  export default Navbar;
  