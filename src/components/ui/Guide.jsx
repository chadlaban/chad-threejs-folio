import PropTypes from "prop-types";
import { selectableObjects } from "../../utils/QualityOfLife";

const Guide = ({ selectedMesh }) => {
  return (
    <div className="px-4">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {selectableObjects.map((obj) => (
          <div
            key={obj.id}
            className={`p-2 border rounded-lg transition ${
              selectedMesh === obj.mesh
                ? "border-transparent"
                : "border-customGray"
            } hover:shadow-lg`}
            style={{
              backgroundColor:
                selectedMesh === obj.mesh ? obj.color : "transparent",
            }}
          >
            <h6
              className={`font-mt text-lg font-medium text-center`}
              style={{
                color: selectedMesh === obj.mesh ? obj.textColor : "inherit",
              }}
            >
              {obj.title}
            </h6>
            <img
              src={obj.path}
              alt={obj.path}
              className="w-32 h-28 object-cover rounded-lg"
            />
            <p className="text-center mt-2 text-sm font-medium">{obj.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

Guide.propTypes = {
  selectedMesh: PropTypes.string,
};

export default Guide;
