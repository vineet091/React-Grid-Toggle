import "./styles.css";
import { useState } from "react";
import TABLE_DATA from "./data";
import Table from "./Table";

export default function App() {
  const [isFlip, setFlipFlag] = useState(false);
  return (
    <div className="App">
      <div className="grid">
        <button
          className="btnToggleTable"
          onClick={() => {
            setFlipFlag((value) => !value);
          }}
        >
          Toggle Table Direction
        </button>
      </div>
      <div className="grid">
        <Table tableData={TABLE_DATA} isFlip={isFlip} />
      </div>
    </div>
  );
}
