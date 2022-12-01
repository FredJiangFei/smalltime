import http from './httpService';

function getPost() {
  return http.get();
}

export default {
  getPost,
};
