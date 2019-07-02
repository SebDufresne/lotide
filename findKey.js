const findKey = (obj, cb) => Object.keys(obj).find(key => cb(obj[key]));

module.exports = findKey;