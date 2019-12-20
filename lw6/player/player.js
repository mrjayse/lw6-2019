function Song(sName, sLength) {
  this.songName = sName;
  this.songLength = sLength;
}

function PlayerList() {
  this.list = [];
  this.status = 'stop';
  this.currentTrack = '';
  this.currentTrackIndex = 0;

  this.next = function () {
    if (++this.currentTrackIndex < this.list.length) { 
      this.currentTrack = this.list[this.currentTrackIndex].songName;
    }
    else {
      this.currentTrackIndex = 0;
      this.currentTrack = this.list[this.currentTrackIndex].songName;
    }
    this.status = 'play';
  }

  this.prev = function () {
    if (--this.currentTrackIndex >= 0) {
      this.currentTrack = this.list[this.currentTrackIndex].songName;
    }
    else {
      this.currentTrackIndex = this.list.length - 1;
      this.currentTrack = this.list[this.currentTrackIndex].songName;
    }
    this.status = 'play';
  }
}

function Player(playerList) {
  this.playerList = playerList;

  this.display = function () {
    return 'Track: ' + this.playerList.currentTrack + ' Status: ' + this.playerList.status;
  };

  this.play = function () {
    this.playerList.status = 'play';
    this.playerList.currentTrack = this.playerList.list[this.playerList.currentTrackIndex].songName;
  };

  this.stop = function () {
    this.playerList.status = 'stop';
    this.playerList.currentTrack = '';
  };

  this.pause = function () {
    this.playerList.status = 'pause';
  };

  this.next = function () {
    this.playerList.next();
  };

  this.prev = function () {
    playerList.prev();
  };
}