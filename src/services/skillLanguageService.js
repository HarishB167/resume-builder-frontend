import http from "./httpService";

export async function getSkillListForUserId(userId) {
  const result = await http.get(`/people/${userId}/skills/`);
  return result.data;
}

export async function getLanguageListForUserId(userId) {
  const result = await http.get(`/people/${userId}/languages/`);
  return result.data;
}

export async function getSkill(userId, skillId) {
  const { data: skill } = await http.get(
    `/people/${userId}/skills/${skillId}/`
  );
  const s = {
    id: skill.id,
    name: skill.name,
    user_id: skill.person,
  };
  return s;
}

export async function getLanguage(userId, languageId) {
  const { data: language } = await http.get(
    `/people/${userId}/languages/${languageId}/`
  );
  const s = {
    id: language.id,
    name: language.name,
    user_id: language.person,
  };
  return s;
}

export async function saveSkill(userId, skill) {
  const s = {
    name: skill.name,
    person: skill.user_id,
  };
  if (skill.id) {
    const result = await http.put(`/people/${userId}/skills/${skill.id}/`, s);
    return result.data;
  } else {
    const result = await http.post(`/people/${userId}/skills/`, s);
    return result.data;
  }
}

export async function saveLanguage(userId, language) {
  const l = {
    name: language.name,
    person: language.user_id,
  };
  if (language.id) {
    const result = await http.put(
      `/people/${userId}/languages/${language.id}/`,
      l
    );
    return result.data;
  } else {
    const result = await http.post(`/people/${userId}/languages/`, l);
    return result.data;
  }
}

export async function deleteSkill(userId, skillId) {
  const result = await http.delete(`/people/${userId}/skills/${skillId}/`);
  return result.data;
}

export async function deleteLanguage(userId, languageId) {
  const result = await http.delete(
    `/people/${userId}/languages/${languageId}/`
  );
  return result.data;
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
