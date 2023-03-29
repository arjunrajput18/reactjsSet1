export const EmployeeDeatilsLevel = ({ employee }) => {
  const isOrange = (level) => (level === 2 ? "orange" : "");

  return (
    <div>
      {employee.map(({ name, level, dept, designation, salary }) => (
        <li style={{ backgroundColor: isOrange(level) }}>
          name:{name},level: {level}, dept:{dept}, designation:{designation}
          ,salary: {salary}
        </li>
      ))}
    </div>
  );
};

export const EmployeeDeatilsLevel1 = ({ employee }) => {
  const handlerBorder = (designation) =>
    designation === "President" ? "1px solid black" : "";
  return (
    <>
      {employee.map(({ name, level, dept, designation, salary }) => (
        <li style={{ border: handlerBorder(designation) }}>
          name:{name},level: {level}, dept:{dept}, designation:{designation}
          ,salary: {salary}
        </li>
      ))}
    </>
  );
};
