import React, { Component, PropTypes } from 'react';
 

const Inputform = React.createClass({
  getInitialState() {
    return {pythonFinished:true};
  },
  TestClick(e){
    e.preventDefault();
    // var d = new Date();
    // d = d.toISOString();
    let that = this;
    var workspace = this.refs.workspace.value;
    var street = this.refs.street.value;
    var parcel = this.refs.parcel.value;
    parcel = parcel.replace(String.fromCharCode(92),String.fromCharCode(92,92));
    street = street.replace(String.fromCharCode(92),String.fromCharCode(92,92));
    var output = this.refs.output.value;
    if(workspace!=""&&output!=""){
      this.setState({
        pythonFinished:false
      });
      Meteor.call('runPython', workspace, street, parcel, output, function(err, results){
        if(err){
          console.log(err)
        }
        console.log(err);
        if(results){
          that.setState({
            pythonFinished:true
          });
          Materialize.toast(results, 4000);
        }
      });
    }
    else{ 
      if(workspace===""){
        Materialize.toast('Please type in workspace path', 4000);
      }
      if(output===""){
        Materialize.toast('Please type in output path', 4000);
      }
    }
    
  },
  onDrop(files) {
      console.log('Received files: ', files);
  },
  render() {

    const preloadClass = this.state.pythonFinished ? 'progress preloadHidden' : 'progress preloadShow';
    return (
      <div className="container mainStyle">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Settings</span>
              <div className="row">
                  <form className="col s12">
                    <div className="row">
                      <div className="input-field col s12">
                        <i className="material-icons prefix">dns</i>
                        <input ref="workspace" id="icon_prefix" type="text" className="validate" defaultValue="\\ZBRAFILE\DATA\Deptment\Planning\DCGIS_Administration\CITYWIDE\COB_PWD\COBUCS\COBUCS.gdb"/>
                        <label for="icon_prefix">Please copy and paste your workspace path...</label>
                      </div>
                      
                      <div className="input-field col s12">
                        <i className="material-icons prefix">shuffle</i>
                        <input ref="street" id="icon_prefix" type="text" className="validate" defaultValue="\autoli\AutoliDeptS\GISData\projects\pwd\cobucs_data\rte-sys.shp"/>
                        <label for="icon_prefix">Please copy and paste your street segment featureclass path...</label>
                      </div>

                      <div className="input-field col s12">
                        <i className="material-icons prefix">dashboard</i>
                        <input ref="parcel" id="icon_telephone" type="text" className="validate" defaultValue="parcel_15"/>
                        <label for="icon_telephone">Please copy and paste your parcel featureclass path...</label>
                      </div>

                      <div className="input-field col s12">
                        <i className="material-icons prefix">input</i>
                        <input ref="output" id="icon_telephone" type="text" className="validate" defaultValue="Art80_from_sql"/>
                        <label for="icon_telephone">Please type in the output file name...</label>
                      </div>

                      

                    </div>
                  </form>
                </div>
            </div>
            <div className="card-action">
              <a href="" className="waves-effect waves-light btn" onClick={this.TestClick}>Run</a>

            </div>
            <div className={preloadClass}>
                  <div className="indeterminate"></div>
              </div>
          </div>
        </div>
      </div>
    );
  }
});
// Task component - represents a single todo item
export default Inputform;