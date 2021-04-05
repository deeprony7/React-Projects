// Action creater

export const selectSong = (song: string) => {
    // Return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}
