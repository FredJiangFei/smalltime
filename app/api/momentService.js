const moments = [];

function createMoment(data) {
  data.id = CreateGuid();
  data.created = new Date().getTime();

  moments.push(data);
}

function getMoments() {
  return moments.sort(function (a, b) {
    return b.created - a.created;
  });
}

function CreateGuid() {
  function _p8(s) {
    var p = (Math.random().toString(16) + '000000000').substr(2, 8);
    return s ? '-' + p.substr(0, 4) + '-' + p.substr(4, 4) : p;
  }
  return _p8() + _p8(true) + _p8(true) + _p8();
}

export default {
  createMoment,
  getMoments,
};
