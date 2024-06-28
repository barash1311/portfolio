export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "CYRA Chatbot",
    des: "Developed an AI-powered chatbot using the MERN stack, providing efficient and interactive responses.",
    img: "/cyra.svg",
    iconLists: [
      "/react.svg",
      "/node.svg",
      "/mongo.svg",
      "/express.svg",
      "/ai.svg",
    ],
    link: "https://github.com/barashsharma/cyra-chatbot",
  },
  {
    id: 2,
    title: "Power Systems App",
    des: "Cross-platform app for IIT Jammu's power systems, displaying comprehensive data and insights.",
    img: "/powerapp.svg",
    iconLists: [
      "/reactnative.svg",
      "/expo.svg",
      "/chart.svg",
      "/mongodb.svg",
      "/express.svg",
    ],
    link: "https://github.com/barashsharma/power-systems-app",
  },
  {
    id: 3,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin?tab=repositories",
  },
  {
    id: 4,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/zoom-clone",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Barash was a fantastic experience. His expertise in full-stack development and dedication to the project were outstanding. Barash's innovative approach and enthusiasm made a significant impact on our project. Highly recommended for any tech development needs.",
    name: "Ayush Sharma",
    title: "Project Mentor at IIT Jammu",
  },
  {
    quote:
      "Barash is a highly skilled developer with a keen eye for detail. His contributions to our power systems app were invaluable. His ability to integrate various technologies seamlessly was impressive. A true asset to any development team.",
    name: "Preetam Jamod",
    title: "Senior Developer at IIT Jammu",
  },
  {
    quote:
      "Barash's work on the CYRA chatbot was exceptional. His knowledge in AI and the MERN stack brought our project to life. His problem-solving skills and proactive attitude ensured the success of our project.",
    name: "Project Team",
    title: "IIT Jammu",
  },
  {
    quote:
      "Barash's professionalism and dedication stood out during his internship. His work on both the app and web development projects was top-notch. He consistently delivered high-quality results and was a pleasure to work with.",
    name: "Mentor Team",
    title: "IIT Jammu",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Intern - App and Web Developer",
    desc: "Worked at IIT Jammu under Mr. Ayush Sharma on projects like CYRA chatbot and Power Systems App, utilizing technologies like React Native, Express.js, and MongoDB.",
    className: "md:col-span-2",
    thumbnail: "/iitjammu.svg",
  },
  {
    id: 2,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile apps for both iOS & Android platforms using React Native.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 4,
    title: "Freelance App Dev Project",
    desc: "Led the development of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 5,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
