/**
 * ============================================================
 *  PERSONAL DATA — EDIT EVERYTHING ABOUT YOURSELF HERE
 * ============================================================
 *  This is the single source of truth for the entire site.
 *  Change your name, links, favorites, and text in this file
 *  and it updates everywhere automatically. You should not
 *  need to touch component code just to change your info.
 * ============================================================
 */

const personalData = {
  // ---------- IDENTITY ----------
  name: "Nikhil Devaraj",
  nickname: "Nikke",
  age: 21,
  location: "Bengaluru, India",
  education: "Bachelor of Computer Applications (BCA)",
  siteTitle: "Nikhil's Garage",
  tagline: "Welcome to my world — built around speed, passion and memories.",

  // ---------- ABOUT ----------
  aboutText: [
    "My name is Nikhil Devaraj, but people can call me Nikke. I'm 21 and from Bengaluru, India.",
    "I completed my Bachelor of Computer Applications.",
    "Since childhood, I have been fascinated by anything with wheels, speed and machines.",
    "My interest started with Hot Wheels, RC cars and RC trucks. Over time, that curiosity grew into a passion for racing, F1 and motorsports.",
  ],

  // CHANGE YOUR PROFILE PHOTOS HERE — drop files into /public/images/
  profileImages: [
    "/images/profile-1.jpg",
    "/images/profile-2.jpg",
    "/images/profile-3.jpg",
  ],

  // ---------- CHILDHOOD ----------
  childhood: {
    title: "Where It All Started",
    text: "It started small — Hot Wheels lined up on the floor, RC cars and trucks tearing across the living room. That curiosity about anything with wheels and an engine never really left. It just grew up alongside me.",
    themes: ["Hot Wheels", "RC Cars", "RC Trucks", "Cars", "Racing", "Machines"],
  },

  // ---------- F1 & MOTORSPORTS ----------
  motorsport: {
    favoriteDriver: "Lewis Hamilton",
    favoriteTeams: ["Mercedes", "Ferrari"],
    favoriteCar: "2018 Mercedes F1 W09",
    favoriteCarReason:
      "I loved the design of the 2018 Mercedes, especially its front-wing design.",
    childhoodDream: "To experience and be involved in racing.",
    interests: ["F1", "Racing", "Go-Karting", "Endurance Racing", "Motorsport"],
  },

  // ---------- GO-KARTING ----------
  goKarting: {
    title: "My First Step Into Racing",
    venue: "GO GRIPS, Kengeri",
    // CHANGE YOUR CERTIFICATE IMAGE HERE
    certificateImage: "/images/go-karting-certificate.jpg",
  },

  // ---------- GARAGE ----------
  garage: {
    dreamCar: {
      name: "Mercedes G-Wagon",
      note: "Dream Car",
    },
    dreamBike: {
      name: "BMW S 1000 RR",
      note: "Dream Motorcycle",
    },
    racingInterest: {
      name: "AMG GT3 RS",
      note: "Racing Interest",
    },
  },

  // ---------- PC SETUP ----------
  pcSetup: {
    title: "My Command Center",
    // CHANGE YOUR PC SETUP IMAGE HERE
    image: "/images/pc-setup.jpg",
  },

  // ---------- FUTURE DREAM ----------
  future: {
    title: "The Dream Is To Race",
    ambitions: [
      "Le Mans-style endurance racing",
      "Isle of Man-related motorsport interests",
      "Other endurance / motorcycle racing",
    ],
    quote: "One day, I want to stop watching the race and become part of it.",
    subQuote: "The dream is still ahead.",
  },

  // ---------- VIDEOS ----------
  // ADD YOUR VIDEO HERE — put files in /public/videos/ or use a YouTube ID
  videos: [
    // { type: "file", src: "/videos/example.mp4", title: "Track Day", poster: "/images/profile-1.jpg" },
    // { type: "youtube", id: "dQw4w9WgXcQ", title: "Go-Karting Highlights" },
  ],

  // ---------- CONTACT — CHANGE YOUR SOCIAL LINKS HERE ----------
  contact: {
    instagram: "https://instagram.com/nikhil_devaraj__",
    instagramHandle: "@nikhil_devaraj__",
    email: "nikhildmdevraj@gmail.com",
    linkedin: "https://www.linkedin.com/in/nikhil-dm-6206b335a/",
    // CHANGE YOUR GITHUB HERE
    github: "https://github.com/",
    // CHANGE YOUR WHATSAPP NUMBER HERE — international format, digits only, no + or spaces
    // Example: "919876543210" for an Indian number
    whatsappNumber: "REPLACE_WITH_YOUR_NUMBER",
    whatsappMessage: "Hi Nikhil! I visited Nikhil's Garage and wanted to connect.",
  },

  // ---------- NAVIGATION ----------
  navItems: [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Childhood", id: "childhood" },
    { label: "F1", id: "motorsport" },
    { label: "Garage", id: "garage" },
    { label: "Memories", id: "memories" },
    { label: "Future", id: "future" },
    { label: "Contact", id: "contact" },
  ],
};

export default personalData;
