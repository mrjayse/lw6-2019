class Song {
  constructor(sName, sLength) {
    this.name = sName;
    this.length = sLength;
  }
}

class PlayerList {
  constructor() {
    this.list = [];
    this.status = 'stop';
    this.currentTrack = '';
    this.currentTrackIndex = 0;
  }

  next() {
    if (++this.currentTrackIndex < this.list.length) {
      this.currentTrack = this.list[this.currentTrackIndex].name;
    }
    else {
      this.currentTrackIndex = 0;
      this.currentTrack = this.list[this.currentTrackIndex].name;
    }
    this.status = 'play';
  }

  prev() {
    if (--this.currentTrackIndex >= 0) {
      this.currentTrack = this.list[this.currentTrackIndex].name;
    }
    else {
      this.currentTrackIndex = this.list.length - 1;
      this.currentTrack = this.list[this.currentTrackIndex].name;
    }
    this.status = 'play';
  }
}

class Player {
  constructor(nPlayerList) {
    this.playerList = nPlayerList;
  }

  display() {
    return 'Track: ' + this.playerList.currentTrack + ' Status: ' + this.playerList.status;
  };

  play() {
    this.playerList.status = 'play';
    this.playerList.currentTrack = this.playerList.list[this.playerList.currentTrackIndex].name;
  };

  stop() {
    this.playerList.status = 'stop';
    this.playerList.currentTrack = '';
  };

  pause() {
    this.playerList.status = 'pause';
  };

  next() {
    this.playerList.next();
  };

  prev() {
    playerList.prev();
  };
}