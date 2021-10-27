import "./CareerSchoolView.css"

const departments = [{
  id: "ict",
  label: "Information and Communications Technology",
},{
  id: "acm",
  label: "Arts and Culture Management",
},{
  id: "cm",
  label: "Communication Management",
}]

const CareerSchoolView = () => {
  return (
    <div className="CareerSchoolView">
      <h2>Welcome to the University of Denver's University College</h2>
      <nav>
        <ul>
        {departments.map(department => (
          <li key={department.id}>
            <a href="#">{department.label}</a>
          </li>
        ))}
        </ul>
      </nav>
      { /* Departments should render here */ }
    </div>
  )
}

export default CareerSchoolView
