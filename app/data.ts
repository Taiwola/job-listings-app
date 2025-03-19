// data/jobs.ts
export interface Job {
  id: string;
  title: string;
  company: string;
  description: string;
  location: string;
  salary: string;
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "TechCorp",
    description: "Build amazing UIs with React and Next.js.",
    location: "Remote",
    salary: "₦80,000 - ₦120,000",
  },
  {
    id: "2",
    title: "Backend Engineer",
    company: "DataSync",
    description: "Design scalable APIs with Node.js.",
    location: "Nigeria, Lagos",
    salary: "₦90,000 - ₦130,000",
  },
  {
    id: "3",
    title: "Full Stack Developer",
    company: "InnovateX",
    description: "Work on both frontend and backend systems.",
    location: "Nigeria, Lagos",
    salary: "₦100,000 - ₦150,000",
  },
  {
    id: "4",
    title: "Remote UI/UX Designer",
    location: "Remote",
    company: "SPIRALYZE",
    description:
      "We are looking for a talented UI/UX Designer to join our team at SPIRALYZE. The ideal candidate will have a strong background in UI design with bonus UX experience, be an expert in Figma, and have familiarity with HTML, CSS, and responsive frameworks.",
    salary: "₦150,000 - ₦250,000",
  },
  {
    id: "5",
    title: "Vue/Nuxt Developer",
    location: "Remote",
    company: "SPIRALYZE",
    description:
      "We are looking for a skilled Vue/Nuxt Developer to join our team on a part-time basis. The ideal candidate will have experience with Vue3/Nuxt, be able to convert Figma designs into functional client-side applications, and work collaboratively with our Nigerian-based team",
    salary: "₦200,000 - ₦250,000",
  },
  {
    id: "6",
    title: "Full-Stack Developer",
    location: "Lagos (Remote)",
    company: "Elizabeth Maddeux Limited",
    description:
      "Elizabeth Maddeux Limited is seeking a highly skilled Full-Stack Developer to join our team. The ideal candidate will have a strong background in both front-end and back-end development, with experience in modern web technologies, cloud platforms, and Agile methodologies.",
    salary: "₦600,000 - ₦800,000",
  },
  {
    id: "7",
    title: "Content & Social Media Assistant",
    location: "Remote",
    company: "SPIRALYZE",
    description:
      "We are looking for a talented Content & Social Media Assistant to join our team. The ideal candidate will have strong writing skills, social media expertise, and the ability to create engaging content that resonates with our audience.",
    salary: "₦100,000 net per month",
  },
];
