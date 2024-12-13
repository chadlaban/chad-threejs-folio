import PropTypes from "prop-types";

export const CertificationCard = ({ certificate }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-md p-4 mb-4 bg-customGray/[.5]">
      <h3 className="font-mt text-xl font-semibold">
        {certificate.certification_title}
      </h3>
      <a
        href={certificate.authenticity_link}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mt text-lg text-customGray hover:underline"
      >
        {certificate.association}
      </a>
      <p className="font-js text-lg font-medium text-customGray mt-2">
        Issue Date: {certificate.issue_date}
      </p>
    </div>
  );
};

CertificationCard.propTypes = {
  certificate: PropTypes.object.isRequired,
};
