export function getFulltimeEmployees(employees) {
    return employees.filter(emp => emp.isFullTime)
}

export function applyRaise(employees) {
    return employees.map(emp => {
        if (emp.yearsAtCompany >= 3) {
            return { ...emp, salary: emp.salary * 1.1 }
        }
        return emp;
    })
}

export function getAverageSalary(employees) {
    const total = employees.reduce((sum, emp) => sum + emp.salary, 0)
    return (total / employees.length).toFixed(2)
}

export function getDepartmentEmployees(employees, department) {
    return employees.filter(emp => emp.department === department)
}

export function getFullTimeReport(employees) {
    const fullTime = getFulltimeEmployees(employees)
    const withRaises = applyRaise(fullTime)
    return {
        count: fullTime.length,
        averageSalary: getAverageSalary(withRaises)
    }
}

// export function getDepartmentReport(employees, department) {

// }