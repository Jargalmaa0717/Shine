import React, { useState } from "react";
import TextArea from "./components/TextArea";
import TextField from "./components/TextField";
import Switch from "./components/Switch";
import Radio from "./components/Radio";
import Checkbox from "./components/Checkbox";
import Button from "./components/Button";
import "./App.css"; // Importing the CSS file

function App() {
  const [showBio, setShowBio] = useState(false);
  const handleSwitchChange = () => {
    setShowBio((prevShowBio) => !prevShowBio);
    console.log("Switch toggled, showBio:", !showBio);
  };
  return (
    <div className="container">
      <h1 className="title">Хувийн Мэдээлэл</h1>

      <label>Овог, Нэр</label>
      <div className="text-field">
        <TextField label="Нэрээ оруулна уу" contrast="dark" />
      </div>
      <label>Утасны дугаар</label>
      <div className="text-field">
        <TextField label="Утасны дугаар" contrast="light" />
      </div>
      <label>Хүйс</label>
      <div className="radio">
        <Radio name="gender" label="Эр" contrast="light" />
        <Radio
          className="radioButton"
          name="gender"
          label="Эм"
          contrast="light"
        />
      </div>

      <label>Нэмэлт мэдээлэл</label>
      <div className="switch" onChange={handleSwitchChange}>
        <Switch contrast="light" />
      </div>
      {showBio && (
        <div className="text-area textarea">
          <TextArea
            contrast="light"
            label="Мэдээлэл оруулах"
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #e2e8f0",
              borderRadius: "0.25rem",
            }}
          />
        </div>
      )}

      <div className="form-group">
        <Checkbox label="Мэдээлэл илгээхийг зөвшөөрөх" contrast="dark" />
      </div>
      <div className="flex-row">
        <Button
          label="ᠢᠯᠭᠡᠡᠾ Илгээх"
          size="medium"
          color="primary"
          variant="outline"
        />
      </div>
    </div>
  );
}

export default App;
