![GitHub Header Image](./art/github-header-image.png)

# Node.js API Template

[![Lint](https://github.com/mdmourao/nodejs-api-template/actions/workflows/lint.yml/badge.svg)](https://github.com/mdmourao/nodejs-api-template/actions/workflows/lint.yml)

A robust and scalable Node.js API template built with Express.js, designed to serve as a foundational boilerplate for developing production-ready backend applications.

This template emphasizes clear architectural separation, best practices, and includes essential middleware for security, rate limiting, and error handling.

This repository powers a sample Personal Finance Tracker API as a concrete example of its implementation.

# Features

- Clean Architecture: Structured with a distinct Controller-Service-Repository pattern for modularity and maintainability.

- Express.js: Fast, unopinionated, minimalist web framework for Node.js.

- Database Integration:

  - Knex.js: SQL query builder for flexible database interactions (PostgreSQL by default).

  - PostgreSQL: Robust relational database.

  - Migrations: Managed database schema evolution with Knex.js migrations.

* Validation: Joi for schema validation of request payloads.

## Architecture

### Controller Layer

Handles incoming HTTP requests and crafts outgoing responses.
Performs request validation.
Translates request data into DTOs (Data Transfer Objects).
Delegates business logic execution to the Service Layer.

### Service Layer

Encapsulates the core business logic and rules.
Orchestrates operations across multiple repositories if needed.
Performs additional validation or transformations relevant to business rules.

### Repository Layer

Provides a clear abstraction for data access operations.
Interacts directly with the database.
Focuses solely on CRUD (Create, Read, Update, Delete) operations and data retrieval.

# Technologies

1. Node.js
2. Express.js
3. Knex.js
4. PostgreSQL
5. Bcrypt
6. Dotenv
7. Helmet.js
8. Express Rate Limit
9. Joi
10. ESLint
