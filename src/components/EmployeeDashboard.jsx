import {
  getDepartmentReport,
  getFulltimeEmployees,
} from "../lib/employeeUtils";

function StatCard({ title, count, salary }) {
  return (
    <div className="col-md-4">
      <div className="">
        <p>{title}</p>
        <h2 className="">{count} employees</h2>
        <p className="fs-5 text-success">${salary} ang salary</p>
      </div>
    </div>
  );
}

export default function EmployeeDashboard() {
  const fullTimeEmployee = getFulltimeEmployees(employees);

  const engineeringReport = getDepartmentReport(
    EmployeeDashboard,
    "Engineering",
  );

  const marketingReport = getDepartmentReport(EmployeeDashboard, "Marketing");

  return <></>;
}
