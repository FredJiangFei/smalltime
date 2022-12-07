const moments = [];

function createMoment(data) {
  moments.push(data);
}

function getMoments() {
  return moments;
}

export default {
  createMoment,
  getMoments,
};
