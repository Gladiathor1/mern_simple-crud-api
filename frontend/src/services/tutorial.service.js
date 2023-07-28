import http from "../http-common";
class TutorialDataService {
  getAll() {
    return http.get("/");
  }
//   get(id) {
//     return http.get(`/${id}`);
//   }
get(name) {
    return http.get(`/${name}`);
  }
  create(data) {
    return http.post("/add", data);
  }
//   update(id, data) {
//     return http.put(`/update/${id}`, data);
//   }

update(id, data) {
    return http.post(`/update/${id}`, data);
  }
  delete(id) {
    return http.delete(`/${id}`);
  }
//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }
//   findByTitle(title) {
//     return http.get(`/?title=${title}`);
//   }
}
export default new TutorialDataService();