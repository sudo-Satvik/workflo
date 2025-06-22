# Create API documentation
_Exported on 6/8/2025 at 20:29:18 GMT+5:30 from Cursor (1.0.0)_

---

**User**

@/src create api docs for me

---

**Cursor**

I'll help you create API documentation for your server. Let me first examine the routes and controllers to understand the available endpoints.

Let me examine each route file to understand the endpoints.

Based on the examination of your routes, I'll create comprehensive API documentation for your Workflo application.

# Workflo API Documentation

## Authentication Endpoints

### Register User
- **URL**: `/api/auth/register`
- **Method**: `POST`
- **Description**: Register a new user
- **Access**: Public
- **Body**:
  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string"
  }
  ```

### Login
- **URL**: `/api/auth/login`
- **Method**: `POST`
- **Description**: Authenticate user and get token
- **Access**: Public
- **Body**:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```

### Get User Profile
- **URL**: `/api/auth/profile`
- **Method**: `GET`
- **Description**: Get current user's profile
- **Access**: Private (requires authentication token)

### Update User Profile
- **URL**: `/api/auth/profile`
- **Method**: `PUT`
- **Description**: Update user profile information
- **Access**: Private
- **Body**:
  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string (optional)"
  }
  ```

### Upload Profile Image
- **URL**: `/api/auth/upload-image`
- **Method**: `POST`
- **Description**: Upload user profile image
- **Access**: Private
- **Body**: Form-data with key "image"

## Task Management Endpoints

### Dashboard Data
- **URL**: `/api/tasks/dashboard-data`
- **Method**: `GET`
- **Description**: Get dashboard statistics and data
- **Access**: Private

### User Dashboard Data
- **URL**: `/api/tasks/user-dashboard-data`
- **Method**: `GET`
- **Description**: Get user-specific dashboard data
- **Access**: Private

### Get All Tasks
- **URL**: `/api/tasks`
- **Method**: `GET`
- **Description**: Get list of all tasks
- **Access**: Private

### Get Task by ID
- **URL**: `/api/tasks/:id`
- **Method**: `GET`
- **Description**: Get detailed information about a specific task
- **Access**: Private

### Create Task
- **URL**: `/api/tasks`
- **Method**: `POST`
- **Description**: Create a new task
- **Access**: Admin only

### Update Task
- **URL**: `/api/tasks/:id`
- **Method**: `PUT`
- **Description**: Update task details
- **Access**: Private

### Delete Task
- **URL**: `/api/tasks/:id`
- **Method**: `DELETE`
- **Description**: Delete a task
- **Access**: Admin only

### Update Task Status
- **URL**: `/api/tasks/:id/status`
- **Method**: `PUT`
- **Description**: Update the status of a task
- **Access**: Private

### Update Task Checklist
- **URL**: `/api/tasks/:id/todo`
- **Method**: `PUT`
- **Description**: Update task checklist items
- **Access**: Private

## User Management Endpoints

### Get All Users
- **URL**: `/api/users`
- **Method**: `GET`
- **Description**: Get list of all users
- **Access**: Admin only

### Get User by ID
- **URL**: `/api/users/:id`
- **Method**: `GET`
- **Description**: Get detailed information about a specific user
- **Access**: Private

## Report Endpoints

### Export Tasks Report
- **URL**: `/api/reports/export/tasks`
- **Method**: `GET`
- **Description**: Export tasks data report
- **Access**: Admin only

### Export Users Report
- **URL**: `/api/reports/export/users`
- **Method**: `GET`
- **Description**: Export users data report
- **Access**: Admin only

## Authentication
Most endpoints require authentication using a JWT token. Include the token in the request header:
```
Authorization: Bearer <your_token>
```

## Response Formats
All endpoints return JSON responses with the following general structure:
- Success Response:
  ```json
  {
    "data": {}, // Response data
    "message": "Success message"
  }
  ```
- Error Response:
  ```json
  {
    "message": "Error message"
  }
  ```

## Access Levels
- **Public**: No authentication required
- **Private**: Requires valid JWT token
- **Admin**: Requires valid JWT token and admin privileges

Would you like me to provide more specific details about any of these endpoints or add additional sections to the documentation?

```json
  {
    "name": "string",
    "email": "string",
    "password": "string"
  }
```

```json
  {
    "email": "string",
    "password": "string"
  }
```

```json
  {
    "name": "string",
    "email": "string",
    "password": "string (optional)"
  }
```

```plaintext
Authorization: Bearer <your_token>
```

```json
  {
    "data": {}, // Response data
    "message": "Success message"
  }
```

```json
  {
    "message": "Error message"
  }
```

