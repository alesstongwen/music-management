class Artist {
  private _name: string;
  private _albums: Album[];
  constructor(name: string) {
    this._name = name;
    this._albums = [];
  }
  addAlbum(album: Album): void {
    this._albums.push(album);
  }
}
// if I delete this, I will get an error in my class Album :(
interface Track {
  title: string;
}

class Album {
  private _title: string;
  artist: Artist;
  yearReleased: number;
  tracks: Track[];
  constructor(title: string, artist: Artist, yearRealeased: number, track: []) {
    this._title = title;
    this.artist = artist;
    this.yearReleased = yearRealeased;
    this.tracks = track;
  }
  get title() {
    return this._title;
  }
  set title(newTitle: string) {
    this._title = newTitle;
  }
  addTrack(track: Track): void {
    this.tracks.push(track);
  }
}

class Song {
  private _title: string;
  constructor(title: string) {
    this._title = title;
  }
  get title(): string {
    return this.title;
  }
  set title(name: string) {
    this._title = name;
  }
}

class Playlist {
  name: string;
  private _songs: Song[];
  constructor(name: string) {
    this.name = name;
    this._songs = [];
  }
  get songs(): string {
    return this.songs;
  }
  set songs(title: string) {
    this._songs = [];
  }
  addAlbum(album: Album): void {
    album.tracks.forEach((track) => this._songs.push(track));
  }
}

// an error in line 66, which idk how to fix
