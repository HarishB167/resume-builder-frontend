import React from "react";

function SpinnerWhileLoading({
  spinnerType,
  showSpinnerWhen,
  className,
  children,
  style,
}) {
  const spinType = spinnerType ? spinnerType : "border text-secondary";
  return (
    <React.Fragment>
      {showSpinnerWhen && (
        <div className={className}>
          <div className={`spinner-${spinType}`} role="status" style={style}>
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {!showSpinnerWhen && children}
    </React.Fragment>
  );
}

export default SpinnerWhileLoading;
