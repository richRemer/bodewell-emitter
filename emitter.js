var EventEmitter = require("events").EventEmitter,
    mixer = require("bodewell-mixer");

module.exports = mixer(EventEmitter);

