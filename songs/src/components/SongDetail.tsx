import React from 'react'
import { connect } from 'react-redux';

interface SongProp {
    title: string,
    duration: string
}

const SongDetail = ({ song }: { song: SongProp }) => {
    if (!song) {
        return <div>Select a song</div>
    }

    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {song.title}
                <br/>
                Duration: {song.duration}
            </p>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail)
