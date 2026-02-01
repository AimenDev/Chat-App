const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex gap-4">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""
            } `}
        >
          <span className="label-text text-gray-200">Male</span>
          <input
            type="checkbox"
            className="checkbox border-gray-400 [--chkbg:theme(colors.primary)] [--chkfg:white] checked:border-primary"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer  ${selectedGender === "female" ? "selected" : ""
            }`}
        >
          <span className="label-text text-gray-200">Female</span>
          <input
            type="checkbox"
            className="checkbox border-gray-400 [--chkbg:theme(colors.secondary)] [--chkfg:white] checked:border-secondary"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
