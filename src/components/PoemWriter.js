import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: "",
      err: "This poem is not written in the right structure!"
    };
  }

  handlePoem = event => {
    this.setState({ poem: event.target.value });
    let poemArr = this.state.poem.split("\n").map(line => line.trim());
    let lineOne = poemArr[0] ? poemArr[0].split(" ").length : 0;
    let lineTwo = poemArr[1] ? poemArr[1].split(" ").length : 0;
    let lineThree = poemArr[2] ? poemArr[2].split(" ").length : 0;
    console.log(lineOne);
    if (
      poemArr.length === 3 &&
      lineOne === 5 &&
      lineTwo === 3 &&
      lineThree === 5
    ) {
      this.setState({
        err: ""
      });
    } else {
      this.setState({
        err: "This poem is not written in the right structure!"
      });
    }
  };

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.handlePoem} />
        <div id="poem-validation-error" style={{ color: "red" }}>
          {this.state.err}
        </div>
      </div>
    );
  }
}

export default PoemWriter;
