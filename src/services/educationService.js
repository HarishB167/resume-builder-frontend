import http from "./httpService";

export async function getEducationListForUserId(userId) {
  const result = await http.get(`/people/${userId}/educations/`);
  return result.data;
}

export async function getEducation(userId, educationId) {
  const { data: education } = await http.get(
    `/people/${userId}/educations/${educationId}/`
  );
  const p = {
    id: education.id,
    user_id: education.person,
    qualification: education.qualification,
    institute: education.institute,
    score: education.score,
  };
  return p;
}

export async function saveEducation(userId, education) {
  const e = {
    person: education.user_id,
    qualification: education.qualification,
    institute: education.institute,
    score: education.score,
  };
  if (education.id) {
    const result = await http.put(
      `/people/${userId}/educations/${education.id}/`,
      e
    );
    return result.data;
  } else {
    const result = await http.post(`/people/${userId}/educations/`, e);
    return result.data;
  }
}

export async function deleteEducation(userId, educationId) {
  const result = await http.delete(
    `/people/${userId}/educations/${educationId}/`
  );
  return result.data;
}

export default {
  getEducationListForUserId,
  getEducation,
  saveEducation,
  deleteEducation,
};
