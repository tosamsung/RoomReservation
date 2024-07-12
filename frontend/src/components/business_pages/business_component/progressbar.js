function ProgressBar({ max, current }) {
  const percentage = (current / max) * 100;
  return (
    <div className="progress rounded-0">
      <div className="progress-bar bg-warning border" style={{ width: `${percentage}%` }}>
      </div>
      {/* <div className="progress-bar bg-blue border" style={{ width: "10%" }}>
      </div>
      <div className="progress-bar bg-blue border" style={{ width: "10%" }}>
      </div> */}
    </div>
  );
}
export default ProgressBar
