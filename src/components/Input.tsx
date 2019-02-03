// README: this class demonstrate basic class based component that use an Input and onChange event handling.

import * as React from "react";

interface IState {
  term: string;
}
class Input extends React.Component<{}, IState> {
  public state = { term: "" };
  public handleChange: React.ChangeEventHandler = event => {
    console.log("term: " + (event.target as HTMLInputElement).value);
    this.setState({ term: (event.target as HTMLInputElement).value });
  };
  public render() {
    return (
      <div>
        <label>Username: </label>
        <input
          name="username"
          onChange={this.handleChange}
          value={this.state.term}
        />
      </div>
    );
  }
}

export default Input;
