# Skillbase - Skill Tracking Platform

A full-stack skill tracking platform built with React, TypeScript, and FastAPI.

## Features

- **Profile Management**: Track your professional profile with skills, projects, and work experience
- **Skill Tracking**: Organize skills by category with levels, certifications, and experience
- **Project Portfolio**: Showcase your projects with descriptions and details
- **Work History**: Track your employment history and workstations
- **Settings**: Configure notifications, appearance, and account preferences

## Tech Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React, React Icons
- **Routing**: React Router

### Backend
- **Framework**: FastAPI (Python)
- **Type**: Python 3.11+

### Deployment
- **Platform**: Vercel (configured)

## Project Structure

```
Skillbase/
├── client/                 # Frontend application
│   ├── src/
│   │   ├── assets/
│   │   │   ├── data/       # Sample data files
│   │   │   └── types/      # TypeScript interfaces
│   │   ├── elements/       # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── App.tsx         # Main app router
│   │   └── main.tsx        # Entry point
│   ├── index.html
│   ├── package.json
│   └── vite.config.ts
├── server/                 # Backend API
│   └── main.py            # FastAPI application
├── package.json           # Root dependencies
├── vercel.json           # Vercel configuration
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 20+
- Python 3.11+
- pnpm or npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Skillbase
   ```

2. Install frontend dependencies:
   ```bash
   cd client
   pnpm install
   cd ..
   ```

3. Install backend dependencies:
   ```bash
   cd server
   pip install -r requirements.txt
   cd ..
   ```

### Running the Application

**Development Mode:**

- Start the frontend:
  ```bash
  cd client
  pnpm dev
  ```

- Start the backend:
  ```bash
  cd server
  uvicorn main:app --reload
  ```

The frontend will be available at `http://localhost:5173` and the API at `http://localhost:8000`.

## Data Model

### Skill
- `id`: Unique identifier
- `title`: Skill name
- `level`: Proficiency level (1-5)
- `zertifikat`: Certification name
- `description`: Skill description
- `category`: Category (Backend, Frontend, DevOps, Database, Cloud, Design, Mobile, Fullstack)
- `lastUsed`: Date of last use
- `yearsExperience`: Years of experience
- `isVerified`: Verification status
- `tags`: Related tags
- `iconUrl`: Icon image URL

### Profile
- `id`: Unique identifier
- `card`: Profile card information (job title, hobby, location)
- `skills`: Array of skills
- `projects`: Array of projects
- `workStations`: Array of work history entries
- `user`: User information
- `profilePicture`: Profile picture URL

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

MIT License - see [LICENSE](LICENSE) file for details.
