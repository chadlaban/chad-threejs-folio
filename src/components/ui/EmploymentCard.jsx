import PropTypes from "prop-types";

export const EmploymentCard = ({ work }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-md p-4 mb-4 bg-customWhite">
      <h3 className="font-mt text-xl font-semibold">{work.job_title}</h3>
      <a
        href={work.company_link}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mt text-lg text-customGray hover:underline"
      >
        {work.company}
      </a>
      <p className="font-js text-lg font-medium text-customGray mt-2">
        {work.employment_duration}
      </p>
      <p className="font-js text-lg text-customGray font-semibold mt-4">
        {work.responsibilities}
      </p>
    </div>
  );
};

EmploymentCard.propTypes = {
  work: PropTypes.object.isRequired,
};
