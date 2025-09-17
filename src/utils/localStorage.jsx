 
const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Report",
        "taskDescription": "Prepare the monthly sales report.",
        "taskDate": "2025-09-20",
        "category": "Reporting"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Client Meeting",
        "taskDescription": "Attend the meeting with client X.",
        "taskDate": "2025-09-15",
        "category": "Meetings"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Code Review",
        "taskDescription": "Review code for project Y.",
        "taskDate": "2025-09-12",
        "category": "Development"
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Database Backup",
        "taskDescription": "Perform weekly database backup.",
        "taskDate": "2025-09-18",
        "category": "Maintenance"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Bug Fix",
        "taskDescription": "Fix login bug on the website.",
        "taskDate": "2025-09-14",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "UI Update",
        "taskDescription": "Redesign the homepage banner.",
        "taskDate": "2025-09-10",
        "category": "Design"
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Presentation",
        "taskDescription": "Make presentation for next week’s client pitch.",
        "taskDate": "2025-09-22",
        "category": "Presentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Email Campaign",
        "taskDescription": "Launch September email campaign.",
        "taskDate": "2025-09-13",
        "category": "Marketing"
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Inventory Check",
        "taskDescription": "Check stock levels for warehouse A.",
        "taskDate": "2025-09-19",
        "category": "Inventory"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Team Training",
        "taskDescription": "Conduct training on new software.",
        "taskDate": "2025-09-11",
        "category": "Training"
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Social Media Update",
        "taskDescription": "Post updates on LinkedIn and Twitter.",
        "taskDate": "2025-09-17",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "App Deployment",
        "taskDescription": "Deploy the latest version of mobile app.",
        "taskDate": "2025-09-09",
        "category": "Deployment"
      }
    ]
  }
];



  const admin= [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
  ]

export const setLocalStorage = () =>{
   localStorage.setItem('employees',JSON.stringify(employees))
   localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () =>{
    const employees= JSON.parse(localStorage.getItem('employees'))
    const admin= JSON.parse(localStorage.getItem('admin'))
    console.log(employees,  admin)
    
    
    
}



