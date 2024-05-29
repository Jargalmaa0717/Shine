import { useState } from "react";
// import "./App.css";
import Badge from "./components/Badge";
import Avatar from "./components/Avatar";
import Button from "./components/Button/Button";
import StatusBadge from "./components/StatusBadge";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <div>jargalmaa</div> */}
      <h1>Badge</h1>
      <div>
        <Badge
          label="Jargalmaa"
          constrast="dark"
          color="primary"
          size="small"
          radius="curved"
        ></Badge>
      </div>
      <h1>Avatar</h1>
      <Avatar
        label="jargalmaa"
        contrast="light"
        size="small"
        type="rounded"
        content="image"
        src="ami.png"
      ></Avatar>
      <h1>Button</h1>
      <Button label="Namaig dar" color="secondary" variant="filled"></Button>
      <h1>StatusBadge</h1>
      <StatusBadge
        label="HiStatusBadge"
        constrast="light"
        color="success"
      ></StatusBadge>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
