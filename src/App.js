import { React , Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    let datas = this.state.datas;
    return (
        <form>
          <label>Name</label>
          <input type="text" ref="txtName"/>
          <label>Age</label>
          <input type="text" ref="txtAge"/>
          <button> Save</button>
        </form>
    )
  }
}
