// Build an EmployeeCard component in React to display name, designation and work experience of a person. Pass name, designation and work experience as props.
// The colour of “Designation:” should be green.
// The colour of “Experience:” should be blue.

export const EmployeeCard = ({ data }) => {
  const { name, designation, experience } = data;
  return (
    <>
      <h1>name: {name}</h1>
      <p>
        <span style={{ color: "green" }}> designation:</span>
        {designation}
      </p>
      <p>
        <span style={{ color: "blue" }}>experience:</span> {experience}
      </p>
    </>
  );
};
