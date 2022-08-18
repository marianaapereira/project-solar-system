import React from 'react';
import PropTypes from 'prop-types'; // necessário para validação da prop

class Title extends React.Component {
  render() {
    const { headline } = this.props;

    return (
      <h2>
        { headline }
      </h2>
    );
  }
}

// validação da prop
Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
