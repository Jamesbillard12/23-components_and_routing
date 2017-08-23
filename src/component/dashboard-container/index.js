import React from 'react';
import uuid from 'uuid/v1';

import NoteCreateForm from '../note-create-form';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.noteCreate = this.noteCreate.bind(this);
  }

  noteCreate(note) {
    note.id = uuid();
    this.props.app.setState(state => ({
      notesArr: [...state.notesArr, note]
    }));
  }

  render() {
    return (
      <div>
        <p>Hello</p>
        <NoteCreateForm handleNoteCreate={this.noteCreate} />
      </div>
    )
  }
}

export default DashboardContainer;
