import { storageService } from "../async-storage.service.js";


const demoSong = {
    _id:'1234',
    title:'Demo Song',
    url:'',
    imgUrl:'',
    addedBy:{},
    addedAt:'time'
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
        songs: [
            {SongObject1},{Song2}
        ]

    }

}

const demoUser = {
    _id: 'u123',
    likedStations: ['{Mini station?}'],
    likedStationsIds: ['sid1', 'sid2'],
    likedSongIds: ['s1001','s1002']
}

const STORAGE_KEY = 'songs';
