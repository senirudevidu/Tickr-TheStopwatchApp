import "./Lap.css";

function Lap(props) {
  const laps = props.laps;

  return (
    <>
      <div className="lap-container">
        <div className="lap">
          {laps.map((lap, index) => (
            <div key={index} className="lap-item">
              {lap}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Lap;
