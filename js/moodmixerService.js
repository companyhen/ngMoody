app.service('moodMixerService', function ($http, $q, client_id) {

var ctrl = this

ctrl.mixedPlaylist = [];

Array.prototype.push.apply(ctrl.mixedPlaylist, ctrl.currentMood);
Array.prototype.push.apply(ctrl.mixedPlaylist, ctrl.mixedMoods12);
Array.prototype.push.apply(ctrl.mixedPlaylist, ctrl.endMood);

return ctrl.mixedPlaylist;

});

