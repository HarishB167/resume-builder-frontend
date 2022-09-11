import http from "./httpService";

export async function getUserList() {
  const result = await http.get("/people/");
  return result.data;
}

export async function getUser(userId) {
  const result = await http.get(`/people/${userId}/`);
  return result.data;
}

export async function getUserProfile(userId) {
  const { data } = await http.get(`/profile/${userId}/`);
  const user = {
    id: data.id,
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
    phone: data.phone,
    address: data.address,
    profile_statement: data.profile_statement,
    profile_link: data.profile_link,
  };
  return {
    basicInfo: user,
    projects: data.projects,
    educations: data.educations,
    experiences: data.experiences,
    skills: data.skills,
    languages: data.languages,
    trainings: data.trainings,
  };
}

export async function saveUser(user) {
  const u = {
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    phone: user.phone,
    address: user.address,
    profile_statement: user.profile_statement,
    profile_link: user.profile_link,
  };
  if (user.id) {
    const result = await http.put(`/people/${user.id}/`, u);
    return result.data;
  } else {
    const result = await http.post("/people/", u);
    return result.data;
  }
}

export async function deleteUser(userId) {
  const result = await http.delete(`/people/${userId}/`);
  return result.data;
}

export default {
  getUserList,
  getUser,
  saveUser,
  deleteUser,
};
