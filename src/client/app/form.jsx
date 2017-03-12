import React from 'react';
import {render} from 'react-dom';
import {Button} from 'react-bootstrap';
import YoutubeSearchModal from './youtube-search-modal.jsx';

class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user:{
                videos: [],
                skills: [],
            },
            modalState: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.createUser = this.createUser.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.onVideosSelected = this.onVideosSelected.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
    }
    componentDidMount() {
        this.autocomplete = new google.maps.places.Autocomplete(this.locationInput);
        this.autocomplete.addListener('place_changed', this.handleLocationChange)
    }
    handleChange(e){
        const key = e.target.id;
        const tmpUser = Object.assign({}, this.state.user);
        tmpUser[key] = e.target.value;
        this.setState({ user: tmpUser });
    }
    handleCheckBox(e){
        const name = e.target.name;
        const checked = e.target.checked;
        const tempUser = Object.assign({}, this.state.user);

        let skills = tempUser.skills || [];
        if(checked) {
            skills.push(name);
        } else {
            const nameIndex = skills.indexOf(name);
            skills.splice(nameIndex, 1);
        }

        this.setState({ user: tempUser });
    }
    createUser() {
        this.props.base.push("users", { data: this.state.user });
        this.props.returnToProfile("profiles");
    }
    toggleModal(open){
        this.setState({modalState: open});
    }
    onVideosSelected(selected_videos){
        const video_ids = selected_videos.map((video)=>{
           return video.resourceId.videoId
        })
        const tempUser = Object.assign({}, this.state.user);
        tempUser.videos = video_ids
        this.setState({user: tempUser})
    }
    handleLocationChange(){
        const place = this.autocomplete.getPlace();
        const tmpUser = Object.assign({}, this.state.user);
        tmpUser.location = {
            name: place.formatted_address,
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
        };
        this.setState({ user: tmpUser });
    }
    render() {

        const skillSets = ['Vocals', 'Guitar', 'Bass', 'Drums', 'DJ', 'Keyboard/Piano', 'Composing', 'Violin/Viola', 'Cello', 'Clarinet', 'Flute', 'Harp', 'Bassoon', 'Saxophone'];
        return (
           <div>
               <div className="form_body col-md-8 col-md-offset-2 well">
                   <div className="row avatar_img">
                       <label className="col-form-label create_profile col-md-8 col-sm-12">Create A Profile</label>
                       <div className="col-md-2 col-sm-6">
                           <img className="profile-pic" src="https://www.wpsymposiumpro.com/wp-content/uploads/2014/04/iStock_000033523696Small.jpg"/>
                       </div>
                   </div>
                   <div className="form-group row">
                       <label className="col-form-label col-md-2">Name</label>
                       <div className="col-md-10">
                           <input className="form-control" type="text" id="name" onChange={this.handleChange}/>
                       </div>
                   </div>
                   <div className="form-group row">
                       <label className="col-form-label col-md-2">Location</label>
                       <div className="col-md-10">
                           <input className="form-control" type="text" id="location" ref={(input) => { this.locationInput = input; }}/>
                       </div>
                   </div>
                   <div className="form-group row">
                       <label className="col-form-label col-md-2">Age</label>
                       <div className="col-md-4">
                           <input className="form-control" type="number" id="age" onChange={this.handleChange}/>
                       </div>
                   </div>
                   <div className="form-group row">
                       <label className="col-form-label col-md-2">About Me</label>
                       <div className="col-md-10">
                           <textarea className="form-control" type="text" id="description" onChange={this.handleChange}/>
                       </div>
                   </div>
                   <div className="form-group row">
                           <label className="col-form-label col-md-6">I'm interested in finding other..i.e bands, vocalists, guitarists</label>
                       <div className="col-md-6">
                           <select multiple className="form-control" type="text" id="interest" onChange={this.handleChange}>
                               <option>Bands</option>
                               <option>Vocalists</option>
                               <option>Guitarists</option>
                               <option>Bassists</option>
                               <option>Drummers</option>
                               <option>DJs</option>
                               <option>Keyboardist/Pianist</option>
                               <option>Composers</option>
                               <option>Violinist/Violist</option>
                               <option>Cellist</option>
                               <option>Clarinetist</option>
                               <option>Flautist</option>
                               <option>Harpist</option>
                               <option>Bassoonist</option>
                               <option>Saxophonist</option>
                               <option>Trumpeter</option>
                           </select>
                       </div>
                   </div>
                   <div className="form-group row">
                           <label className="col-form-label col-md-2">My skills</label>
                           <div className="checkbox col-md-10" type="text" id="skills">
                               {
                                   skillSets.map((skill, i) => {
                                       return (
                                           <label key={i}>
                                               <input type="checkbox" onChange={this.handleCheckBox} name={skill}/>{skill}</label>
                                       )
                                   })
                               }
                           </div>
                   </div>
                   <div className="form-group row">
                       <label className="col-form-label col-md-2">Gear</label>
                       <div className="col-md-10">
                           <input className="form-control" type="text" id="equipment" onChange={this.handleChange}/>
                       </div>
                   </div>
                   <div className="form-group row">
                       <label className="col-form-label col-md-4">Upload your video from Youtube</label>
                       <div className="col-md-4 col-sm-12">
                       <Button type="submit" className="btn btn-primary btn-lg" onClick={() => this.toggleModal(true)} >Select Youtube Clip</Button>
                       <YoutubeSearchModal show={this.state.modalState} hide={() => this.toggleModal(false)} onVideosSelected={this.onVideosSelected} />
                   </div>
                   </div>
                   <div className="form-group row">
                       <div className="col-md-8 youtube_clip_area">
                           <label className="col-form-label col-md-4">Preview Youtube Clips: </label>
                           {this.state.user.videos.map((video_id)=>{
                              return <iframe  src={"https://www.youtube.com/embed/" + video_id} width="460" height="305"/>
                           })}
                       </div>
                   </div>
                   {/*<div className="form-group row">*/}
                       {/*<div className="col-md-12">*/}
                           {/*<label className="col-form-label col-md-2">Soundcloud Clip</label>*/}
                           {/*<input className="form-control" type="search" id="sound_cloud_clip" placeholder="Search clip by artist name"/>*/}
                       {/*</div>*/}
                   {/*</div>*/}
                   <div className="form-group row">
                       <div className="col-md-6 col-md-offset-3 col-xs-4 col-xs-offset-4">
                           <button type="submit" className="btn btn-primary col-md-6 col-md-offset-3" onClick={this.createUser}>Create Profile!</button>
                       </div>
                   </div>
               </div>
           </div>
        );
    }
}

export default FormComponent;