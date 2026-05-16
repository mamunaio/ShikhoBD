# ShikhoBD Backend API Structure

This document outlines the RESTful API architecture for the ShikhoBD platform. All endpoints return JSON and require `Content-Type: application/json`.

## 1. Authentication (`/api/auth`)
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| POST | `/register` | Register a new user (Student/Instructor) | No |
| POST | `/login` | Login and receive JWT/Set Cookie | No |
| GET | `/me` | Get current user profile | Yes |
| PUT | `/profile` | Update profile (Avatar, Bio, Name) | Yes |
| POST | `/logout` | Invalidate session | Yes |

---

## 2. Course Management (`/api/courses`)
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| GET | `/` | List all published courses (Filters: category, price) | No |
| GET | `/:id` | Get public details of a specific course | No |
| GET | `/search` | Search courses by title/instructor | No |
| POST | `/` | Create a new course draft | Yes (Instructor) |
| PUT | `/:id` | Update course details/curriculum | Yes (Instructor) |
| DELETE | `/:id` | Delete/Archive a course | Yes (Admin/Owner) |
| GET | `/:id/reviews`| Get all reviews for a course | No |
| POST | `/:id/reviews`| Submit a course review | Yes (Enrolled) |

---

## 3. Student Learning Flow (`/api/student`)
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| GET | `/my-courses` | Get list of enrolled courses with progress | Yes |
| GET | `/learn/:id` | Get private course content (Lessons/Videos) | Yes (Enrolled) |
| POST | `/progress` | Mark lesson as completed | Yes |
| POST | `/notes` | Save a timestamped note for a lesson | Yes |
| GET | `/notes/:lessonId`| Get all notes for a specific lesson | Yes |
| POST | `/quiz/submit` | Submit quiz answers and get results | Yes |
| GET | `/certificates` | Get earned certificates | Yes |

---

## 4. Payment & Enrollment (`/api/payments`)
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| POST | `/checkout` | Initialize SSLCommerz session | Yes |
| POST | `/callback` | SSLCommerz success/fail handler | No (IPN) |
| GET | `/history` | View personal transaction history | Yes |

---

## 5. Instructor Operations (`/api/instructor`)
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| GET | `/stats` | Get total students, revenue, and ratings | Yes |
| GET | `/revenue` | Get monthly earnings chart data | Yes |
| GET | `/enrollments` | List of recent student enrollments | Yes |
| POST | `/live/schedule`| Schedule a new live class | Yes |

---

## 6. Admin Panel (`/api/admin`)
| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| GET | `/users` | List and manage platform users | Yes (Admin) |
| PUT | `/users/:id/ban`| Suspend a user account | Yes (Admin) |
| GET | `/approvals` | List pending instructor/course requests | Yes (Admin) |
| POST | `/approve/:id` | Approve/Reject a request | Yes (Admin) |
| GET | `/analytics` | System-wide revenue and growth metrics | Yes (Admin) |

---

## 7. Response Formats

### Success Response
```json
{
  "success": true,
  "message": "Operation successful",
  "data": { ... }
}
```

### Error Response
```json
{
  "success": false,
  "error": "UNAUTHORIZED",
  "message": "You must be logged in to access this resource"
}
```

## 8. Security & Headers
- **Authorization**: `Bearer <JWT_TOKEN>` in Authorization header.
- **Rate Limiting**: 100 requests per minute per IP for public routes.
- **CORS**: Restricted to `shikhobd.com` and local development origins.
