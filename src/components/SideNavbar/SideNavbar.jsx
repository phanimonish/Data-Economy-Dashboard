import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import logo from "../../images/logo.png";
import "./SideNavbar.css";
import { Tooltip } from "@mui/material";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import FenceOutlinedIcon from "@mui/icons-material/FenceOutlined";
import PermPhoneMsgOutlinedIcon from "@mui/icons-material/PermPhoneMsgOutlined";
import MarkUnreadChatAltOutlinedIcon from "@mui/icons-material/MarkUnreadChatAltOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import Avatar from "@mui/material/Avatar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Badge from "@mui/material/Badge";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  border: "none",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideNavbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const start = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", background: "#fcf7f7" }}>
      <CssBaseline />
      <AppBar
        style={{
          background: "#fff",
          boxShadow: "none",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        }}
        position="fixed"
        open={open}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              color: "#000",
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                background: "rgb(241, 239, 239)",
                width: "25%",
                height: "40px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                padding: "5px",
              }}
            >
              <SearchOutlinedIcon style={{ color: "gray", margin: "5px" }} />
              <input
                style={{
                  height: "40px",
                  border: "none",
                  background: "transparent",
                  width: "300px",
                }}
                placeholder="Search..."
              />
            </div>
            <div style={{ flexGrow: "1" }}></div>
            <Badge color="primary" badgeContent={""}>
              <NotificationsOutlinedIcon style={{ color: "gray", display: "flex", alignItems: "center" }} />
            </Badge>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                background: "transparent",
                border: "none",
                marginLeft: "5px",
              }}
              onClick={handleClick}
              id="basic-button"
              aria-controls={start ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={start ? "true" : undefined}
            >
              <div>
                <Avatar
                  alt="A"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGLuy1mSIGQSrB296pcbqLZQjqT3bD3srOPRJnPGqeGBnk7HXKsc6Lby4YxuWRjN_SPTM&usqp=CAU"
                  sx={{ width: 36, height: 36 }}
                />
              </div>
              <div style={{ marginLeft: "10px" }}>
                <h4
                  style={{
                    color: "#000",
                    margin: "0px 0px 0px -5px",
                    fontSize: "0.9rem",
                  }}
                >
                  Austin Robertson
                </h4>
                <p
                  style={{ color: "gray", margin: "0px", fontSize: "0.75rem" }}
                >
                  Marketing Administrator
                </p>
              </div>
              <ArrowDropDownIcon style={{ color: "gray" }} />
            </button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={start}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              PaperProps={{
                style: {
                  left: "50%",
                  transform: "translateX(70%) translateY(1%)",
                },
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer style={{ border: "none" }} variant="permanent" open={open}>
        <DrawerHeader>
          <img
            style={{ marginRight: "50px", height: "60px" }}
            src={logo}
            alt="data economy"
          />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <div>
          <button className="item-button">
            <Tooltip title="Overview" placement="right-start">
              <WindowOutlinedIcon />
            </Tooltip>
            <p style={{ margin: "0.75rem 1.5rem" }}>Overview</p>
          </button>
        </div>
        <div>
          <button className="item-button">
            <Tooltip title="Validations" placement="right-start">
              <LeaderboardOutlinedIcon />
            </Tooltip>
            <p style={{ margin: "0.75rem 1.5rem" }}>Validations</p>
          </button>
        </div>
        <div>
          <button className="item-button">
            <Tooltip title="Merge" placement="right-start">
              <ViewListOutlinedIcon />
            </Tooltip>
            <p style={{ margin: "0.75rem 1.5rem" }}>Merge</p>
          </button>
        </div>
        <div>
          <button className="item-button">
            <Tooltip title="Possible Merge" placement="right-start">
              <PaymentOutlinedIcon />
            </Tooltip>
            <p style={{ margin: "0.75rem 1.5rem" }}>Possible Merge</p>
          </button>
        </div>
        <div>
          <button className="item-button">
            <Tooltip title="Unmerge" placement="right-start">
              <FenceOutlinedIcon />
            </Tooltip>
            <p style={{ margin: "0.75rem 1.5rem" }}>Unmerge</p>
          </button>
        </div>
        <div style={{ flexGrow: "1" }}></div>
        <div>
          <p style={{ margin: "0px 0px 0px 10px", fontSize: "0.75rem" }}>
            OTHER
          </p>
          <div>
            <button className="item-button">
              <Tooltip title="Messages" placement="right-start">
                <MarkUnreadChatAltOutlinedIcon />
              </Tooltip>
              <p style={{ margin: "0.75rem 1.5rem" }}>Messages</p>
            </button>
          </div>
          <div>
            <button className="item-button">
              <Tooltip title="Settings" placement="right-start">
                <SettingsSuggestOutlinedIcon />
              </Tooltip>
              <p style={{ margin: "0.75rem 1.5rem" }}>Settings</p>
            </button>
          </div>
          <div>
            <button className="item-button">
              <Tooltip title="Support" placement="right-start">
                <PermPhoneMsgOutlinedIcon />
              </Tooltip>
              <p style={{ margin: "0.75rem 1.5rem" }}>Support</p>
            </button>
          </div>
        </div>
      </Drawer>
    </Box>
  );
}
