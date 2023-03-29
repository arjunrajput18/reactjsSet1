export const StudentDetails = ({ student }) => {
  // Given a student object with student name and the marks for english, maths and computers. If the total marks of a student is >= 225, the grade is A, >=180 the grade is B, >=150 the grade is C, otherwise the grade is D. Build a React Component that takes the student object as props and uses it to show all the students details, total marks and grade on the DOM as shown in the image below.

  // const student = {
  //   name: "John Doe",
  //   english: 90,
  //   maths: 80,
  //   computers: 70
  // };

  const { name, english, maths, computers } = student;
  const totalMarks = english + maths + computers;

  const grade =
    totalMarks >= 225
      ? "A"
      : totalMarks >= 180
      ? "B"
      : totalMarks >= 150
      ? "C"
      : "D";

  return (
    <>
      <h1>{name}</h1>
      <h1>english:{english}</h1>
      <h1>maths:{maths}</h1>
      <h1>computers:{computers}</h1>
      <h1>TotalMarks:{totalMarks}</h1>
      <h2>Grade :{grade}</h2>
    </>
  );
};
