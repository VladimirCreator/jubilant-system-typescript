# Library CRUD Application Challenge

## Objective
Build a CRUD (Create, Read, Update, Delete) application for managing a library of books.

[Starter NestJS App](https:/github.com/dev-altermeliora/library-crud-challenge-starter.git)

## Base Requirements (Backend)
- Backend (Nest.js + TypeScript + Sequelize + Postgres)
    - PostgreSQL database with a books table (fields: id, title, author, year_of_publication).
    - API Endpoints: Fetch all books, add a book, update a book, delete a book.
    - Sequelize for database interactions.
    - Proper error handling.

### 1. Developer - DevOps Version
- Deploy on GCP.
    - Containerization: Dockerize the Nest.js backend.
    - GCP Deployment: Deploy app on GKE or App Engine and PostgreSQL on Cloud SQL.
<!--   - Secret Management: Use GCP's Secret Manager for application secrets. -->

### 2. Developer - Mobile Developer Version
- Develop a mobile application (iOS (Swift UI) or Android) connected to the library application's APIs.
    - Mobile UI: List, add, edit, and delete books.
    - API Communication: Connect to the Nest.js API.
    - Error Handling: Handle API errors, network issues.

<!-- ### 3. Developer - Fullstack Version
- Create a fronted for the library CRUD application using Next.js.
    - Frontend UI: Use Next.js + TypeScript for listing, adding, editing, and deleting books.
    - Styles: Choose a styling solution (e.g., jss, styled-components, CSS modules).
    - State Management: Use a solution like MobX, Redux. -->
