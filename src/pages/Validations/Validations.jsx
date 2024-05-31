import React from "react";
import SideNavbar from "../../components/SideNavbar/SideNavbar";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import "./Validation.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BasicTimeline from "../../components/Timeline/Tiimeline";
import SvgIcon from "@mui/material/SvgIcon";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import map from "../../images/map.jpg";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export const Validations = () => {
  return (
    <div style={{ display: "flex" }}>
      <SideNavbar />
      <div
        style={{
          width: "100%",
          minHeight: "90vh",
          background: "#fff",
          margin: "5rem 1rem 0rem 1rem",
        }}
      >
        <div
          style={{
            height: "100px",
            borderBottom: "1px solid lightgray",
            display: "flex",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              color: "#007bff",
              fontWeight: "700",
              textDecoration: "none",
            }}
            to={"/"}
          >
            <KeyboardArrowLeftIcon />
            Back
          </Link>
          <div style={{ marginLeft: "15px" }}>
            <Typography variant="h5" style={{ fontWeight: "bolder" }}>
              Customer Profile
            </Typography>
            <Typography variant="p" style={{ color: "gray" }}>
              Last Updated: 12:43 PM, 20 Mar 2024
            </Typography>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ width: "70%" }}>
            <div
              style={{
                height: "10vh",
                border: "1px solid lightgray",
                borderRadius: "20px",
                margin: "1rem",
                display: "flex",
                alignItems: "center",
                fontSize: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  background: "transparent",
                  border: "none",
                  marginLeft: "5px",
                  borderRight: "1px solid lightgray",
                  padding: "2rem",
                  height: "10vh",
                  width: "30%",
                }}
              >
                <div>
                  <Avatar
                    alt="A"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGLuy1mSIGQSrB296pcbqLZQjqT3bD3srOPRJnPGqeGBnk7HXKsc6Lby4YxuWRjN_SPTM&usqp=CAU"
                    sx={{ width: 36, height: 36 }}
                  />
                </div>
                <div style={{ marginLeft: "10px" }}>
                  <h3
                    style={{
                      color: "#000",
                      margin: "0px",
                    }}
                  >
                    Austin Robertson
                  </h3>
                  <p
                    style={{
                      color: "gray",
                      margin: "0px",
                      fontSize: "0.85rem",
                    }}
                  >
                    Marketing Administrator
                  </p>
                </div>
              </div>
              <div className="customer-details">
                <div>
                  <p
                    style={{
                      margin: "0px",
                    }}
                  >
                    FIRST NAME
                  </p>
                  <h3
                    style={{
                      color: "#000",
                      margin: "0px",
                    }}
                  >
                    Austin
                  </h3>
                </div>
                <div>
                  <p
                    style={{
                      margin: "0px",
                    }}
                  >
                    LAST NAME
                  </p>
                  <h3
                    style={{
                      color: "#000",
                      margin: "0px",
                    }}
                  >
                    Robertson
                  </h3>
                </div>
                <div>
                  <p
                    style={{
                      margin: "0px",
                    }}
                  >
                    CUSTOMER ID
                  </p>
                  <h3
                    style={{
                      color: "#000",
                      margin: "0px",
                    }}
                  >
                    3456
                  </h3>
                </div>

                <KeyboardArrowDownIcon />
              </div>
            </div>
            <div style={{ display: "flex", width: "100%" }}>
              <div style={{ width: "50%" }}>
                <div
                  style={{
                    minHeight: "15vh",
                    border: "1px solid lightgray",
                    borderRadius: "15px",
                    margin: "1rem",
                    width: "auto",
                  }}
                >
                  <div
                    style={{
                      borderBottom: "1px solid lightgray",
                      height: "5vh",
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <h4 style={{ color: "gray", margin: "1rem" }}>
                      Customer Details
                    </h4>
                  </div>
                  <div>
                    <div style={{ display: "flex", padding: "0rem 1rem" }}>
                      <p style={{ color: "gray", margin: "0.5rem 0rem" }}>
                        SSN
                      </p>
                      <p
                        style={{
                          marginLeft: "15px",
                          fontWeight: "600",
                          margin: "0.5rem 1rem",
                        }}
                      >
                        234534677878
                      </p>
                    </div>
                    <div style={{ display: "flex", padding: "0rem 1rem" }}>
                      <p style={{ color: "gray", margin: "0.5rem 0rem" }}>
                        ID Number
                      </p>
                      <p
                        style={{
                          marginLeft: "15px",
                          fontWeight: "600",
                          margin: "0.5rem 1rem",
                        }}
                      >
                        3245gverg243t36
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    minHeight: "30vh",
                    border: "1px solid lightgray",
                    borderRadius: "15px",
                    margin: "1rem",
                    width: "auto",
                  }}
                >
                  <div
                    style={{
                      borderBottom: "1px solid lightgray",
                      height: "5vh",
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <h4 style={{ color: "gray", margin: "1rem" }}>Contact </h4>
                  </div>
                  <div>
                    <div style={{ display: "flex", padding: "0rem 1rem" }}>
                      <p style={{ color: "gray", margin: "0.5rem 0rem" }}>
                        Address Line 1
                      </p>
                      <p
                        style={{
                          marginLeft: "15px",
                          fontWeight: "600",
                          margin: "0.5rem 1rem",
                        }}
                      >
                        45789097887
                      </p>
                    </div>
                    <div style={{ display: "flex", padding: "0rem 1rem" }}>
                      <p style={{ color: "gray", margin: "0.5rem 0rem" }}>
                        Address Line 2
                      </p>
                      <p
                        style={{
                          marginLeft: "15px",
                          fontWeight: "600",
                          margin: "0.5rem 1rem",
                        }}
                      >
                        45789097887
                      </p>
                    </div>
                    <div style={{ display: "flex", padding: "0rem 1rem" }}>
                      <p style={{ color: "gray", margin: "0.5rem 0rem" }}>
                        Mobile
                      </p>
                      <p
                        style={{
                          marginLeft: "15px",
                          fontWeight: "600",
                          margin: "0.5rem 1rem",
                        }}
                      >
                        45789097887
                      </p>
                    </div>
                    <div style={{ display: "flex", padding: "0rem 1rem" }}>
                      <p style={{ color: "gray", margin: "0.5rem 0rem" }}>
                        Mobile
                      </p>
                      <p
                        style={{
                          marginLeft: "15px",
                          fontWeight: "600",
                          margin: "0.5rem 1rem",
                        }}
                      >
                        45789097887
                      </p>
                    </div>
                    <div style={{ display: "flex", padding: "0rem 1rem" }}>
                      <p style={{ color: "gray", margin: "0.5rem 0rem" }}>
                        Home{" "}
                      </p>
                      <p
                        style={{
                          marginLeft: "15px",
                          fontWeight: "600",
                          margin: "0.5rem 1rem",
                        }}
                      >
                        45789097887
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    minHeight: "5vh",
                    border: "2px solid rgb(0, 123, 255)",
                    borderRadius: "15px",
                    display: "flex",
                    margin: "1rem",
                    width: "auto",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <h4
                    style={{
                      color: "gray",
                      padding: "0rem 1rem",
                      margin: "0.9rem 0rem",
                    }}
                  >
                    Accounts
                  </h4>
                  <p
                    style={{
                      marginLeft: "15px",
                      fontWeight: "600",
                      margin: "0.5rem 1rem",
                      color: "rgb(0, 123, 255)",
                    }}
                  >
                    10
                  </p>
                </div>
              </div>

              <div
                style={{
                  minHeight: "60vh",
                  border: "1px solid lightgray",
                  borderRadius: "15px",
                  margin: "1rem",
                  display: "flex",
                  width: "50%",
                }}
              >
                <div style={{ width: "100%" }}>
                  <div
                    style={{
                      borderBottom: "1px solid lightgray",
                      height: "5vh",
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <h4 style={{ color: "gray", margin: "1rem" }}>
                      Relationships (23)
                    </h4>
                  </div>
                  <div style={{ padding: "1.5rem" }}>
                    <img
                      src={map}
                      alt=""
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <div
                    style={{
                      padding: "1.5rem",
                      paddingTop: "0px"
                    }}
                  >
                    <div
                      style={{
                        background: "#f3fafe",
                        width: "100%",
                        padding: "0.25rem 1rem",
                        borderRadius: "1rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          width: "auto",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <HomeIcon color="primary" sx={{ fontSize: 30 }} />
                        <p style={{ fontSize: "1.2rem", margin: "0.75rem" }}>
                          Ibnu Mas'ud
                        </p>
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <p>ID: 4317</p>
                        <LaunchOutlinedIcon
                          style={{ marginLeft: "5px" }}
                          color="primary"
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        background: "#f3fafe",
                        width: "100%",
                        padding: "0.25rem 1rem",
                        borderRadius: "1rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: "0.5rem",
                      }}
                    >
                      <div
                        style={{
                          width: "auto",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <HomeIcon color="primary" sx={{ fontSize: 30 }} />
                        <p style={{ fontSize: "1.2rem", margin: "0.75rem" }}>
                          Ibnu Mas'ud
                        </p>
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <p>ID: 4317</p>
                        <LaunchOutlinedIcon
                          style={{ marginLeft: "5px" }}
                          color="primary"
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        background: "#f3fafe",
                        width: "100%",
                        padding: "0.25rem 1rem",
                        borderRadius: "1rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: "0.5rem",
                      }}
                    >
                      <div
                        style={{
                          width: "auto",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "1.2rem",
                            margin: "0.75rem 0.5rem",
                          }}
                        >
                          Ibnu Mas'ud
                        </p>
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <p>ID: 4317</p>
                        <LaunchOutlinedIcon
                          style={{ marginLeft: "5px" }}
                          color="primary"
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        background: "#f3fafe",
                        width: "100%",
                        padding: "0.25rem 1rem",
                        borderRadius: "1rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: "0.5rem",
                      }}
                    >
                      <div
                        style={{
                          width: "auto",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "1.2rem",
                            margin: "0.75rem 0.5rem",
                          }}
                        >
                          Ibnu Mas'ud
                        </p>
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <p>ID: 4317</p>
                        <LaunchOutlinedIcon
                          style={{ marginLeft: "5px" }}
                          color="primary"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              minHeight: "100vh",
              border: "1px solid lightgray",
              borderRadius: "15px",
              margin: "1rem",
              width: "30%",
            }}
          >
            <div
              style={{
                borderBottom: "1px solid lightgray",
                height: "5vh",
                alignItems: "center",
                width: "100%",
              }}
            >
              <h4 style={{ margin: "1rem" }}>Audit Trail</h4>
            </div>
            <div>
              <BasicTimeline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
