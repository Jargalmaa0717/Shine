import { useState } from "react";
import "./App.css";
import Badge from "./components/Badge";
import Avatar from "./components/Avatar";
import Button from "./components/Button/Button";
import StatusBadge from "./components/StatusBadge";
import IconButton from "./components/IconButton";
import Tooltip from "./tooltip";
import Tabs from "./tabs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="profile-screen">
      <header className="profile-header">
        <IconButton
          label="←Буцах "
          contrast="light"
          size="medium"
          state="default"
        />
      </header>
      <body className="body-profile">
        <div className="body-frame">
          {/* <h1>Миний тухай</h1> */}`
          <div>
          <div className="avatar-profile" >
            <Avatar
              contrast="light"
              size="medium"
              type="rounded"
              content="image"
              src="girl.jpg"
            />
            
          </div>

          <div className="profile-info">
            <h5>Хувийн мэдээлэл</h5>
            <StatusBadge label="Online" contrast="light" color="success" />
            <IconButton
              label="Edit Profile"
              contrast="light"
              size="medium"
              state="default"
            />
          </div>
          </div>
        <section className="profile-details">
          <h2>Details</h2>
          <Badge
            label="Username: Jargalmaa"
            contrast="dark"
            color="primary"
            size="small"
            radius="curved"
          />
          <Badge
            label="Email: jargalmaa@example.com"
            contrast="dark"
            color="primary"
            size="small"
            radius="curved"
          />
          <Button
            label="Message"
            color="secondary"
            variant="filled"
            onClick={() => alert("Message sent!")}
          />
        </section>
        <Tabs>
          <div label="Posts">
            <p>Here are some user posts...</p>
          </div>
          <div label="Comments">
            <p>Here are some user comments...</p>
          </div>
          <div label="Settings">
            <p>Here are the user settings...</p>
          </div>
        </Tabs>
        <Tooltip content="Profile Screen Tooltip" />
        </div>
      </body>`
      `
    </div>
  );
}

export default App;
