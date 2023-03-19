# Project Management App with Next.js, Prisma, and PostgreSQL
This is a full-stack project management application built with Next.js, Prisma, PostgreSQL, and TypeScript. The app allows users to create projects, assign tasks to team members, and track progress.

## Features
- User authentication and authorization
- Project creation and management
- Task creation and assignment
- Real-time progress tracking
- Project status updates
- User profile management


## Technologies
- Next.js: for server-side rendering and client-side routing
- Prisma: for database management
- PostgreSQL: for data storage
- TypeScript: for type checking
- Tailwind CSS: for styling

### TODO
- Types for typescript (cover all types)
- build and deploy

## Getting Started
To get started with the project, follow these steps:

- Clone the repository: git clone https://github.com/your-username/project-management-app.git
- Install dependencies: npm install
- Create a .env file in the root directory of the project with the following environment variables:
makefile
- DATABASE_URL="postgresql://user:password@localhost:5432/project_management_app"
- JWT_SECRET=secret
- COOKIE_NAME=cooker
- Start the development server: npm run dev
- Open http://localhost:3000 in your web browser


## Deployment
To deploy the app to the world, you can use a service like Heroku. Follow these steps:

- Create a new Heroku app: heroku create
- Provision a PostgreSQL database: heroku addons:create heroku-postgresql:hobby-dev
- Set environment variables: heroku config:set DATABASE_URL="your-postgres-database-url" - SESSION_SECRET="your-secret-session-key"
- Deploy the app: git push heroku main
- Open the app in your web browser: heroku open


## Contributing
Contributions are welcome! To contribute to the project, follow these steps:

- Fork the repository: git clone https://github.com/your-username/project-management-app.git
- Create a new branch for your feature: git checkout -b my-feature
- Make your changes and commit them: git commit -m "Added a new feature"
- Push your changes to your fork: git push origin my-feature
- Open a pull request on the original repository

## License
- This project is licensed under the MIT License. See the LICENSE.md file for details.