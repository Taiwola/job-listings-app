### Step 1: Project Setup
## Prerequisites
- Node.js (v16 or higher)
- npm

## Setup
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd job-listings-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:3000`.




### Step 2: Core Implementation

#### Folder Structure
```
job-listings-app/
├── app/
│   ├── layout.tsx
│   ├── page.tsx             // Home page (/)
│   ├── job/
│   │   └── [id]/
│   │       ├── page.tsx     // Job detail page (/job/[id])
│   │       └── components/
│   │           └── Job.tsx  // Job details component
│   ├── data.ts              // Mock job data 
├── components/
│   ├── CreateJobPopOver.tsx // Popover form for creating jobs
│   ├── Header.tsx           // Header with navigation and create job button
│   ├── JobCard.tsx          // Reusable job card component
│   ├── Jobs.tsx             // Job listings component
├── public/
├── README.md
└── package.json
```

---

### Step 3: Feature

```markdown
# Job Listings App

A simple job listings application built with Next.js and TypeScript.

## Features
- View a list of job postings on the home page.
- Click a job to see detailed information.
- Search jobs by title or company.
- Load more jobs with pagination.
- Post a new job (non-persistent).

