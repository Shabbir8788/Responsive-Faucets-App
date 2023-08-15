import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";

const CustomTable1 = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [showTable1, setShowTable1] = useState(false);
  const [showTable2, setShowTable2] = useState(false);

  const toggleTable1 = () => {
    setActiveButton("table1");
    setShowTable1(true);
    setShowTable2(false);
  };

  const toggleTable2 = () => {
    setActiveButton("table2");
    setShowTable1(false);
    setShowTable2(true);
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "15px", // Adjust padding for smaller screens
      }}
    >
      <h3
        style={{
          fontFamily: "Varela Round, Sans-Serif",
          fontWeight: "700",
          fontSize: "16px", // Adjust font size for smaller screens
          marginBottom: "10px", // Adjust margin for smaller screens
        }}
      >
        Request History
      </h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontSize: "14px", // Default font size

          // Media query for screens up to 992px
          "@media (max-width: 992px)": {
            fontSize: "12px", // Adjust font size for smaller screens
          },

          margin: "0 -5px", // Adjust margin for smaller screens
        }}
      >
        <Button
          onClick={toggleTable1}
          style={{
            backgroundColor: activeButton === "table1" ? "blue" : "white",
            color: activeButton === "table1" ? "white" : "black",
            padding: "8px", // Adjust padding for smaller screens
            width: "100%", // Set width to 100% for responsiveness
            marginBottom: "5px", // Adjust margin for smaller screens

            // Media query for screens up to 992px
            "@media (max-width: 992px)": {
              padding: "6px", // Adjust padding for smaller screens
              fontSize: "12px", // Adjust font size for smaller screens
            },

            // Media query for screens up to 768px
            "@media (max-width: 768px)": {
              padding: "4px", // Adjust padding for even smaller screens
              fontSize: "10px", // Adjust font size for even smaller screens
              marginBottom: "3px", // Adjust margin for even smaller screens
            },

            // Media query for screens up to 600px
            "@media (max-width: 600px)": {
              padding: "3px", // Adjust padding for the smallest screens
              fontSize: "8px", // Adjust font size for the smallest screens
              marginBottom: "2px", // Adjust margin for the smallest screens
            },
          }}
        >
          ETH Transaction History
        </Button>

        <Button
          onClick={toggleTable2}
          style={{
            backgroundColor: activeButton === "table2" ? "blue" : "white",
            color: activeButton === "table2" ? "white" : "black",
            padding: "8px", // Adjust padding for smaller screens
            width: "100%", // Set width to 100% for responsiveness

            // Media query for screens up to 992px
            "@media (max-width: 992px)": {
              padding: "6px", // Adjust padding for smaller screens
              fontSize: "12px", // Adjust font size for smaller screens
            },

            // Media query for screens up to 768px
            "@media (max-width: 768px)": {
              padding: "4px", // Adjust padding for even smaller screens
              fontSize: "10px", // Adjust font size for even smaller screens
            },

            // Media query for screens up to 600px
            "@media (max-width: 600px)": {
              padding: "3px", // Adjust padding for the smallest screens
              fontSize: "8px", // Adjust font size for the smallest screens
            },
          }}
        >
          TestLink Transaction History
        </Button>
      </div>

      {showTable1 && <Table1 />}
      {showTable2 && <Table2 />}
    </div>
  );
};

const Table1 = () => {
  return (
    <Table striped>
      <thead style={{ textAlign: "center" }}>
        <tr>
          <th>Sr</th>
          <th>Time</th>
          <th>Amount</th>
          <th>Hash</th>
        </tr>
      </thead>
      <tbody style={{ textAlign: "center" }}>
        {/* Table 1 content */}
        <tr>
          <td>1</td>
          <td>12:30 AM</td>
          <td>487</td>
          <td>4s8er5s5fe57rjmxnfuewrurks</td>
        </tr>
        <tr>
          <td>2</td>
          <td>10:30 AM</td>
          <td>875</td>
          <td>sf7s7ers4e7r7wser</td>
        </tr>
        <tr>
          <td>3</td>
          <td>11:30 AM</td>
          <td>797</td>
          <td>se4s7er7</td>
        </tr>
      </tbody>
    </Table>
  );
};

const Table2 = () => {
  return (
    <Table striped>
      <thead style={{ textAlign: "center" }}>
        <tr>
          <th>Sr</th>
          <th>Time</th>
          <th>Amount</th>
          <th>Hash</th>
        </tr>
      </thead>
      <tbody style={{ textAlign: "center" }}>
        {/* Table 2 content */}
        <tr>
          <td>1</td>
          <td>08:30 AM</td>
          <td>748</td>
          <td>7sgdfer35475896</td>
        </tr>
        <tr>
          <td>2</td>
          <td>10:23 AM</td>
          <td>974</td>
          <td>jte5485869jndn</td>
        </tr>
        <tr>
          <td>3</td>
          <td>11:23 AM</td>
          <td>9756</td>
          <td>jte76tfdedn</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CustomTable1;
