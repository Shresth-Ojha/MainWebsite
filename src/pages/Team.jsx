import React from 'react';
import PropTypes from 'prop-types';

class Team extends React.Component {
  renderProjects() {
    const { data, isLoading, error } = this.props;

    if (isLoading) {
      return 'Loading';
    }
    if (error) {
      return 'Error';
    }

    const renders = [];

    for (let i = 0; i < data.length; i += 1) {
      const project = (
        <li key={`member${i}`}>
          {data[i].name}
        </li>
      );
      renders.push(project);
    }

    return renders;
  }

  render() {
    return (
      <div>
        Members
        <ul>
          {this.renderProjects()}
        </ul>
      </div>
    );
  }
}

Team.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

export default Team;
