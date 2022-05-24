// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Taehyung",
  middleName: "",
  lastName: "Kim",
  message: " AI / ML Developer | Learning is my hobby! ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/k151202",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/eatmik_",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profile.jpeg"),
  imageSize: 300,
  message:
    "Hello. My name is Taehyung! I'm a newbie developer who just got transitioned after various industry experiences. I like to commnunicate with people and share thoughts about technology. Currently, I'm on a bootcamp at Choongang Computer Institute where I learn AI / ML full-stack development.",
  resume: "#blank",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "k151202", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: [
    "FaceID-pytorch",
    "BERT_sandwich_order",
    "FindRemoteJobs",
    "airbnb-clone",
    "weather-2021",
    "kokoa-clone",
  ],
};

// Leadership SECTION
const leadership = {
  // show: false,
  // heading: "Leadership",
  // message:
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  // images: [
  //   {
  //     img: require("../editable-stuff/profile.jpeg"),
  //     label: "First slide label",
  //     paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  //   },
  //   {
  //     img: require("../editable-stuff/profile.jpeg"),
  //     label: "Second slide label",
  //     paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
  //   },
  // ],
  // imageSize: {
  //   width: "615",
  //   height: "450",
  // },
};

// SKILLS SECTION
const stats = {
  show: true,
  heading: "Skills",
};

// STATS SECTION
const skills = {
  show: true,
  heading: "Stats",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 65 },
    { name: "Data Structures", value: 85 },
    { name: "Django", value: 65 },
    { name: "JavaScript", value: 80 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 75 },
    { name: "Go", value: 60 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time AI / ML opportunities. Please feel free to contact me at",
  email: "k151202@naver.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: "AI / NLP Junior Developer",
      location: "SunnyMind Inc.",
      date: "November 2021 ~ Current",
      description: "I'm working as NLP developer in SunnyMind Inc. I'm building a microservice which analyzes e-commerce reviews written in Korean and English.",
    },
    {
      role: "AI / ML bootcamp",
      location: "Choongang Computer Institute",
      date: "April 2021 ~ October 2021",
      description: "Studying AI / ML development",
    },
    {
      role: "Real estate Developer",
      location: "Loowon Real Estate Development Company",
      date: "May 2020 ~ November 2020",
      description:
        "I worked as a real estate developer in Ulsan. My main job was analyzing location, balance, and demand forecasting.",
    },
    {
      role: "Founder",
      location: "Studio MF",
      date: "2017 ~ 2020",
      description:
        "I founded a video production company in 2017 to focus more on video business. Main work was producing commercial video for companies.",
    },
    {
      role: "Founder",
      location: "Mium Entertainment",
      date: "2014 ~ 2017",
      description:
        "I co-founded a company with my alumni. The company was mainly for music industry; recordings, event planning and music videos",
    },
    {
      role: "Getting Degrees",
      location: "Seoul National University of Science and Technology",
      date: "March 2008 ~ August 2015",
      description:
        "I got a degree in Industrial Engineering at Seoul Tech in Seoul, Korea. As I attended dual degree program, I also got degree in Manufacturing System and Design Engineering at Northumbria University in New Castle, UK. ",
    },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  stats,
  // leadership,
  getInTouch,
  experiences,
};
