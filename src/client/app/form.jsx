import React from 'react';
import {render} from 'react-dom';

class FormComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };

        this.handleChange = this.handleChange.bind(this);
        this.createUser = this.createUser.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
    }
    handleChange(e){
        const key = e.target.id;
        var state = {};
        state[key] = e.target.value;
        this.setState(state);
    }
    handleCheckBox(e){
        const name = e.target.name;
        const checked = e.target.checked;
        let skills = this.state.skills || [];
        if(checked) {
            skills.push(name);
        } else {
            const nameIndex = skills.indexOf(name);
            skills.splice(nameIndex, 1);
        }
        this.setState({ skills: skills });
    }
    createUser() {
        this.props.base.push("users", { data: this.state });
    }
    render() {

        const skillSets = ['Vocals', 'Guitar', 'Bass', 'Drums', 'DJ', 'Keyboard/Piano', 'Composing', 'Violin/Viola', 'Cello', 'Clarinet', 'Flute', 'Harp', 'Bassoon', 'Saxophone'];
        return (
           <div>
               hello
               <div className="form_body col-md-6 col-md-offset-3 well">
                   <div className="row avatar_img col-md-6 col-md-offset-3">
                       <img className="profile-pic" src="https://www.wpsymposiumpro.com/wp-content/uploads/2014/04/iStock_000033523696Small.jpg"/>
                   </div>
                   <div className="form-group row">
                       <div className="col-md-12">
                           <label>Name</label>
                           <input className="form-control" type="text" id="name" onChange={this.handleChange}/>
                       </div>
                   </div>
                   <div className="form-group row">
                       <div className="col-md-12">
                           <label>Location</label>
                           <input className="form-control" type="text" id="location_input"/>
                       </div>
                   </div>
                   <div className="form-group row">
                       <div className="col-md-2">
                           <label>Age</label>
                           <input className="form-control" type="number" id="age" onChange={this.handleChange}/>
                       </div>
                   </div>
                   <div className="form-group row">
                       <div className="col-md-12">
                           <label>About Me</label>
                           <textarea className="form-control" type="text" id="description" onChange={this.handleChange}/>
                       </div>
                   </div>
                   <div className="form-group row">
                       <div className="col-md-12">
                           <label>I'm interested in finding other..i.e bands, vocalists, guitarists</label>
                           <select className="form-control" type="text" id="interest" onChange={this.handleChange}>
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
                       <div className="col-md-12">
                           <label>My skills</label>
                           <div className="checkbox" type="text" id="skills">
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
                   </div>
                   <div className="form-group row">
                       <div className="col-md-12">
                           <label>Gear</label>
                           <input className="form-control" type="text" id="equipment" onChange={this.handleChange}/>
                       </div>
                   </div>
                   {/*<div className="form-group row">*/}
                       {/*<div className="col-md-12">*/}
                           {/*<label>Choose a video from Youtube</label>*/}
                           {/*<button type="submit" className="btn btn-primary btn-lg col-md-12" data-toggle="modal" data-target="#myModal">Select Youtube Clip</button>*/}
                           {/*<div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">*/}
                               {/*<div className="modal-dialog" role="document">*/}
                                   {/*<div className="modal-content col-xs-10 col-xs-offset-1">*/}
                                       {/*<div className="modal-header">*/}
                                           {/*<button type = "button" className="close" data-dismiss="modal" aria-label="Close">*/}
                                               {/*<span aria-hidden="true">&times;</span>*/}
                                           {/*</button>*/}
                                           {/*<h4 className = "modal-title">Choose a Youtube Clip</h4>*/}
                                       {/*</div>*/}
                                       {/*<div className="modal-body">*/}
                                           {/*<form>*/}
                                               {/*<div className="form-group">*/}
                                                   {/*<label>Search by Youtube Channel: </label>*/}
                                                   {/*<input className="form-control" type="search" id="youtube_clip" placeholder="username">*/}
                                                       {/*<button type="button" className="btn btn-success" onclick="get_channel()">Search</button>*/}
                                                       {/*<button type="button" className="btn btn-default" onclick="clear_youtube_form()">Redo Search</button>*/}
                                                       {/*<p className="video_display"></p>*/}
                                               {/*</div>*/}
                                           {/*</form>*/}
                                       {/*</div>*/}
                                       {/*<div className="modal-footer">*/}
                                           {/*<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>*/}
                                           {/*<button type="button" className="btn btn-primary" data-dismiss="modal" onclick="upload_video()">Upload Video</button>*/}
                                       {/*</div>*/}
                                   {/*</div>*/}
                               {/*</div>*/}
                           {/*</div>*/}
                       {/*</div>*/}
                   {/*</div>*/}
                   <div className="form-group row">
                       <div className="col-md-12 youtube_clip_area">
                           <label>Preview Youtube Clips: </label>
                       </div>
                   </div>
                   <div className="form-group row">
                       <div className="col-md-12">
                           <label>Soundcloud Clip</label>
                           <input className="form-control" type="search" id="sound_cloud_clip" placeholder="Search clip by artist name"/>
                       </div>
                   </div>
                   <div className="form-group row">
                       <div className="col-md-6 col-md-offset-3 col-xs-4 col-xs-offset-4">
                           <button type="submit" className="btn btn-success col-md-3 col-md-offset-3" onClick={this.createUser}>Create Profile!</button>
                       </div>
                   </div>
               </div>
           </div>
        );
    }
}

export default FormComponent;