import React from "react";
import { MDBProgress, MDBContainer,MDBBtn,MDBIcon,MDBCollapse} from 'mdbreact';

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
      {name:'.Net', value:95 },
      {name:'Relation Data bases', value:85 },
      {name:'No Relation Data bases', value:80 },
      {name:'Html', value:95},
      {name:'Css', value:90 },
      {name:'Sass', value:85 },
      {name:'JavaScript', value:90 },
      {name:'jquery', value:90 },
      {name:'Angular', value:55},
      {name:'Vue.js', value:35},
      {name:'React Native', value:80},
      {name:'Node', value:80 },
      {name:'Boostrap', value:100 },
    ],
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
        console.log(`%cEl lenguaje donde mas dominio poseo es ${this.state.Tecnologys[0].name} y en el que tengo mucho punto de mejora ${this.state.Tecnologys[this.state.Tecnologys.length - 1].name}`, 'color: orange;')
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