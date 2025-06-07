function CircularRating({ percentage }) {
  const strokeDasharray = 100;
  const strokeDashoffset = 100 - percentage;

  // Optional: choose color based on rating
  const getColor = (pct) => {
    if (pct >= 75) return "#21d07a"; // green
    if (pct >= 50) return "#d2d531"; // yellow
    return "#db2360"; // red
  };

  return (
    <div className="circular-rating">
      <svg viewBox="0 0 36 36">
        <path
          className="circle-bg"
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="circle"
          stroke={getColor(percentage)}
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
        />
        <text x="18" y="20.35" className="percentage" textAnchor="middle" transform="rotate(90 18 20.35)">
        {percentage}%
        </text>
      </svg>
    </div>
  );
}

export default CircularRating;
