import './style/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import DashboardContainer from './component/dashboard-container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notesArr: []
    }
    this.getNote = this.getNote.bind(this)
  }

  getNote() {
    return {
      state: this.state,
      setState: this.setState.bind(this)
    }
  }

  componentDidUpdate(){
    console.log('___STATE___', this.state);
  }

  render() {
    return (
      <main>
        <BrowserRouter>
          <section>
            <Route exact path='/' component={() => <DashboardContainer app={this.getNote()} />} />
          </section>
        </BrowserRouter>
      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
