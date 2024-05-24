import React from "react";
import SideNavbar from "../../components/SideNavbar/SideNavbar";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DataTable from "../../components/DataTable/DataTable";
import Pagination from "@mui/material/Pagination";
import Button from "@mui/material/Button";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const Settings = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{ display: "flex" }}>
      <SideNavbar />
      <div
        style={{
          width: "100%",
          minHeight: "90vh",
          background: "#fff",
          margin: "5rem 1rem 0 1rem",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <h2 style={{ marginLeft: "1rem" }}>Admin Settings</h2>

            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                style={{ textTransform: "inherit" }}
                label="Trust Score Configurations"
                {...a11yProps(0)}
              />
              <Tab
                style={{ textTransform: "inherit" }}
                label="Match Merge Rules"
                {...a11yProps(1)}
              />
              <Tab
                style={{ textTransform: "inherit" }}
                label="House Hold Rules"
                {...a11yProps(2)}
              />
              <Tab
                style={{ textTransform: "inherit" }}
                label="Pre Validation Rules"
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              padding: "1rem 1rem 0rem 1rem",
            }}
          >
            <Button style={{ textTransform: "inherit" }} variant="outlined">
              Save Changes
            </Button>
            <Button
              style={{ textTransform: "inherit", marginLeft: "5px" }}
              variant="contained"
            >
              Add new row
            </Button>
          </div>
          <CustomTabPanel value={value} index={0}>
            <DataTable style={{ margin: "0px" }} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Match Merge Rules
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            House Hold Rules
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            Pre Validation Rules
          </CustomTabPanel>
        </Box>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <p>Showing 1 to 10 of 200 entries</p>
          <Pagination
            style={{
              margin: "0.5rem 2rem",
              fontWeight: "bold",
            }}
            count={200}
            variant="outlined"
            shape="rounded"
          />
        </div>
      </div>
    </div>
  );
};
