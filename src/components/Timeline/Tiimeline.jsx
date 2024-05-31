import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import CheckIcon from "@mui/icons-material/Check";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function NoOppositeContent() {
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" style={{ borderColor: "#007bff" }}>
            <CheckIcon
              style={{
                height: 16,
                width: "16",
                color: "#007bff",
              }}
            />
          </TimelineDot>
          <TimelineConnector style={{ background: "#007bff" }} />
        </TimelineSeparator>
        <div style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h4 style={{ margin: "0.7rem 0.7rem 0rem 0.7rem" }}>
              Golden Record
            </h4>
            <p style={{ margin: "1rem 0rem 0rem 0rem" }}>20 Mar 2023</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <PersonIcon color="primary" />
              <TimelineContent style={{ paddingLeft: "5px" }}>
                Updated by Pranshu
              </TimelineContent>
            </div>
            <KeyboardArrowDownIcon />
          </div>
        </div>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" style={{ borderColor: "#007bff" }}>
            <CheckIcon
              style={{
                height: 16,
                width: "16",
                color: "#007bff",
              }}
            />
          </TimelineDot>
          <TimelineConnector style={{ background: "#007bff" }} />
        </TimelineSeparator>
        <div style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h4 style={{ margin: "0.7rem 0.7rem 0rem 0.7rem" }}>
              Pre Validation
            </h4>
            <p style={{ margin: "1rem 0rem 0rem 0rem" }}>20 Mar 2023</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <PersonIcon color="primary" />
              <TimelineContent style={{ paddingLeft: "5px" }}>
                Updated by Pranshu
              </TimelineContent>
            </div>
            <span style={{ color: "#007bff" }}>View Comments</span>
          </div>
        </div>
      </TimelineItem>{" "}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" style={{ borderColor: "#007bff" }}>
            <CheckIcon
              style={{
                height: 16,
                width: "16",
                color: "#007bff",
              }}
            />
          </TimelineDot>
          <TimelineConnector style={{ background: "#007bff" }} />
        </TimelineSeparator>
        <div style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h4 style={{ margin: "0.7rem 0.7rem 0rem 0.7rem" }}>
              Business Validation
            </h4>
            <p style={{ margin: "1rem 0rem 0rem 0rem" }}>20 Mar 2023</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <PersonIcon color="primary" />
              <TimelineContent style={{ paddingLeft: "5px" }}>
                Updated by Pranshu
              </TimelineContent>
            </div>
            <KeyboardArrowDownIcon />
          </div>
          <div>
            <h4 style={{ margin: "0px 0.75rem" }}>Description</h4>
            <p style={{ margin: "0px 0.75rem" }}>Some Sample Description</p>
          </div>
        </div>
      </TimelineItem>{" "}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" style={{ borderColor: "#007bff" }}>
            <CheckIcon
              style={{
                height: 16,
                width: "16",
                color: "#007bff",
              }}
            />
          </TimelineDot>
          <TimelineConnector style={{ background: "#007bff" }} />
        </TimelineSeparator>
        <div style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h4 style={{ margin: "0.7rem 0.7rem 0rem 0.7rem" }}>Match Merge</h4>
            <p style={{ margin: "1rem 0rem 0rem 0rem" }}>20 Mar 2023</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <PersonIcon color="primary" />
              <TimelineContent style={{ paddingLeft: "5px" }}>
                Updated by Pranshu
              </TimelineContent>
            </div>
            <KeyboardArrowDownIcon />
          </div>
        </div>
      </TimelineItem>{" "}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            variant="outlined"
            style={{ color: "orange", borderColor: "orange" }}
          >
            <FiberManualRecordIcon style={{ height: 16, width: "16" }} />
          </TimelineDot>
          <TimelineConnector style={{ backgroundColor: "LightGray" }} />
        </TimelineSeparator>
        <div style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h4
              style={{ margin: "0.7rem 0.7rem 0rem 0.7rem", color: "orange" }}
            >
              Unmerge Request Pending
            </h4>
            <p style={{ margin: "1rem 0rem 0rem 0rem" }}>20 Mar 2023</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <PersonIcon color="primary" />
              <TimelineContent style={{ paddingLeft: "5px" }}>
                Updated by Pranshu
              </TimelineContent>
            </div>
            <KeyboardArrowDownIcon />
          </div>
        </div>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot
            variant="outlined"
            style={{ color: "lightgray", borderColor: "lightgray" }}
          >
            <FiberManualRecordIcon
              style={{ height: 16, width: "16", color: "lightgray" }}
            />
          </TimelineDot>
        </TimelineSeparator>
        <div style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "lightgray",
            }}
          >
            <h4 style={{ margin: "0.7rem 0.7rem 0rem 0.7rem" }}>
              Unmerge Request
            </h4>
          </div>
          <TimelineContent style={{ paddingLeft: "5px", color: "lightgray" }}>
            ETA 25 Marr 2023
          </TimelineContent>
        </div>
      </TimelineItem>
    </Timeline>
  );
}
