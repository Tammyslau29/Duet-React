import React from 'react';
import {render} from 'react-dom';

class FormComponent extends React.Component {

    render() {

        const skillSets = ['Vocals', 'Guitar', 'Bass', 'Drums', 'DJ', 'Keyboard/Piano', 'Composing', 'Violin/Viola', 'Cello', 'Clarinet', 'Flute', 'Harp', 'Bassoon', 'Saxophone']
        return (
           <div>
               <div className="form_body col-md-6 col-md-offset-3 well">
                   <div className="row avatar_img col-md-6 col-md-offset-3">
                       <img src="https://www.wpsymposiumpro.com/wp-content/uploads/2014/04/iStock_000033523696Small.jpg"/>
                   </div>
                   <div className="form-group row">
                       <div className="col-md-12">
                           <label>Name</label>
                           <input className="form-control" type="text" id="name_input" placeholder="Jenkins, Leroy"/>
                       </div>
                   </div>
                   <div className="form-group row">
                       <div className="col-md-12">
                           <label>Location</label>
                           <input className="form-control" type="text" id="location_input" placeholder="Anaheim, CA"/>
                       </div>
                   </div>
                   <div className="form-group row">
                       <div className="col-md-2">
                           <label>Age</label>
                           <input className="form-control" type="number" id="age_input" placeholder="Age"/>
                       </div>
                   </div>
                   <div className="form-group row">
                       <div className="col-md-12">
                           <label>About Me</label>
                           <textarea className="form-control" type="text" id="description_input" placeholder="I hope one day I love something the way women in commercials love yogurt."></textarea>
                       </div>
                   </div>
                   <div className="form-group row">
                       <div className="col-md-12">
                           <label>I'm interested in finding other..i.e bands, vocalists, guitarists</label>
                           <select className="form-control" type="text" id="interest_input" placeholder="I'm interested in finding other..">
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
                           <div className="checkbox" type="text" id="skill_set_input" placeholder="i.e Guitar, Bass, Vocals">
                               {
                                   skillSets.map((skill) => {
                                       return (
                                           <label><input type="checkbox"/>{skill}</label>
                                       )
                                   })
                               }
                           </div>
                       </div>
                   </div>
                   <div className="form-group row">
                       <div className="col-md-12">
                           <label>Gear</label>
                           <input className="form-control" type="text" id="equipment_input" placeholder="Hornucopian Dronepipe, Octobass.."/>
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
                           <button type="submit" className="btn btn-success col-md-3 col-md-offset-3" onclick="create_object()">Create Profile!</button>
                       </div>
                   </div>
               </div>
           </div>
        );
    }
}

export default FormComponent;