import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const GET_MESSAGES_REQUEST = 'GET_MESSAGES_REQUEST';

function getMessages() {
  console.log('getMessages() Action!!');
  return {
    type: GET_MESSAGES_REQUEST,
  };
}

class HelloWorld extends React.Component {
  render() {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
        <button
          className="getMessagesBtn"
          onClick={() => this.props.getMessages()}
        >
          GetMessages
        </button>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  messages: (state) => state.messages,
});

const mapDispatchToProps = { getMessages };

export default connect(
  structuredSelector,
  mapDispatchToProps,
)(HelloWorld);
