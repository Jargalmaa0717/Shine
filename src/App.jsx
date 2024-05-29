import { useState } from "react";
import TextArea from "./components/TextArea";
import TextField from "./components/TextField";
import Switch from "./components/Switch";
import Radio from "./components/Radio";
import Checkbox from "./components/Checkbox";
import Button from "./components/Button";

function App() {
  const [showBio, setShowBio] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f7fafc",
        padding: "1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          padding: "2rem",
          borderRadius: "0.5rem",
          boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
          }}
        >
          Profile Information
        </h1>
        <div style={{ marginBottom: "2rem" }}>
          <label
            style={{
              display: "block",
              fontSize: "1rem",
              fontWeight: "500",
              marginBottom: "0.75rem",
            }}
          >
            First Name
          </label>
          <TextField
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #e2e8f0",
              borderRadius: "0.25rem",
            }}
            label="First Name"
          ></TextField>
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <label
            style={{
              display: "block",
              fontSize: "1rem",
              fontWeight: "500",
              marginBottom: "0.75rem",
            }}
          >
            Last Name
          </label>
          <TextField
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #e2e8f0",
              borderRadius: "0.25rem",
            }}
            label="Last Name"
          ></TextField>
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <label
            style={{
              display: "block",
              fontSize: "1rem",
              fontWeight: "500",
              marginBottom: "0.75rem",
            }}
          >
            Gender
          </label>
          <Radio name="gender" label="Male" contrast="light" />
          <Radio name="gender" label="Female" contrast="light" />
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <Switch label="Show Bio" contrast="light" onChange={setShowBio} />
        </div>
        {showBio && (
          <div style={{ marginBottom: "2rem" }}>
            <label
              style={{
                display: "block",
                fontSize: "1rem",
                fontWeight: "500",
                marginBottom: "0.75rem",
              }}
            >
              Bio
            </label>
            <TextArea
              contrast="dark"
              label="Bio"
              style={{
                width: "100%",
                padding: "0.5rem",
                border: "1px solid #e2e8f0",
                borderRadius: "0.25rem",
              }}
            ></TextArea>
          </div>
        )}
        <div style={{ marginBottom: "2rem" }}>
          <Checkbox
            label="Subscribe to newsletter"
            style={{ marginRight: "0.5rem" }}
          ></Checkbox>
        </div>
        <div>
          <Button
            label="Submit"
            color="secondary"
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#4299e1",
              color: "#ffffff",
              borderRadius: "0.25rem",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#3182ce";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#4299e1";
            }}
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default App;
