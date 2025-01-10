import { storageService } from "../async-storage.service.js"
import { songService } from "../song/song.service.local.js"
import { makeId, playlistNumber } from "../util.service.js"

export const stationService = {
    loadStation,
    getEmptyStation,
    addSongToStation,
    removeSong

}

const demoStation = {
    _id:'1234',
    name: "demo station",
    tags: [
        "Sound",
        "Demo"
    ],
    createdBy: {
        id: "uId",
        fullname: "Not sure that needed",
        imgUrl: "url",
        likedByUsers: "Not sure that needed",
    },
    songs: [
        {SongObject1},{Song2}
    ]

}

const STORAGE_KEY = 'stations'


async function loadStation (filterBy = { txt:''}) {
    try {
        let station = await storageService.query(STORAGE_KEY)
        const { txt } = filterBy
        if(txt) {
            const regex = new RegExp(filterBy.txt, 'i')
            station = station.filter(station => regex.test(station.name))
        }
        return station
    }catch (err) {
        console.log('Failed to load stations',err)
    }
    throw err

}

function getEmptyStation(){
    return {
        _id: makeId(),
        name:`MyPlayList#${playlistNumber}`,
        tags: ['none'],
        createdBy: {
            id: "currentUser", //TODO: When the user system will work to change 
        fullname: "CurrentUser",
        imgUrl: "url",
        },
        songs: []
    }
}

function addSongToStation(songId, stationId){
    const station = storageService.get(STORAGE_KEY,stationId)
    const songToAdd = songService.getSongById(songId)
    const updatedStation = {...station, songs: [...station.songs, songToAdd]}
    storageService.put(STORAGE_KEY, updatedStation)
    return updatedStation
}

function removeSong(songId, stationId) {
    const station = storageService.get(STORAGE_KEY,stationId)
    const updatedSongs = station.songs.filter(song => songId !== song._id)
    
    const updatedStation = {
        ...station, songs: updatedSongs,
    }

    storageService.put(STORAGE_KEY, updatedStation)

    return updatedStation
}

