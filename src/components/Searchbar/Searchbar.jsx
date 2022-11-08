import { Component } from 'react';
// import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
  SearchBarStyled,
  SearchForm,
  SearchInput,
  ButtonSearch,
} from './SearchbarStyle.js';

class SearchBar extends Component {
  render() {
    return (
      <SearchBarStyled>
        <Formik
          initialValues={{ search: '' }}
          onSubmit={(values, actions) => {
            this.props.onSubmit(values.search);
            actions.setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <SearchForm>
              {isSubmitting && <div>Loading...</div>}
              <SearchInput
                name="search"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
              />
               <ButtonSearch
                type="submit"
                className="button"
                disabled={isSubmitting}
              ></ButtonSearch>
            </SearchForm>
          )}
        </Formik>
      </SearchBarStyled>
    );
  }
}

export default SearchBar;

// SearchBar.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
// };
