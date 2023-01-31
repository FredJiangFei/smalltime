import http from './httpService';

function sendMessage(message) {
  return http.post('message', { message: message });
}

export default {
  sendMessage,
};
