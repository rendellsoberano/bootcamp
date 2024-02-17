import { Component } from "react";

class Election extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes_mayor: [0, 0],
      votes_vice: [0, 0],
    };
  }

  getMayorVote = (event) => {
    let vote_mayor = event.target.candidate_mayor.value;
    vote_mayor = Number(vote_mayor);
    let vm = this.state.votes_mayor;
    vm[vote_mayor] += 1;
    this.setState({ votes_mayor: vm });
  };

  getViceVote = (event) => {
    let vote_vice = event.target.candidate_vice.value;
    vote_vice = Number(vote_vice);
    let vvm = this.state.votes_vice;
    vvm[vote_vice] += 1;
    this.setState({ votes_vice: vvm });
  };

  submitVotes = (event) => {
    event.preventDefault();
    this.getMayorVote(event);
    this.getViceVote(event);
  };

  render = () => {
    return (
      <>
        <h1>Voting Form</h1>
        <form onSubmit={this.submitVotes}>
          <h2>Mayor</h2>
          <input type="radio" name="canididate_mayor" value="0" />
          <label>Dina Pili</label>
          <input type="radio" name="canididate_mayor" value="1" />
          <label>Dina Pili</label>
          <h2>Vice Mayor</h2>
          <input type="radio" name="canididate_vice" value="0" />
          <label>Pat Tumbakita</label>
          <input type="radio" name="canididate_vice" value="1" />
          <label>Ben Eko</label>
          <br />
          <input type="submit" class="btn btn-primary" />
          <input />
        </form>
        <table>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Total Votes</th>
          </tr>
          <tr>
            <td>Dina Pili</td>
            <td>Mayor</td>
            <td>{this.state.votes_mayor[0]}</td>
          </tr>
          <tr>
            <td>Lucky Chan</td>
            <td>Mayor</td>
            <td>{this.state.votes_mayor[1]}</td>
          </tr>
          <tr>
            <td>Pat Tumbakita</td>
            <td>Vice Mayor</td>
            <td>{this.state.votes_vice[0]}</td>
          </tr>
          <tr>
            <td>Ben Eko</td>
            <td>Vice Mayor</td>
            <td>{this.state.votes_vice[1]}</td>
          </tr>
        </table>
      </>
    );
  };
}

export default Election;
