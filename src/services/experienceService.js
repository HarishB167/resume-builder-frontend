import http from "./httpService";

export async function getExperienceListForUserId(userId) {
  const result = await http.get(`/people/${userId}/experiences/`);
  return result.data;
}

export async function getExperience(userId, experienceId) {
  const { data: experience } = await http.get(
    `/people/${userId}/experiences/${experienceId}/`
  );
  const e = {
    id: experience.id,
    title: experience.title,
    subtitle: experience.subtitle,
    user_id: experience.person,
    start: experience.start,
    end: experience.end,
    responsibilities: experience.responsibilities,
  };
  return e;
}

export async function saveExperience(userId, experience) {
  const e = {
    title: experience.title,
    subtitle: experience.subtitle,
    person: experience.user_id,
    start: experience.start,
    end: experience.end,
    responsibilities: experience.responsibilities,
  };
  if (experience.id) {
    const result = await http.put(
      `/people/${userId}/experiences/${experience.id}/`,
      e
    );
    return result.data;
  } else {
    const result = await http.post(`/people/${userId}/experiences/`, e);
    return result.data;
  }
}

export async function deleteExperience(userId, experienceId) {
  const result = await http.delete(
    `/people/${userId}/experiences/${experienceId}/`
  );
  return result.data;
}

export default {
  getExperienceListForUserId,
  getExperience,
  saveExperience,
  deleteExperience,
};
