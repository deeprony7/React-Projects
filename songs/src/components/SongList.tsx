import React, { Component } from 'react'
import { connect } from 'react-redux';
import { selectSong } from '../actions'

type SongDetailProp = {
    title: string;
    duration: string;
}

class SongList extends Component<any> {
    renderList() {
        return this.props.songs.map((song: SongDetailProp) => {
            return (
                <div className="item" data-testid={song.title} key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>

                    <div className="content">{song.title}</div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return { songs: state.songs }
}


export default connect(mapStateToProps, {
    selectSong: selectSong
})(SongList);