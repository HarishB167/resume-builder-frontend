import http from "./httpService";

export async function getTrainingListForUserId(userId) {
  const result = await http.get(`/people/${userId}/trainings/`);
  return result.data;
}

export async function getTraining(userId, trainingId) {
  const { data: training } = await http.get(
    `/people/${userId}/trainings/${trainingId}/`
  );
  const t = {
    id: training.id,
    title: training.title,
    subtitle: training.subtitle,
    user_id: training.person,
    description: training.description,
  };
  return t;
}

export async function saveTraining(userId, training) {
  const p = {
    title: training.title,
    subtitle: training.subtitle,
    person: training.user_id,
    description: training.description,
  };
  if (training.id) {
    const result = await http.put(
      `/people/${userId}/trainings/${training.id}/`,
      p
    );
    return result.data;
  } else {
    const result = await http.post(`/people/${userId}/trainings/`, p);
    return result.data;
  }
}

export async function deleteTraining(userId, trainingId) {
  const result = await http.delete(
    `/people/${userId}/trainings/${trainingId}/`
  );
  return result.data;
}

export default {
  getTrainingListForUserId,
  getTraining,
  saveTraining,
  deleteTraining,
};
