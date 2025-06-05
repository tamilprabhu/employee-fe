
export interface Employee {
  id: number;
  name: string;
  email: string;
  position: string;
  department: string;
}

export interface EmployeeAddress {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  position: string;
  department: string;
}

export interface EmployeeSkills {
  id: number;
  name: string;
  email: string;
  position: string;
  skills: string[];
  experience: number;
  department: string;
}

export const employees: Employee[] = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    position: "Software Engineer",
    department: "Engineering"
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    position: "Product Manager",
    department: "Product"
  },
  {
    id: 3,
    name: "Carol White",
    email: "carol.white@example.com",
    position: "UI/UX Designer",
    department: "Design"
  }
];

export const employeeAddress: EmployeeAddress[] = [
  {
    "id": 4,
    "name": "David Kim",
    "email": "david.kim@example.com",
    "phone": "+1-555-123-4567",
    "address": {
      "street": "123 Main St",
      "city": "New York",
      "state": "NY",
      "zip": "10001"
    },
    "position": "HR Manager",
    "department": "Human Resources"
  }
];

export const employeeSkills: EmployeeSkills[] = [
  {
    "id": 5,
    "name": "Emma Williams",
    "email": "emma.williams@example.com",
    "position": "DevOps Engineer",
    "skills": ["AWS", "Docker", "Kubernetes", "CI/CD"],
    "experience": 5,
    "department": "Operations"
  }
]

export interface EmployeeInitial {
  id: number;
  name: string;
  email: string;
  phone: string;
  position: string;
  department: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  skills: string[];
  experience: number;
}

export const employeeData: EmployeeInitial[] = [{
  "id": 0,
  "name": "",
  "email": "",
  "phone": "",
  "position": "",
  "department": "",
  "address": {
    "street": "",
    "city": "",
    "state": "",
    "zip": ""
  },
  "skills": [],
  "experience": 0
}]