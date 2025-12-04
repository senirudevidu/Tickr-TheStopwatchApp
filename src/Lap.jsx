import "./Lap.css";

function Lap(props) {
  const laps = props.laps;

  return (
    <div className="lap-container">
      <div className="lap">
        {laps.length > 0
          ? [...laps].map((lap, index) => (
              <div key={index} className="lap-item">
                <p>Lap {laps.length - index}</p>
                <p>{lap}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default Lap;
