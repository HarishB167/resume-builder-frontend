import http from "./httpService";

export async function getProjectListForUserId(userId) {
  const result = await http.get(`/people/${userId}/projects/`);
  return result.data;
}

export async function getProject(userId, projectId) {
  const { data: project } = await http.get(
    `/people/${userId}/projects/${projectId}/`
  );
  const p = {
    id: project.id,
    title: project.title,
    subtitle: project.subtitle,
    user_id: project.person,
    description: project.description,
    git_link: project.git_link,
    test_link: project.test_link,
  };
  return p;
}

export async function saveProject(userId, project) {
  const p = {
    title: project.title,
    subtitle: project.subtitle,
    person: project.user_id,
    description: project.description,
    git_link: project.git_link,
    test_link: project.test_link,
  };
  if (project.id) {
    const result = await http.put(
      `/people/${userId}/projects/${project.id}/`,
      p
    );
    return result.data;
  } else {
    const result = await http.post(`/people/${userId}/projects/`, p);
    return result.data;
  }
}

export async function deleteProject(userId, projectId) {
  const result = await http.delete(`/people/${userId}/projects/${projectId}/`);
  return result.data;
}

export default {
  getProjectListForUserId,
  getProject,
  saveProject,
  deleteProject,
};
