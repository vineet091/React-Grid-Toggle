import "./styles.css";
import Col from "./Col";
import Row from "./Row";

export default function Grid({ tableData: { header, data }, isFlip }) {
  let elems = [];
  let headerColumns = [];
  for (var i = 0; i < header.length; i++) {
    headerColumns.push(<Col isFlip={isFlip} value={header[i]} />);
  }
  elems.push(
    <Row isFlip={isFlip} type="th">
      {headerColumns}
    </Row>
  );
  for (var j = 0; j < data.length; j++) {
    var rowData = data[j];
    let columns = [];
    columns.push(
      <Col
        key={`td-id-${10 * data.id + j}`}
        isFlip={isFlip}
        value={rowData.id}
      />
    );
    columns.push(
      <Col
        key={`td-name-${10 * data.id + j}`}
        isFlip={isFlip}
        value={rowData.name}
      />
    );
    columns.push(
      <Col
        key={`td-age-${10 * data.id + j}`}
        isFlip={isFlip}
        value={rowData.age}
      />
    );
    columns.push(
      <Col
        key={`td-city-${10 * data.id + j}`}
        isFlip={isFlip}
        value={rowData.city}
      />
    );
    elems.push(
      <Row key={`tr-${j}`} isFlip={isFlip} type="tr">
        {columns}
      </Row>
    );
  }
  return <div className={`table ${isFlip ? "flipped" : ""}`}>{elems}</div>;
}
