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

Add a new page `app/post-job/page.tsx`:
```typescript
// app/post-job/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PostJob() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Job posted! (Not persisted)");
    router.push("/");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Post a Job</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
        <input
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      <a href="/" className="text-blue-500 hover:underline mt-4 inline-block">
        Back to Listings
      </a>
    </div>
  );
}
```

Add a link to the form in `app/page.tsx`:
```typescript
// Add this above the h1 in app/page.tsx
<Link href="/post-job" className="text-blue-500 hover:underline mb-4 inline-block">
  Post a Job
</Link>
```

---

### Step 4: Feature

```markdown
# Job Listings App

A simple job listings application built with Next.js and TypeScript.

## Features
- View a list of job postings on the home page.
- Click a job to see detailed information.
- Search jobs by title or company.
- Load more jobs with pagination.
- Post a new job (non-persistent).

