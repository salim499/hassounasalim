/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Salim Hassouna",
  title: "Hi all, I'm Salim",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 A versatile, analytical, and determined Fullstack Developer with a hands-on approach focused on 'getting things done.' Passionate about creating robust and efficient solutions, I always strive to achieve the best results. Curious and collaborative, I am ready to work with anyone to tackle challenges and achieve ambitious goals."
  ),
  resumeLink: "/CV_SALIM_HASSOUNA.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/salim499",
  linkedin: "https://www.linkedin.com/in/salim-hassouna-609864178/",
  gmail: "hassounasalim842@gmail.com",
  /*gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",*/
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡Interactive UI Development : Build highly engaging and responsive user interfaces using HTML, CSS, and JavaScript"
    ),
    emoji(
      "⚡Interactivity & Dynamics : Use frameworks (React, Vue, Angular) and integrate APIs to display dynamic data"
    ),
    emoji(
      "⚡Optimization & Quality : Ensure performance, cross-browser compatibility, and write tests (Jest, Cypress…)"
    ),
    emoji(
      "⚡State Management & Reusability : Implement efficient state management (Redux, Vuex) and create reusable components for scalable applications"
    ),
    emoji(
      "⚡Testing & Debugging : Write unit and end-to-end tests (Jest, Cypress) and debug efficiently using modern developer tools"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: `JavaScript/TypeScript`,
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJs/NextJs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "VueJs/NuxtJs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "PARIS 8 University",
      logo: require("./assets/images/paris8Logo.png"),
      subHeader: "Master's in Computer Science, Hypermedia Technologies course",
      duration: "September 2019 - September 2021",
      location: "Paris - France",
      desc: `Forme des professionnels aptes à mener des travaux pluridisciplinaires dans le domaine des médias interactifs numériques : 
      écriture et spécifi cation d’applications hypermédia, interaction homme/machine et interfaces multimodales, architectures des 
      systèmes hypermédias collaboratifs, traitement et synthèse de l’image, du son et des technologies de l’Internet.`,
      descBullets: []
    },
    {
      schoolName: "UMMTO University",
      logo: require("./assets/images/ummtoLogo.png"),
      subHeader:
        "Master's in Computer Science, Information Systems Engineering",
      duration: "September 2014 - September 2019",
      location: "TiziOuzou - Algeria",
      desc: `Acquérir les bases des techniques permettant une compréhension en profondeur des méthodes et des normes qualité applicables au 
      logiciel afin que les systèmes informatiques respectent les termes du contrat de service auprès des utilisateurs.`,
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    },
    {
      Stack: "DevOps",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full-Stack Developer",
      company: "Decofinder",
      companylogo: require("./assets/images/decofinderLogo.png"),
      date: "Jan 2022 – Jan 2025",
      desc: `The project aimed to maintain the company's internal IT system, including modernizing the website, creating a secure admin 
      panel, and developing a customized CRM to optimize customer management.`,
      descBullets: [
        `Development of responsive user interfaces with React and Next.js`,
        `Creation of REST APIs and integration with databases`,
        `Configuration and customization of the Strapi CMS for backend needs`,
        `Setting up automated tests with Jest and Cypress to ensure code quality and feature stability`
      ]
    },
    {
      role: "Front-End Developer",
      company: "Scalnyx",
      companylogo: require("./assets/images/scalnyxLogo.png"),
      date: "Oct 2020 – Oct 2021",
      desc: `Development of a SaaS platform for investors and Asset Managers to create investment models using both financial criteria 
      (e.g., stock price) and non-financial criteria (e.g., ESG factors).`,
      descBullets: [
        `Refactoring existing code and adding new features as needed`,
        `Replacing Matplotlib visualizations with JavaScript alternatives (Vis.js, D3.js, Chart.js)`,
        `Implementing dynamic and interactive visualizations through the browser`,
        `Optimizing and managing state with React hooks and Redux`
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "ENIEM",
      companylogo: require("./assets/images/eniemLogo.png"),
      date: "Jan 2019 – Jul 2019",
      desc: `Comprehensive analysis and thorough audit of the existing information system to identify key areas for improvement and 
      streamline and optimize critical business processes.`,
      descBullets: [
        `Collaboration with internal teams for the redesign and optimization of data flows and user interfaces`,
        `Development of new frontend features in React, and improvement of the user experience`,
        `Presentation of technical and strategic 
         recommendations to improve the ergonomics and efficiency of the tools used by the company`
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/lageneraledudemenagementLogo.png.webp"),
      projectName: "La generale du déménagement",
      projectDesc:
        "Website for a company specializing in moving services for individuals and businesses",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://lageneraledudemenagement.fr/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/weightwiseLogo.png"),
      projectName: "WeightWise",
      projectDesc:
        "Application for users to record their workouts, including details such as exercise type, duration, and intensity",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://weightwise-front.vercel.app"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "TESTDOME REACT CERTEFICATE",
      subtitle: "RANKING IN THE TOP 10%.",
      image: require("./assets/images/certificatreactLogo.png"),
      imageAlt: "testdome Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.testdome.com/certificates/cf59b50bdf6e4f2cb3733693fdfd3aa2"
        }
      ]
    },
    {
      title: "CLASSIFICATION CERTIFICATE",
      image: require("./assets/images/attestationclassementLogo.png"),
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "",
  number: "+33-764234294",
  email_address: "hassounasalim842@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
