import React, { useState } from "react";
import { AppBar, Tabs, Tab, Toolbar, Typography } from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [activeTab, setActiveTab] = useState();

  return (
    <div>
      <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
        <Toolbar>
          <LibraryBooksIcon />
          <Typography>Book Store</Typography>
          <Tabs
            sx={{ ml: "auto" }}
            value={activeTab}
            indicatorColor="primary"
            textColor="inherit"
            onChange={(e, val) => {
              setActiveTab(val);
            }}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Add book" />
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
            <Tab LinkComponent={NavLink} to="/about" label="About us" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
