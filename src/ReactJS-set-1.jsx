import { EmployeeCard } from "./EmployeeCard";
import { ButtonComponent } from "./ButtonComponent";
import { ProductsCard2 } from "./ProductsCard2";
import { StationnaryItems } from "./StationnaryItems";
import { DisplayImage } from "./DisplayImage";
import { ProductsCard } from "./ProductsCard";
import { StudentDetails } from "./StudentDetails";
import { EmployeeDeatilsLevel } from "./EmployeeDeatilsLevel";
import { EmployeeDeatilsLevel1 } from "./EmployeeDeatilsLevel";
import { HighlightButton } from "./HighlightButton";
const employee = {
  name: "Arjun",
  designation: "software Engineer",
  experience: "2"
};
export const Question1 = () => {
  return (
    <div>
      <EmployeeCard data={employee} />
    </div>
  );
};

// Build a React component to display a button with custom styles and button text as ‘Start’. The styles should be passed as props.

const backgroundColor = "lightgreen";
const color = "darkgreen";
const borderRadius = "5px";
const padding = "10px";
export const Question2 = () => {
  return (
    <>
      <div>
        <ButtonComponent
          backgroundColor={backgroundColor}
          color={color}
          borderRadius={borderRadius}
          padding={padding}
        />
      </div>
    </>
  );
};
const items = ["pen", "pencil", "ruler", "eraser"];
export const Question3 = () => {
  return (
    <>
      <StationnaryItems header="Stationery Items" items={items} />
    </>
  );
};
const imageLink =
  "https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg";
const caption = "Spring Flowers";
export const Question4 = () => {
  return (
    <>
      <DisplayImage caption={caption} url={imageLink} />
    </>
  );
};
const products = [
  { name: "Perk", quantity: 10, sales: 7 },
  { name: "Pepsi", quantity: 10, sales: 20 },
  { name: "Coke", quantity: 18, sales: 50 },
  { name: "Maggi", quantity: 41, sales: 22 },
  { name: "5Star", quantity: 7, sales: 9 }
];
export const Question5 = () => {
  // Given the products data. Build a React component to display the name of all products as an unordered list on the DOM. Order of items display can vary from the image shown below.

  return (
    <>
      <ul>
        <ProductsCard products={products} />
      </ul>
    </>
  );
};

// Consider the products data from previous question and display all the product details as unordered list for which the number of sales is more than the quantity.
export const Question6 = () => {
  return (
    <>
      <ul>
        <ProductsCard2 products={products} />
      </ul>
    </>
  );
};
const student = {
  name: "John Doe",
  english: 90,
  maths: 80,
  computers: 70
};
export const Question7 = () => {
  return (
    <>
      <StudentDetails student={student} />
    </>
  );
};
const employees = [
  {
    name: "Jack Smith",
    level: 2,
    dept: "Tech",
    designation: "Manager",
    salary: 24000
  },
  {
    name: "Mary Robbins",
    level: 3,
    dept: "Fin",
    designation: "Manager",
    salary: 28000
  },
  {
    name: "Steve Williams",
    level: 4,
    dept: "Ops",
    designation: "President",
    salary: 35000
  },
  {
    name: "Bob Andrews",
    level: 1,
    dept: "Fin",
    designation: "Trainee",
    salary: 16500
  },
  {
    name: "Dave Martin",
    level: 2,
    dept: "Fin",
    designation: "Manager",
    salary: 21700
  },
  {
    name: "Julia Clarke",
    level: 3,
    dept: "Ops",
    designation: "Manager",
    salary: 26900
  },
  {
    name: "Kathy Jones",
    level: 4,
    dept: "Tech",
    designation: "President",
    salary: 42500
  },
  {
    name: "Tom Bresnan",
    level: 2,
    dept: "Tech",
    designation: "Manager",
    salary: 22200
  }
];
export const Question8 = () => {
  return (
    <>
      <ul>
        {employees.map(({ name, level, dept, designation, salary }) => (
          <li>
            name:{name}, level: {level}, dept: {dept}, designation:{designation}
            , salary: {salary}
          </li>
        ))}
      </ul>
    </>
  );
};

export const Question9 = () => {
  //  const {salary }=employees
  // console.log(salary[0])
  const totalSalary = employees.reduce((acc, { salary }) => acc + salary, 0);
  return (
    <ul>
      <h1>total Salary:{totalSalary}</h1>
    </ul>
  );
};

export const Question10 = () => {
  // Considering above data given in question 8, display the details of employee with orange backgroundColor, who are at level 2.
  return (
    <ul>
      <EmployeeDeatilsLevel employee={employees} />
    </ul>
  );
};
export const Question11 = () => {
  // Considering above data given in question 8, display the details of employee with orange backgroundColor, who are at level 2.
  return (
    <ul>
      <EmployeeDeatilsLevel1 employee={employees} />
    </ul>
  );
};
export const Question12 = () => {
  // Given an employee data. List out the employee details on DOM. Then upon click of a button “Highlight Employees”, add a border to the employee details who have more than 5 years of experience.
  const employees1 = [
    { id: "E1", name: "Arpit Jain", workExperience: 6 },
    { id: "E2", name: "Monica Jaiswal", workExperience: 4 },
    { id: "E3", name: "Priya Shetty", workExperience: 9 },
    { id: "E4", name: "Aman Sen", workExperience: 1 }
  ];

  return (
    <ul>
      <HighlightButton employee={employees1} />
    </ul>
  );
};
