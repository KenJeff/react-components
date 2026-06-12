import { shows } from "../data/netflixHelperData.js"
export function getAvailableShows(shows) {
    return shows.filter(show => show.isAvailable === true)

}

export function getTopRatedShows(shows) {
    return shows.filter(show => show.rating >= 9)


}

export function getGenreRecommendations(shows, genre) {
    return shows.filter(show => show.genre === genre)

}

console.log(getAvailableShows(shows));

/* 

getAvailableShows()
return only shows available to stream

getTopRatedShows()
return only shows with a 9 or higher

getGenreRecommendations()
accept a genre and return all the matches*/