import React from "react";
import { MDBProgress, MDBContainer,MDBCollapse,MDBIcon,MDBBtn} from 'mdbreact';

class Progress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      collapseProgress: false,
      collapseID: '',
      stateOrder: true,
      Tecnologys: [{name:'React', value:95 },
      {name:'.Net', value:55 },
      {name:'Asp.Net core', value:45 },
      {name:'Sql', value:65 },
      {name:'Mongo', value:20 },
      {name:'Html', value:95},
      {name:'Css', value:80 },
      {name:'Sass', value:85 },
      {name:'Responsive', value:90 },
      {name:'JavaScript', value:85 },
      {name:'jquery', value:90 },
      {name:'Vue.js', value:35},
      {name:'React Native', value:75},
      {name:'Node', value:40 },
      {name:'Boostrap', value:70 },],
    };
    this.onClick = this.onClick.bind(this);
    this.Order = this.Order.bind(this);
  }
  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
  }
  
  toggleSingleCollapse = collapseId => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId]
    });
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  Order(){
    if(this.state.stateOrder)
    {
      this.state.Tecnologys.sort(function (a, b){
        return (b.value - a.value)
        })
    }
    else
    {
      this.state.Tecnologys.sort(function (a, b){
        return (a.value - b.value)
      })
    }
    this.setState({
      stateOrder: !this.state.stateOrder
    });
  }
  render() {
  return (
    <>
    <MDBContainer className="mt-5 mb-4 text-center text-md-left">
          <h2 className="h1-responsive font-weight-bold text-center my-5" onClick={()=> this.toggleSingleCollapse('collapseProgress')}>
            Conocimiento tecnico
            {this.state.collapseProgress ? <MDBIcon icon="angle-double-up" className="ml-3"/> : <MDBIcon icon="angle-double-down" className="ml-3"/>}
          </h2>
      <MDBCollapse isOpen={this.state.collapseProgress}>
      <MDBBtn color="info" onClick={()=> this.Order()}>Ordenar {this.state.stateOrder? "descendentemente" : "ascendentemente"} </MDBBtn>
      {this.state.Tecnologys.map(Tecnology=>{
          return (
            <>
              <p className="font-weight-bold mt-4">
              {Tecnology.name}
              </p>
              <MDBProgress key={Tecnology.name} material value={Tecnology.value} height="20px">
                {Tecnology.value + "%"}
              </MDBProgress>
            </>
          );
        })}
      </MDBCollapse>
    </MDBContainer>
    </>
     );
    }
}
  
export default Progress;