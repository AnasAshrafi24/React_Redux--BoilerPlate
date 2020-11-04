import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Child from './components/Child'
import { set_data } from './store/action'



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,

    }
    // console.log("constructor")
  }







  // componentDidMount() {
  //   console.log("componentDidMount")
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then(response => response.json())
  //     .then(data =>{
  //       console.log(data)
  //       this.setState({
  //         data:data
  //       })
  //     } )
  //     .catch(err => console.log(err))
  // }

  //   static getDerivedStateFromProps(props, state) {
  //     console.log("getDerivedStateFromProps Child",props)
  //     return null

  // }



  // shouldComponentUpdate(){
  //    if(this.state.count < 5){
  //      return true
  //    }else{
  //      return false
  //    }
  // }


  // getSnapshotBeforeUpdate(preProps, preState) {
  //   console.log("getSnapshotBeforeUpdate", preState)
  //   return 10
  // }

  // componentDidUpdate(preProps, preState, Snapshot) {
  //   console.log("componentDidUpdate",Snapshot)
  // }

  render() {
    console.log("redux_data=>", this.props)



    return (
      <div style={{ textAlign: "center" }}>
        { this.state.count < 5 && <Child count={this.state.count} />}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>Dicrement</button>
  <br></br>
  
           <button onClick={()=>this.props.set_data("Data is going")}>Set Data</button>

        {/* {this.state.data.map((v,i)=>{
          return <h4>{v.title}</h4>
        
        
        })} */}
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  username: state.auth.username,
  email: state.auth.email,
  app_name: state.app.app_name
})



const mapDispatchToProps = (dispatch) =>( {
   
  set_data: (data)=> dispatch(set_data(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
