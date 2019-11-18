import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import tvApiService from '../services/tv-api-service';
import Searchbar from '../components/Searchbar';

export default class MoviesPage extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({ movieId: PropTypes.string }),
      path: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  };

  state = {
    results: [],
  };

  componentDidMount() {
    const { location } = this.props;
    const query = new URLSearchParams(location.search).get('query');

    if (!query) {
      return;
    }

    tvApiService.fetchMovieWithQuery(query).then(results => {
      this.setState({ results });
    });
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    const prevQuery = new URLSearchParams(prevProps.location.search).get(
      'query',
    );
    const nextQuery = new URLSearchParams(location.search).get('query');

    if (prevQuery === nextQuery) {
      return;
    }

    tvApiService.fetchMovieWithQuery(nextQuery).then(results => {
      this.setState({ results });
    });
  }

  setSearchQuery = searchQuery => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${searchQuery}`,
    });
  };

  render() {
    const { results } = this.state;
    const { match } = this.props;
    return (
      <div>
        <h1>Movie page</h1>

        <Searchbar onSearch={this.setSearchQuery} />
        <ul>
          {results.map(result => (
            <li key={result.id}>
              <Link to={`${match.url}/${result.id}`}>
                {result.name}
                {result.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
