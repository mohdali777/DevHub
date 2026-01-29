import type { USER_DTO } from "../../Interface/user";

export const dummyUser: USER_DTO = {
  _id: "65b8f2c9a1e4d91234567890",
  name: "Mohd Ali",
  email: "mohdali@example.com",

  image: {
    image_url: "https://via.placeholder.com/150",
    public_id: "users/default-avatar"
  },

  about: {
    user_type: "employee",
    location: "Bangalore, India",
    bio: "Full-stack developer passionate about building scalable web applications.",
    website: "https://mohdali.dev",
    company: "Triangle Tech",
    position: "Software Engineer",

    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "MongoDB"
    ],

    experience: [
      {
        position: "Software Engineer",
        company: "Triangle Tech",
        starting_date: "2023-01-01",
        ending_date: "2025-01-01",
        employment_type: "full-time",
        location: "Remote",
        duration: "2 years"
      }
    ],

    education: [
      {
        institution: "ABC Engineering College",
        department: "Computer Science",
        start_year: "2019",
        end_year: "2023",
        duration: "4 years"
      }
    ],

    social: {
      github: "https://github.com/mohdali",
      linkedin: "https://linkedin.com/in/mohdali",
      x: "https://x.com/mohdali",
      portfolio: "https://mohdali.dev",
      dribbble: "",
      behance: ""
    }
  },

  role: "user",
  is_verified: true,
  badge: "blue",

  stats: {
    saved_articles: [
      "65a1e4c91234567890111111",
      "65a1e4c91234567890222222"
    ],
    posts: [
      "65b2f9c91234567890333333"
    ],
    comments: [
      "65c3f9c91234567890444444"
    ],
    followers: [
      "65d4f9c91234567890555555"
    ],
    following: [
      "65e5f9c91234567890666666"
    ],
    likes: [
      "65f6f9c91234567890777777"
    ]
  },

  status: "active",

  // ✅ STRING — not Date object (prevents React crash)
  createdAt: "2024-06-01T10:30:00.000Z"
};
