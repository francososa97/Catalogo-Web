import React, { Component } from "react";
import {MDBCollapse, MDBCard, MDBCardBody,MDBBox} from "mdbreact";
import VideoModal from './VideoModal';
class WorkExperience extends Component {
state={
  collapseID: "collapse1"
}

toggleCollapse = collapseID => () =>
  this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  }));

render() {
const { collapseID } = this.state;
const translate = this.props.translate;
  return (
    <>
        <MDBCard className="mt-5">
          <MDBBox className="m-1 ml-3" onClick={this.toggleCollapse("collapse1")}>
            {translate.titleExperiencie17}
            <i className={ collapseID==="collapse1" ? "fa fa-angle-down rotate-icon m-2" : "fa fa-angle-down m-2" } />
          </MDBBox>
          <MDBCollapse id="collapse1" isOpen={collapseID}>
            <MDBCardBody>
              {translate.bodyExperiencie17}
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>

        <MDBCard>
          <MDBBox className="m-1 ml-3 my-3" onClick={this.toggleCollapse("collapse2")}>
          {translate.titleExperiencie19}
            <i className={ collapseID==="collapse2" ? "fa fa-angle-down rotate-icon m-2" : "fa fa-angle-down m-2" } />
          </MDBBox>
          <MDBCollapse id="collapse2" isOpen={collapseID}>
            <MDBCardBody>
                {translate.bodyExperiencie19}
              <VideoModal btnVideo={translate.btnVideo}/>
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>

        <MDBCard>
          <MDBBox className="m-1 ml-3 my-3" onClick={this.toggleCollapse("collapse3")}>
          {translate.titleExperiencie20}
            <i className={ collapseID==="collapse3" ? "fa fa-angle-down rotate-icon m-2" : "fa fa-angle-down m-2" } />
          </MDBBox>
          <MDBCollapse id="collapse3" isOpen={collapseID}>
            <MDBCardBody>
                {translate.bodyExperiencie20}
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>

        <MDBCard>
          <MDBBox className="m-1 ml-3 my-3" onClick={this.toggleCollapse("collapse4")}>
          {translate.titleExperiencie21}
            <i className={ collapseID==="collapse4" ? "fa fa-angle-down rotate-icon m-2" : "fa fa-angle-down m-2" } />
          </MDBBox>
          <MDBCollapse id="collapse4" isOpen={collapseID}>
            <MDBCardBody>
                {translate.bodyExperiencie21}
            </MDBCardBody>
          </MDBCollapse>
        </MDBCard>
      </>
    );
  }
}

export default WorkExperience;