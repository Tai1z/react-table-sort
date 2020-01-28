import React from 'react';

class RowColSelect extends React.Component {
  state = {
    myValue: '32',
  }
  
  onChangeHandler = (e) => {
    this.setState({ myValue: e.currentTarget.value })
  }

  render() {
    return(
      <form onSubmit={this.props.selectMethod}>
        <label>Или задайте свое колличество!</label>
        <input type="range" className="custom-range" name="rows" min="32" max="1000" onChange={this.onChangeHandler}
        value={this.state.myValue}  step="1" id="customRange"></input>
  <button className="btn btn-primary" style={{margin: '0 10px'}}>Вывести строк: {this.state.myValue}</button>
      </form>
    );
  }
}

export default RowColSelect;