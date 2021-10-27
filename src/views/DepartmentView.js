import { useState, useEffect } from "react"
import "./DepartmentView.css"

const DepartmentView = () => {
  const departmentName = "" // TODO: Get the `departmentName` from the URL
  const [greeting, setGreeting] = useState("Loading...")

  useEffect(() => {
    fetch("/university-college.json")
      .then(response => response.json())
      .then(({ departments }) => {
        const department = departments[departmentName]
        setGreeting(department.greeting)
      })
  }, [departmentName])

  return (
    <p>{ greeting }</p>
  )
}

export default DepartmentView
