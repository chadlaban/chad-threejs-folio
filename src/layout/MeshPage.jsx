import { AboutMe } from "../pages/AboutMe";
import { Projects } from "../pages/Projects";
import { Employment } from "../pages/Employment";
import { Certifications } from "../pages/Certifications";
import { Gallery } from "../pages/Gallery";
import { ContactMe } from "../pages/ContactMe";
import { Hobbies } from "../pages/Hobbies";
import PropTypes from "prop-types";

// mesh tied to page
const MESH_COMPONENT_MAP = {
  Cube016_4: AboutMe,
  "Screenshot_2024-12-03_010419_2": Projects,
  Cube054: Employment,
  Cube100_1: Certifications,
  Cube112_1: Gallery,
  LargeBeanBag: ContactMe,
  Vase: Hobbies,
};

const MeshPage = ({ mesh }) => {
  const SelectedComponent = MESH_COMPONENT_MAP[mesh] || null;

  return <div>{SelectedComponent && <SelectedComponent />}</div>;
};

MeshPage.propTypes = {
  mesh: PropTypes.string.isRequired,
};

export default MeshPage;
