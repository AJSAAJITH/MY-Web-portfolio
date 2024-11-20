import project1 from "../assets/projects/project1ECOM.png";
import project2 from "../assets/projects/project_Chat_app.png";
import project3 from "../assets/projects/project_Advance_MERN.png";
import project4 from "../assets/projects/project4_React_porfolio.png";
import project5 from "../assets/projects/project5.png";


export const HERO_CONTENT = `As a passionate Full-Stack MERN Developer, I focus on crafting robust and scalable web applications using cutting-edge technologies like React.js, Node.js, JavaScript, Redux, Next.js, MongoDB, MySQL, and Firebase. I am dedicated to delivering seamless user experiences by combining dynamic front-end frameworks such as Tailwind CSS and Bootstrap with interactive animations through tools like React Motion. With a strong emphasis on efficient user authentication, authorization, and system performance, I aim to create intuitive, high-quality solutions that meet the unique needs of each project.`;

export const ABOUT_TEXT = `I am a dedicated Full-Stack MERN Developer with expertise in building scalable, high-performance web applications using technologies such as React.js, Node.js, JavaScript, Redux, Next.js, MongoDB, MySQL, and Firebase. I specialize in creating dynamic, user-friendly solutions, leveraging modern front-end frameworks like Tailwind CSS, Bootstrap, and React animation libraries like React Motion to deliver responsive, visually engaging designs. My focus lies in implementing seamless user authentication, authorization, and robust functionality, ensuring efficient and innovative solutions tailored to meet diverse project needs.`;

// export const EXPERIENCES = [
//   {
//     year: "2023 - Present",
//     role: "Senior Full Stack Developer",
//     company: "Google Inc.",
//     description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
//     technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
//   },
//   {
//     year: "2022 - 2023",
//     role: "Frontend Developer",
//     company: "Adobe",
//     description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
//     technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
//   },
//   {
//     year: "2021 - 2022",
//     role: "Full Stack Developer",
//     company: "Facebook",
//     description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
//     technologies: ["Python", "Svelte", "Three.js", "Postgres"],
//   },
//   {
//     year: "2020 - 2021",
//     role: "Software Engineer",
//     company: "Paypal",
//     description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
//     technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
//   },
// ];

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Self-Employed (Full-Stack Developer)",
    company: "MERN & Next.js Development",
    description: `Developing and maintaining web applications using the MERN stack and Next.js for both personal projects and freelance clients. Focusing on building dynamic, responsive applications with advanced features such as user authentication and database integration.`,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Next.js", "JavaScript"],
  },
  {
    year: "2022 - 2023",
    role: "Self-Employed (React Native Developer)",
    company: "React Native Workshop",
    description: `Developed mobile applications using React Native for various projects, focusing on building cross-platform solutions. Worked on end-to-end mobile app development, integrating APIs, and optimizing app performance.`,
    technologies: ["React Native", "Expo", "Firebase", "JavaScript"],
  },
  {
    year: "2021 - 2024",
    role: "Student",
    company: "IIC University of Cambodia",
    description: `Pursuing a Bachelor's degree in Software Engineering while gaining practical knowledge in Full-Stack development, including MERN stack and Next.js. Engaged in various academic projects, enhancing skills in web application development, databases, and software design principles.`,
    technologies: ["React.js", "Node.js", "MongoDB", "Next.js", "JavaScript"],
  },
];



// export const PROJECTS = [
//   {
//     title: "E-Commerce Website",
//     image: project1,
//     description: `
//       Developed a full-fledged e-commerce platform using the MERN stack.
//       Integrated payment gateways and implemented secure JWT-based user authentication and authorization.
//       Built reusable React components and optimized performance for an enhanced user experience.

//     `,
//     giturl: "https://github.com/AJSAAJITH/ECom",
//     technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
//   }, ,
//   {
//     title: "Chat Application",
//     image: project2,
//     description:
//       "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
//     technologies: ["HTML", "CSS", "Angular", "Firebase"],
//   },
//   {
//     title: "Portfolio Website",
//     image: project3,
//     description:
//       "A personal portfolio website showcasing projects, skills, and contact information.",
//     technologies: ["HTML", "CSS", "React", "Bootstrap"],
//   },
//   {
//     title: "Blogging Platform",
//     image: project4,
//     description:
//       "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
//     technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
//   },
// ];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description: `
      Developed a full-fledged e-commerce platform using the MERN stack.
      Integrated payment gateways and implemented secure JWT-based user authentication and authorization.
      Built reusable React components and optimized performance for an enhanced user experience.
      
    `,
    giturl: "https://github.com/AJSAAJITH/ECom",
    privew_url: "http://13.60.240.164/",
    technologies: ["Node.js", "EXpress.js", "React", "Taildwind", "MongoDB"],
  },

  {
    title: "Real-Time Chat Application",
    image: project2,
    description: `Developed a feature-rich real-time chat application to enable seamless user
     communication. Implemented secure login and registration using JWT and bcrypt. Integrated
      Socket.IO for real-time messaging. Designed a responsive and dynamic UI with React and Tailwind CSS.
       Utilized Zustand for scalable state management and added real-time toast notifications for user feedback.
      Configured environment variables to ensure secure and scalable deployment.
`,

    giturl: "https://github.com/AJSAAJITH/Chat-App",
    privew_url: "https://chat-app-v50j.onrender.com/",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Vite",

    ],
  },

  {
    title: "User Authentication & Authorization System",
    image: project3,
    description: `
      Designed a secure authentication and authorization system using JWT for user validation and role-based access control. 
      Built a responsive and dynamic user interface with Tailwind CSS and implemented the frontend using Vite and React for optimal performance. 
      Developed a scalable backend with Node.js and MongoDB, ensuring robust data management and security.
    `,
    giturl: "https://github.com/AJSAAJITH/mern-advance-auth",
    privew_url: "https://mern-advance-auth-i1ur.onrender.com",
    technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "MongoDB"],
  },

  {
    title: "React Portfolio Website",
    image: project4,
    description: `
    Developed a responsive personal portfolio website using React to showcase professional
    projects and skills. The site features a clean, minimalistic design styled with Tailwind CSS,
    incorporating React Icons for modern visuals. Built with a focus on performance and accessibility,
    the modular structure ensures scalability and easy updates.
    `,
    giturl: "https://github.com/AJSAAJITH/React_portfolio_Website",
    privew_url: "#",
    technologies: ["React", "Tailwind CSS", "HTML", "CSS"],
  },

  {
    title: "Blog Website with NEXT.js",
    image: project5,
    description: `
     This project is a simple blog website built with Next.js,
      utilizing React for the frontend and Tailwind CSS for styling.
      It includes Mongoose for database interactions and TypeScript
      for type safety, ensuring scalability and maintainability. 
      The project also integrates ESLint for linting and adheres 
      to best practices using the Next.js configuration. Scripts
      for development, building, and production are defined to streamline the workflow.
    the modular structure ensures scalability and easy updates.
    `,

    giturl: "https://github.com/AJSAAJITH/NEXT-Blog-Project",
    privew_url: "#",
    technologies: ["NEXT.js", "Tailwind CSS", "mongodb", "CSS"],
  },

];

export const CONTACT = {
  address: "450/2 Ulahitiwala Malwana ",
  phoneNo: "+94 7574 25593 ",
  email: "ajsajith99@gmail.com",
};
