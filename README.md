Todo List App
This is a Todo List application built with Next.js using create-next-app. This app allows users to manage tasks, mark them as complete, and filter through them.

Features
Task Management: Add, edit, and delete tasks.
Task Prioritization: Set priorities (High, Medium, Low) for tasks.
Search Functionality: Filter tasks based on titles and descriptions.
Task Details: View detailed information about each task.
Responsive Design: The application is designed to work seamlessly on different screen sizes.
Getting Started
First, run the development server:

bash
Copy code
npm run dev

# or

yarn dev

# or

pnpm dev

# or

bun dev
Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.

This project uses next/font to automatically optimize and load Geist, a new font family for Vercel.

JSON Data Structure
The application uses a JSON file to manage initial tasks. Here is the structure of the initialtask.json file:

json
Copy code
{
"TaskList": [
{
"title": "Code Review for Project X",
"description": "Review the latest pull requests and provide feedback to ensure code quality and adherence to standards.",
"priority": "High"
},
{
"title": "Update Product Documentation",
"description": "Revise the user manual and API documentation to reflect recent feature changes and improvements.",
"priority": "Medium"
},
{
"title": "Schedule Team Stand-Up Meeting",
"description": "Organize a weekly stand-up to discuss project progress, address blockers, and align on goals for the upcoming week.",
"priority": "Low"
}
]
}
Learn More
To learn more about Next.js, take a look at the following resources:

Next.js Documentation - Learn about Next.js features and API.
Learn Next.js - An interactive Next.js tutorial.
You can check out the Next.js GitHub repository - your feedback and contributions are welcome!

Note- Initial Tasks can't be deleted or edited if tried to edit, it will create a new task. It will be fixed in future version

Deploy on Vercel
The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out our Next.js deployment documentation for more details.
