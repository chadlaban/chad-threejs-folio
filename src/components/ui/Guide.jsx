import PropTypes from "prop-types";
import { selectableObjects } from "../../utils/QualityOfLife";

const Guide = ({ selectedMesh }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          window.innerWidth <= 640 ? "repeat(3, 1fr)" : "repeat(2, 1fr)",
        gap: "1rem",
      }}
    >
      {selectableObjects.map((obj) => (
        <div
          key={obj.id}
          className={`p-2 w-fit border rounded-lg transition ${
            selectedMesh === obj.mesh
              ? "border-transparent"
              : "border-customWhite"
          } hover:shadow-lg`}
          style={{
            backgroundColor:
              selectedMesh === obj.mesh ? obj.color : "transparent",
          }}
        >
          <h6
            className={`font-mt font-medium text-center`}
            style={{
              color: selectedMesh === obj.mesh ? obj.textColor : "inherit",
              fontSize: window.innerWidth <= 640 ? "12px" : "1.125rem",
            }}
          >
            {obj.title}
          </h6>
          <img
            src={obj.path}
            alt={obj.path}
            className="w-32 h-28 object-cover rounded-lg"
            style={{
              width: window.innerWidth <= 640 ? "6rem" : "",
              height: window.innerWidth <= 640 ? "6rem" : "",
              borderRadius: window.innerWidth <= 640 ? "0.5rem" : "",
            }}
          />
          <p className="text-center mt-2 text-sm font-medium">{obj.name}</p>
        </div>
      ))}
    </div>
  );
};

Guide.propTypes = {
  selectedMesh: PropTypes.string,
};

export default Guide;
