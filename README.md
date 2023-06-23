## About The Project

This is a full-stack application which matches Applicants with Companies based on their culture type.

## Built With

This app was build with NextJS, ReactJS, NodeJS, PostgreSQL, SCSS, Prisma

## Getting Started for developers

1. Clone the repo
   - git clone https://github.com/svetoslavpachev/culture-matcher.git
2. Install NPM packages
   - npm install
3. Create .env file in the root directory of the app and put the DATABASE_URL shared with you.
   - DATABASE_URL="THE URL SHARED WITH YOU"
4. Run the development server
   - npm run dev
- or
  - yarn dev
  - Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
 
* Front-end

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

The front-end has been created with React reusable components. They can be found in the components folder in src/components. The \_app.js file in src/pages/\_app.js is the main wrapper around the whole front-end.

* Back-end

The back-end has been done with NodeJS using the src/pages/api directory to create API end-points for serverless functions. HTTP request are done with fetch from the front-end. In src/pages/companies/index.js and src/pages/applicants/index.js the data fetching is done by performing getServerSideProps function, so server side rendering is performed and the data is sent to the component via props.

* Data base

The data model for the app is located in prisma/schema.prisma. The app is connected to a cloud data base (PostgreSQL) and I am using Prisma to comunicate with the data base for simplicity and performance.

When updating the schema you need to go and update the models in the schema.prisma file. Once the models are updated you need to run [ npx prisma migrate ] to create a migration file with you changes and a timestamp.  

For more info follow the [`Pirsma documentation`](https://www.prisma.io/docs/concepts/components/prisma-migrate).

## Usage

As a user I can create culture types

As a user I can see all culture types

As a user I can create companies

As a user I can create applicants

As a user I can see the list of companies

As a user I can search for company

As a user I can see the list of applicants

As a user I can search for applicants

As an applicant I can submit culture test

As a company I can submit culture test

It computes the culture test result when the test is completed

It updates the company culture type once the culture test is completed and the result is calculated

It updates the applicant culture type once the culture test is complete and the result is calculated

As an applicant, I can visualise my matches

As a company, I can visualise my matches

## Things I am proud of

Designed and styled by myself without using any libraries

## Future improvements

1. Add authentication / separate routes for admins/applicants/companies
2. Make the data base relational using partition keys
3. Re-model the data structure

## Contact

[`My GitHub`](https://www.github.com/svetoslavpachev)

[`LinkedIn`](https://www.linkedin.com/in/svetoslav-pachev-886a73a8/)
