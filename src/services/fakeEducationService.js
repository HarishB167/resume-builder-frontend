const educationList = [
  {
    id: 1,
    user_id: 24,
    qualification: "Web Designer II",
    institute: "University of Kota",
    score: 64.8,
  },
  {
    id: 2,
    user_id: 2,
    qualification: "Electrical Engineer",
    institute: "Black Hills State University",
    score: 97.75,
  },
  {
    id: 3,
    user_id: 14,
    qualification: "Web Developer III",
    institute: "Dr. D.Y. Patil University",
    score: 69.82,
  },
  {
    id: 4,
    user_id: 15,
    qualification: "Civil Engineer",
    institute: "Ecole Supérieure de Commerce de Sophia Antipolis",
    score: 78.01,
  },
  {
    id: 5,
    user_id: 22,
    qualification: "Programmer I",
    institute: "University of Bath",
    score: 85.36,
  },
  {
    id: 6,
    user_id: 18,
    qualification: "Staff Accountant I",
    institute: "University of Electronic Science and Technology of China",
    score: 74.55,
  },
  {
    id: 7,
    user_id: 22,
    qualification: "Office Assistant II",
    institute: "Pädagogische Hochschule Karlsruhe",
    score: 62.54,
  },
  {
    id: 8,
    user_id: 1,
    qualification: "Financial Advisor",
    institute: "Oita Medical University",
    score: 81.79,
  },
  {
    id: 9,
    user_id: 13,
    qualification: "Software Engineer IV",
    institute: "Kinjo Gakuin University",
    score: 97.7,
  },
  {
    id: 10,
    user_id: 16,
    qualification: "Civil Engineer",
    institute: "Shizuoka Prefectural University",
    score: 92.33,
  },
  {
    id: 11,
    user_id: 14,
    qualification: "Computer Systems Analyst III",
    institute: "Stockholm University",
    score: 91.37,
  },
  {
    id: 12,
    user_id: 20,
    qualification: "Software Engineer III",
    institute: "Andrews University",
    score: 92.46,
  },
  {
    id: 13,
    user_id: 11,
    qualification: "Senior Developer",
    institute: "Moscow External University of the Humanities",
    score: 78.79,
  },
  {
    id: 14,
    user_id: 12,
    qualification: "VP Sales",
    institute: "Kiev School Of Economics",
    score: 73.22,
  },
  {
    id: 15,
    user_id: 10,
    qualification: "Civil Engineer",
    institute: "Metropolitan University",
    score: 97.18,
  },
  {
    id: 16,
    user_id: 2,
    qualification: "Statistician IV",
    institute: "University of South Dakota",
    score: 96.06,
  },
  {
    id: 17,
    user_id: 23,
    qualification: "Business Systems Development Analyst",
    institute: "Universitas HKBP Nommensen",
    score: 84.68,
  },
  {
    id: 18,
    user_id: 6,
    qualification: "Pharmacist",
    institute: "University of Oslo",
    score: 69.89,
  },
  {
    id: 19,
    user_id: 9,
    qualification: "Senior Cost Accountant",
    institute: "Universität Osnabrück",
    score: 62.91,
  },
  {
    id: 20,
    user_id: 19,
    qualification: "Executive Secretary",
    institute: "Bashkir State Agrarian University",
    score: 72.69,
  },
  {
    id: 21,
    user_id: 11,
    qualification: "Project Manager",
    institute: "Claflin College",
    score: 62.63,
  },
  {
    id: 22,
    user_id: 23,
    qualification: "Administrative Assistant II",
    institute: "Ishinomaki Senshu University",
    score: 86.11,
  },
  {
    id: 23,
    user_id: 6,
    qualification: "Senior Developer",
    institute: "Singidunum University",
    score: 97.82,
  },
  {
    id: 24,
    user_id: 13,
    qualification: "Geological Engineer",
    institute: 'Universidad Técnica de Esmeraldas "Luis Vargas Torres"',
    score: 84.42,
  },
  {
    id: 25,
    user_id: 24,
    qualification: "Accountant I",
    institute: "Universidad Nacional de Ingeniería",
    score: 63.07,
  },
  {
    id: 26,
    user_id: 9,
    qualification: "VP Sales",
    institute: "ICI University",
    score: 64.49,
  },
  {
    id: 27,
    user_id: 21,
    qualification: "Nuclear Power Engineer",
    institute: "Universidad Autónoma de Aguascalientes",
    score: 77.98,
  },
  {
    id: 28,
    user_id: 5,
    qualification: "Nuclear Power Engineer",
    institute: "Karelian State Pedagogical University",
    score: 65.28,
  },
  {
    id: 29,
    user_id: 19,
    qualification: "Teacher",
    institute: "Université Val-de-Marne (Paris XII)",
    score: 96.4,
  },
  {
    id: 30,
    user_id: 17,
    qualification: "Product Engineer",
    institute: "Florida Atlantic University",
    score: 90.19,
  },
];

export async function getEducationListForUserId(userId) {
  const list = educationList.filter((item) => item.user_id == userId);
  return [...list];
}

export async function getEducation(educationId) {
  const education = educationList.find((e) => e.id == educationId);
  if (education) return { ...education };
}

export async function saveEducation(education) {
  if (education.id) {
    const e = educationList.find((item) => item.id === education.id);
    e.qualification = education.qualification;
    e.institute = education.institute;
    e.score = education.score;
    return e;
  } else {
    const newEducation = { ...education };
    newEducation.id = new Date().getTime();
    educationList.push(newEducation);
    return newEducation;
  }
}

export async function deleteEducation(educationId) {
  const index = educationList.indexOf(
    educationList.find((e) => e.id == educationId)
  );
  if (index > -1) {
    educationList.splice(index, 1);
  }
}

export default {
  getEducationListForUserId,
  getEducation,
  saveEducation,
  deleteEducation,
};
