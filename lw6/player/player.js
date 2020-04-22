class Song {
  constructor(sName, sLength) {
    this.name = sName;
    this.length = sLength;
  }
}

class PlayerList {
  constructor(songList) {
    this.list = [].concat(songList);
    this.status = 'stop';
    this.currentTrack = '';
    this.currentTrackIndex = 0;
  } 

  Next() {
    if (++this.currentTrackIndex < this.list.length) {
      this.currentTrack = this.list[this.currentTrackIndex].name;
    }
    else {
      this.currentTrackIndex = 0;
      this.currentTrack = this.list[this.currentTrackIndex].name;
    }
    this.status = 'play';
  }

  Prev() {
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
    this.equalizer = new Equalizer();
  }

  GetFrequency() {
      return this.equalizer.GetBands();
  }

  SetFrequency(one, two, three) {
      this.equalizer.SetBands(one, two, three);
  }

  Display() {
    return 'Track: ' + this.playerList.currentTrack + '; Status: ' + this.playerList.status;
  };

  Play() {
    this.playerList.status = 'play';
    this.playerList.currentTrack = this.playerList.list[this.playerList.currentTrackIndex].name;
    console.log('Now playing: ' + this.Display());
  };

  Stop() {
    this.playerList.status = 'stop';
    this.playerList.currentTrack = '';
  };

  Pause() {
    this.playerList.status = 'pause';
  };

  Next() {
    this.playerList.Next();
    console.log('Now playing: ' + this.Display());
  };

  Prev() {
    this.playerList.Prev();
    console.log('Now playing: ' + this.Display());
  };
}

class Equalizer {
  constructor() {
    this.bandOne = 5;
    this.bandTwo = 5;
    this.bandThree = 5;
  }

  SetBands(one, two, three) {
    this.bandOne = one;
    this.bandTwo = two;
    this.bandThree = three;
  }

  GetBands() {
    return 'Band one: ' + this.bandOne + '; Band two: ' + this.bandTwo + '; Band three: ' + this.bandThree;
  }
}