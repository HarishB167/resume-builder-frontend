const skillList = [
  {
    id: 1,
    user_id: 18,
    name: "WCCP",
  },
  {
    id: 2,
    user_id: 12,
    name: "UCSC Genome Browser",
  },
  {
    id: 3,
    user_id: 22,
    name: "OMB A-123",
  },
  {
    id: 4,
    user_id: 10,
    name: "XTRAC",
  },
  {
    id: 5,
    user_id: 18,
    name: "Avaya Communication Manager",
  },
  {
    id: 6,
    user_id: 19,
    name: "XP/Vista/7",
  },
  {
    id: 7,
    user_id: 12,
    name: "Portraits",
  },
  {
    id: 8,
    user_id: 13,
    name: "Key Performance Indicators",
  },
  {
    id: 9,
    user_id: 20,
    name: "UltraEdit",
  },
  {
    id: 10,
    user_id: 18,
    name: "Crystal Reports",
  },
  {
    id: 11,
    user_id: 13,
    name: "SQL Server Management Studio",
  },
  {
    id: 12,
    user_id: 23,
    name: "Software Quality Assurance",
  },
  {
    id: 13,
    user_id: 22,
    name: "Oxygen XML Editor",
  },
  {
    id: 14,
    user_id: 15,
    name: "Justice",
  },
  {
    id: 15,
    user_id: 24,
    name: "SQL Loader",
  },
  {
    id: 16,
    user_id: 15,
    name: "EES",
  },
  {
    id: 17,
    user_id: 11,
    name: "PTMS",
  },
  {
    id: 18,
    user_id: 11,
    name: "SAP BPM",
  },
  {
    id: 19,
    user_id: 7,
    name: "ION Marketview",
  },
  {
    id: 20,
    user_id: 22,
    name: "JDF",
  },
  {
    id: 21,
    user_id: 9,
    name: "Errors &amp; Omissions",
  },
  {
    id: 22,
    user_id: 5,
    name: "RC Detailing",
  },
  {
    id: 23,
    user_id: 7,
    name: "UltraEdit",
  },
  {
    id: 24,
    user_id: 7,
    name: "PDH",
  },
  {
    id: 25,
    user_id: 24,
    name: "Cisco Technologies",
  },
  {
    id: 26,
    user_id: 6,
    name: "Yellow Pages",
  },
  {
    id: 27,
    user_id: 4,
    name: "Job Descriptions",
  },
  {
    id: 28,
    user_id: 15,
    name: "MHE",
  },
  {
    id: 29,
    user_id: 10,
    name: "Rheumatoid Arthritis",
  },
  {
    id: 30,
    user_id: 23,
    name: "Oil Analysis",
  },
  {
    id: 31,
    user_id: 12,
    name: "Lead Generation",
  },
  {
    id: 32,
    user_id: 17,
    name: "IBM Tivoli",
  },
  {
    id: 33,
    user_id: 8,
    name: "DCP",
  },
  {
    id: 34,
    user_id: 12,
    name: "Process Piping Design",
  },
  {
    id: 35,
    user_id: 19,
    name: "Utilization",
  },
  {
    id: 36,
    user_id: 10,
    name: "RNP",
  },
  {
    id: 37,
    user_id: 10,
    name: "Sleep Disorders",
  },
  {
    id: 38,
    user_id: 6,
    name: "ISDN",
  },
  {
    id: 39,
    user_id: 6,
    name: "Technical Support",
  },
  {
    id: 40,
    user_id: 3,
    name: "Xajax",
  },
  {
    id: 41,
    user_id: 23,
    name: "Agile &amp; Waterfall Methodologies",
  },
  {
    id: 42,
    user_id: 5,
    name: "HSR",
  },
  {
    id: 43,
    user_id: 16,
    name: "Capacity Building",
  },
  {
    id: 44,
    user_id: 6,
    name: "Amadeus",
  },
  {
    id: 45,
    user_id: 10,
    name: "CPFR",
  },
  {
    id: 46,
    user_id: 25,
    name: "PY",
  },
  {
    id: 47,
    user_id: 4,
    name: "Galleries",
  },
  {
    id: 48,
    user_id: 13,
    name: "SFDC",
  },
  {
    id: 49,
    user_id: 6,
    name: "VDSL",
  },
  {
    id: 50,
    user_id: 6,
    name: "Irrigation Management",
  },
];

const languageList = [
  {
    id: 1,
    user_id: 8,
    name: "Croatian",
  },
  {
    id: 2,
    user_id: 25,
    name: "Tok Pisin",
  },
  {
    id: 3,
    user_id: 3,
    name: "Northern Sotho",
  },
  {
    id: 4,
    user_id: 7,
    name: "Catalan",
  },
  {
    id: 5,
    user_id: 4,
    name: "Punjabi",
  },
  {
    id: 6,
    user_id: 15,
    name: "Tok Pisin",
  },
  {
    id: 7,
    user_id: 17,
    name: "Bulgarian",
  },
  {
    id: 8,
    user_id: 5,
    name: "Bengali",
  },
  {
    id: 9,
    user_id: 9,
    name: "Portuguese",
  },
  {
    id: 10,
    user_id: 18,
    name: "Luxembourgish",
  },
  {
    id: 11,
    user_id: 12,
    name: "Irish Gaelic",
  },
  {
    id: 12,
    user_id: 12,
    name: "Czech",
  },
  {
    id: 13,
    user_id: 13,
    name: "Aymara",
  },
  {
    id: 14,
    user_id: 25,
    name: "New Zealand Sign Language",
  },
  {
    id: 15,
    user_id: 20,
    name: "Amharic",
  },
  {
    id: 16,
    user_id: 21,
    name: "Kyrgyz",
  },
  {
    id: 17,
    user_id: 2,
    name: "Tetum",
  },
  {
    id: 18,
    user_id: 8,
    name: "Mongolian",
  },
  {
    id: 19,
    user_id: 22,
    name: "Pashto",
  },
  {
    id: 20,
    user_id: 3,
    name: "Afrikaans",
  },
  {
    id: 21,
    user_id: 9,
    name: "Aymara",
  },
  {
    id: 22,
    user_id: 11,
    name: "Swahili",
  },
  {
    id: 23,
    user_id: 20,
    name: "Swahili",
  },
  {
    id: 24,
    user_id: 11,
    name: "Azeri",
  },
  {
    id: 25,
    user_id: 22,
    name: "Swahili",
  },
  {
    id: 26,
    user_id: 2,
    name: "Swati",
  },
  {
    id: 27,
    user_id: 20,
    name: "Gujarati",
  },
  {
    id: 28,
    user_id: 12,
    name: "Kannada",
  },
  {
    id: 29,
    user_id: 9,
    name: "Kazakh",
  },
  {
    id: 30,
    user_id: 5,
    name: "Moldovan",
  },
  {
    id: 31,
    user_id: 4,
    name: "Czech",
  },
  {
    id: 32,
    user_id: 8,
    name: "Afrikaans",
  },
  {
    id: 33,
    user_id: 22,
    name: "Luxembourgish",
  },
  {
    id: 34,
    user_id: 20,
    name: "Malay",
  },
  {
    id: 35,
    user_id: 15,
    name: "Māori",
  },
  {
    id: 36,
    user_id: 9,
    name: "Maltese",
  },
  {
    id: 37,
    user_id: 21,
    name: "Spanish",
  },
  {
    id: 38,
    user_id: 10,
    name: "Portuguese",
  },
  {
    id: 39,
    user_id: 22,
    name: "Chinese",
  },
  {
    id: 40,
    user_id: 1,
    name: "Czech",
  },
  {
    id: 41,
    user_id: 11,
    name: "Pashto",
  },
  {
    id: 42,
    user_id: 21,
    name: "Swahili",
  },
  {
    id: 43,
    user_id: 20,
    name: "Bulgarian",
  },
  {
    id: 44,
    user_id: 8,
    name: "Fijian",
  },
  {
    id: 45,
    user_id: 21,
    name: "Moldovan",
  },
  {
    id: 46,
    user_id: 22,
    name: "Khmer",
  },
  {
    id: 47,
    user_id: 12,
    name: "Tsonga",
  },
  {
    id: 48,
    user_id: 9,
    name: "Tamil",
  },
  {
    id: 49,
    user_id: 8,
    name: "Kazakh",
  },
  {
    id: 50,
    user_id: 25,
    name: "Arabic",
  },
];

export async function getSkillListForUserId(userId) {
  const list = skillList.filter((item) => item.user_id == userId);
  return [...list];
}

export async function getLanguageListForUserId(userId) {
  const list = languageList.filter((item) => item.user_id == userId);
  return [...list];
}

export async function getSkill(skillId) {
  const skill = skillList.find((e) => e.id == skillId);
  if (skill) return { ...skill };
}

export async function getLanguage(languageId) {
  const language = languageList.find((e) => e.id == languageId);
  if (language) return { ...language };
}

export async function saveSkill(skill) {
  if (skill.id) {
    const s = skillList.find((item) => item.id === skill.id);
    s.name = skill.name;
    return s;
  } else {
    const newSkill = { ...skill };
    newSkill.id = new Date().getTime();
    skillList.push(newSkill);
    return newSkill;
  }
}

export async function saveLanguage(language) {
  if (language.id) {
    const l = languageList.find((item) => item.id === language.id);
    l.name = language.name;
    return l;
  } else {
    const newLanguage = { ...language };
    newLanguage.id = new Date().getTime();
    languageList.push(newLanguage);
    return newLanguage;
  }
}

export async function deleteSkill(skillId) {
  const index = skillList.indexOf(skillList.find((e) => e.id == skillId));
  if (index > -1) {
    skillList.splice(index, 1);
  }
}

export async function deleteLanguage(languageId) {
  const index = languageList.indexOf(
    languageList.find((e) => e.id == languageId)
  );
  if (index > -1) {
    languageList.splice(index, 1);
  }
}

export default {
  getSkillListForUserId,
  getSkill,
  saveSkill,
  deleteSkill,
  getLanguageListForUserId,
  getLanguage,
  saveLanguage,
  deleteLanguage,
};
