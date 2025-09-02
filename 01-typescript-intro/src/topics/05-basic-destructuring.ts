
interface Details {
    author: string;
    year: number;
}

interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'My Way',
    details: {
        author: "Frank Sinatra",
        year: 1969
    }
}

const song = 'New Song';
const { song: anotherSong, songDuration: duration, details: { author } } = audioPlayer;
// const { author } = audioPlayer.details;

console.log({ song });
console.log({ anotherSong, duration, author });

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ , , trunks = 'Not foun'] = dbz;
// const trunks = dbz[3] || 'No hay personaje';
console.log( `Personaje 3: ${ trunks }` );


export {};