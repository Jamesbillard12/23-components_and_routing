import React from 'react';

class NoteList extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.notesArr.map((item, i) => {
            return (
              <li key = {i}>
                <h2>{item.title}</h2>
                <span>
                  <p>{item.content}</p>
                </span>
              </li>
            );
          }
        )}
      </ul>
    </div>
    );
  }
}

export default NoteList;
