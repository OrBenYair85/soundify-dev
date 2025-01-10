import { storageService } from "../async-storage.service.js"

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

const STORAGE_KEY = 'stations'