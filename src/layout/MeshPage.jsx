import { AboutMe } from "../pages/AboutMe";
import { Projects } from "../pages/Projects";
import { Employment } from "../pages/Employment";
import { Certifications } from "../pages/Certifications";
import { Gallery } from "../pages/Gallery";
import { ContactMe } from "../pages/ContactMe";
import { Hobbies } from "../pages/Hobbies";
import PropTypes from "prop-types";

const MESH_COMPONENT_MAP = {
  Screen001: AboutMe,
  CpuTower: Projects,
  OfficeChair: Employment,
  MirrorCase001: Certifications,
  BeautifulMe: Gallery,
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
