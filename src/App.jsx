import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    total: 0,
    value: "",
    oldNumber: ""
  }
  typeIn(num) {
    if (isNaN(num)) {
      const _oldNumber = this.state.value;
      this.setState({ value: num, oldnumber: _oldNumber });
    }
    else {
      let newValue = this.state.value + num
      this.setState({ value: newValue })
    }
  }
  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="column padding-y-5">
            <p className="title">THE BIGGEST CALCULATOR</p>
            <p className="subtitle"> Its Amazing !</p>
          </div>

          <div className="column padding-y-5">
            <div className="columns padding-x-3">

              <div className="column">
                <p className="has-text-grey">=</p>
              </div>

              <div className="column">
                <p className="has-text-right">{this.state.total}</p>
              </div>

            </div>
            <p className="has-text-right">{this.state.oldnumber}</p>
            <input type="text" className="input has-text-right" placeholder="Equation" value={this.state.value} />

            <div className="columns">

              <div className="column padding-y-1">
                <button class="button full-width has-background-grey-light" onClick={() => this.typeIn("(")}>(</button>
              </div>
              <div className="column padding-y-1">
                <button class="button full-width has-background-grey-light" onClick={() => this.typeIn(")")}>)</button>
              </div>

              <div className="column padding-y-1">
                <button class="button full-width has-background-grey-light">%</button>
              </div>

              <div className="column padding-y-1">
                <button class="button full-width has-background-link  has-text-white">AC</button>
              </div>
            </div>
            <div className="columns">

              <div className="column">
                <button class="button full-width has-background-light" onClick={() => this.typeIn(7)}>7</button>
              </div>
              <div className="column">
                <button class="button full-width has-background-light" onClick={() => this.typeIn(8)}>8</button>
              </div>

              <div className="column">
                <button class="button full-width has-background-light" onClick={() => this.typeIn(9)}>9</button>
              </div>

              <div className="column">
                <button class="button full-width has-background-grey-light" onClick={() => this.typeIn("/")}>/</button>
              </div>
            </div>

            <div className="columns">

              <div className="column">
                <button class="button full-width has-background-light" onClick={() => this.typeIn(4)}>4</button>
              </div>
              <div className="column">
                <button class="button full-width has-background-light" onClick={() => this.typeIn(5)}>5</button>
              </div>

              <div className="column">
                <button class="button full-width has-background-light" onClick={() => this.typeIn(6)}>6</button>
              </div>

              <div className="column">
                <button class="button full-width has-background-grey-light" onClick={() => this.typeIn("*")}>x</button>
              </div>
            </div>

            <div className="columns">

              <div className="column">
                <button class="button full-width has-background-light" onClick={() => this.typeIn(1)}>1</button>
              </div>
              <div className="column">
                <button class="button full-width has-background-light" onClick={() => this.typeIn(2)}>2</button>
              </div>

              <div className="column">
                <button class="button full-width has-background-light" onClick={() => this.typeIn(3)}>3</button>
              </div>

              <div className="column">
                <button class="button full-width has-background-grey-light" onClick={() => this.typeIn("-")}>-</button>
              </div>
            </div>


            <div className="columns">

              <div className="column">
                <button class="button full-width has-background-light" onClick={() => this.typeIn(0)}>0</button>
              </div>
              <div className="column">
                <button class="button full-width has-background-light" onClick={() => this.typeIn(".")}>.</button>
              </div>

              <div className="column">
                <button class="button full-width has-background-link has-text-white " onClick={() => this.typeIn("=")}>=</button>
              </div>

              <div className="column">
                <button class="button full-width has-background-grey-light" onClick={() => this.typeIn("+")}>+</button>
              </div>
            </div>



          </div>

        </div>

      </div>

    )
  }
}






export default App;
