import React from 'react';
import {render} from 'react-dom';
import {Button, Modal} from 'react-bootstrap';
import axios from 'axios';

class YoutubeSearchModal extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            videos : [],
            searchTerm: "",
        };
        this.getChannel = this.getChannel.bind(this);
        this.clearYoutubeForm = this.clearYoutubeForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addVideo = this.addVideo.bind(this);
    }
    handleChange(e) {
        this.setState({ searchTerm: e.target.value });
    }
    getChannel() {
        axios.get("https://www.googleapis.com/youtube/v3/channels",{
            params: {
                part:"contentDetails",
                forUsername: this.state.searchTerm,
                key: "AIzaSyDMYs0eOSofGXXJC817X5BZMHm4PIhezOY",
                format:"json"
            }
        }).then((response) => {
            const channel_data = response.data;
            const play_list_id = channel_data.items[0].contentDetails.relatedPlaylists.uploads;
            return axios.get("https://www.googleapis.com/youtube/v3/playlistItems",
            {
                params: {
                    part: "snippet",
                    playlistId:play_list_id,
                    key: "AIzaSyDMYs0eOSofGXXJC817X5BZMHm4PIhezOY"
                }
            })
        }).then((response) => {
            const playlist_data = response.data;
            const snippetData = playlist_data.items.map((snippetObj) => {
                return snippetObj.snippet
            });
            this.setState({videos: snippetData,})

        })
    }
    clearYoutubeForm(){
        this.setState({
            searchTerm: "",
            videos: []
        })
    }
    addVideo(e){
        const selectedObj = {};
        const key = e.target.data-name;
        selectedObj[key] = e.target.value;
        const tempObject = Object.assign({}, this.state.videos.selectedObj);
        this.setState({videos: tempObject})
    }
    render() {

        return (
            <Modal show={this.props.show} onHide={this.props.hide}>
                <Modal.Header closeButton>
                    <Modal.Title className="youtube_modal_title">
                        <h4 className = "youtube_modal_title">Choose a Youtube Clip</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label>Search by Youtube Channel: </label>
                            <input value={this.state.searchTerm} onChange={this.handleChange}className="form-control" type="search" id="youtube_clip" placeholder="username"/>
                            <Button type="button" className="btn btn-success" onClick={this.getChannel}>Search</Button>
                            <Button type="button" className="btn btn-default" onClick={this.clearYoutubeForm}>Redo Search</Button>
                            <p className="video_display">
                                {this.state.videos.map((video, index) => {
                                    return (
                                        <div key={index}>
                                            <div className="video_title"><label>{video.title}</label></div>
                                            <Button data-name={video.title} value={"https://www.youtube.com/embed/" + video.resourceId.videoId} type="button" className = "btn btn-default addVideo" onClick={this.addVideo}>Select Video</Button>
                                            <iframe  src={"https://www.youtube.com/embed/" + video.resourceId.videoId} width="460" height="305"></iframe>
                                        </div>)
                                })}
                            </p>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="button" className="btn btn-primary" data-dismiss="modal" onclick="upload_video()">Upload Video</Button>
                    <Button type="button" className="btn btn-secondary" data-dismiss="modal">Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default YoutubeSearchModal;


