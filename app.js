class Prophencies extends React.Component {
  state = {
    prophencies: ["pierwszawróżba", "druga wróżba", "trzecia wróżba"],
    actualProphency: "",
    newProphency: ""
  };

  handleRandomProphency = () => {
    const number = Math.floor(Math.random() * this.state.prophencies.length);
    console.log(number);
    this.setState({
      actualProphency: this.state.prophencies[number]
    });
  };

  handleAddProphency = e => {
    this.setState({
      newProphency: e.target.value
    });
  };

  handleAddValueProphency = () => {
    let copyArray = [...this.state.prophencies];
    copyArray.push(this.state.newProphency);
    this.setState({
      prophencies: copyArray
    });
  };

  render() {
    return (
      <>
        <button onClick={this.handleRandomProphency}>Losój wróżbę</button>
        <h2>Wróżba na dzisiaj: {this.state.actualProphency}</h2>

        <label>
          Dodaj wróżbę
          <input
            value={this.state.newProphency}
            onChange={this.handleAddProphency}
          />
          <button onClick={this.handleAddValueProphency}>
            Dodaj tą wróżbę
          </button>
        </label>
      </>
    );
  }
}

ReactDOM.render(<Prophencies />, document.getElementById("root"));
