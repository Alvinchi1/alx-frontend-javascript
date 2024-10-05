export default function createReportObject(employeesList) {
	return {
		allEmployees: {
			...employeesList,
		},
		getNumberOfDepartments: (employeesList) => Object.Keys(employeesList).length,
	};
}
