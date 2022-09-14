import { React, Component } from 'react';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            title : "CRUD APP",
            act : 0,
            idx : '',
            datas : []
        }
    }

    componentDidMount(){
        this.refs.txtName.focus();
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        let datas = this.state.datas;
        let name = this.refs.txtName.value;
        let age = this.refs.txtAge.value;

        if(this.state.act === 0)
        {
            let data = {
                "name" : name,
                "age" : age
            }
            datas.push(data);
        }
        else
        {
            let index = this.state.idx;
            datas[index].name = name;
            datas[index].age = age;
        }

        this.setState({
            datas : datas,
            act : 0
        })
        this.refs.myForm.reset();
        this.refs.txtName.focus();
    }

    handleDelete = (index) =>{
        let datas = this.state.datas;
        datas.splice(index,1);
        this.setState({
            datas:datas
        })
        this.refs.txtName.focus();
    }

    handleEdit = (index) => {
        let data = this.state.datas[index];
        this.refs.txtName.value = data.name;
        this.refs.txtAge.value = data.age;
        this.setState({
            act: 1,
            idx : index
        })
    }

    render() {
        let datas = this.state.datas;
        return (
            <div className="App">

                <form ref="myForm" className="form">
                    <h1>{this.state.title}</h1>
                    <label>Name</label>
                    <input type="text" ref="txtName" className="field"/>
                    <label>Age</label>
                    <input type="text" ref="txtAge"  className="field"/>
                    <button onClick={e => this.handleSubmit(e)} className="button"> Save</button>
                </form>
                <pre className="list">
          {datas.map((data,index)=>
              <li key={index}>
                  {index+1}, {data.name} ,{data.age}
                  <button onClick={e => this.handleDelete(index)} className="listbutton">Delete</button>
                  <button onClick={e => this.handleEdit (index)} className="listbutton">Edit</button>
              </li>
          )
          }
        </pre>
            </div>
        );
    }
}

export default App;