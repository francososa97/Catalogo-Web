import React from "react";
import { MDBProgress, MDBContainer,MDBCollapse,MDBIcon,MDBRow,MDBCol} from 'mdbreact';

class Progress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      collapseProgress: false,
      collapseID: '',
      Tecnologys: [
        {name:'React', value:75 },
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
        {name:'React Native', value:95 },
        {name:'Node', value:40 },
        {name:'Boostrap', value:70 },
      ]
    };
    this.onClick = this.onClick.bind(this);
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
  
  render() {
    let tecnoValues= []
    let arrayOrder= []

      this.state.Tecnologys.forEach(e=>{
        tecnoValues.push(e.value)
      })
      console.log("desordenado")
      console.log(tecnoValues)
      console.log("ordenado")
      console.log(tecnoValues.sort())
      this.state.Tecnologys.forEach(Tecnoloy=>{
        tecnoValues.forEach(tecnoValue =>{
            if(Tecnoloy.value === tecnoValue )
            {
              arrayOrder.push(Tecnoloy)
            }
        })
      })
      console.log("arrayOrder")
      console.log(arrayOrder)
  return (
    <>
    <MDBContainer className="mt-5 mb-4 text-center text-md-left">
          <h2 className="h1-responsive font-weight-bold text-center my-5" onClick={()=> this.toggleSingleCollapse('collapseProgress')}>
            Conocimiento tecnico
            {this.state.collapseProgress ? <MDBIcon icon="angle-double-up" className="ml-3"/> : <MDBIcon icon="angle-double-down" className="ml-3"/>}
            
          </h2>
       
      <MDBCollapse isOpen={this.state.collapseProgress}>
      {this.state.Tecnologys.map(Tecnology=>{
          return (
            <>
              <p className="font-weight-bold mt-4">
              {Tecnology.name}
              </p>
              <MDBProgress material value={Tecnology.value} height="20px">
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