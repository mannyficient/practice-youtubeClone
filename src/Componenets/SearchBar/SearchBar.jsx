import React, { Component } from "react";

export class SearchBar extends Component {
  state = { searchTerm: "" };

  onChangeInputHandler = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  onFormSubmitHandler = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className='search-bar ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmitHandler}>
          <div className='field'>
            <label>Search Term</label>
            <input
              type='text'
              value={this.state.searchTerm}
              onChange={this.onChangeInputHandler}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
