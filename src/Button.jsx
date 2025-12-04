import "./Button.css";

function Button(props) {
  return (
    <div className={`btn-outer-2 ${props.type}-btn`}>
      <div className="btn-outer">
        <button className={`btn ${props.type}-btn`} onClick={props.onclick}>
          {props.type}
        </button>
      </div>
    </div>
  );
}
export default Button;
