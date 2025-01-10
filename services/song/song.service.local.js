import { storageService } from "../async-storage.service.js";

export const songService = {
    loadSongs,
    getSongById,
    getDefaultFilter

}


const demoSong = {
    _id:'1234',
    title:'Demo Song',
    artist:'',
    url:'',
    imgUrl:'',
    addedBy:{},
    addedAt:'time'
}


const STORAGE_KEY = 'songs';


async function loadSongs (filterBy = { txt:''}) {
    try {
        let songs = await storageService.query(STORAGE_KEY)
        const { txt } = filterBy
        if(txt) {
            const regex = new RegExp(filterBy.txt, 'i')
            songs = songs.filter(song => regex.test(song.title) || regex.test(song.artist))
        }
        return songs
    }catch (err) {
        console.log('Failed to load songs',err)
    }
    throw err

}

function getSongById(songId) {
    return storageService.get(STORAGE_KEY, songId)
}

function getDefaultFilter() {
    return {
        txt: ''
    }
}