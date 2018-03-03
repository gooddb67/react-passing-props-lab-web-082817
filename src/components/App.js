import React from 'react';

import FruitBasket from './FruitBasket';

// const App = () => <FruitBasket />;

class App extends React.Component{

  state = {
    fruit: [],
    filters: [],
    currentFilter: null
  }

    componentWillMount() {
      this.fetchFilters();
      this.fetchFruit();
    }

    fetchFruit() {
      fetch('/api/fruit')
        .then(response => response.json())
        .then(fruit => this.setState({ fruit }));
    }

    fetchFilters = () => {
      fetch('/api/fruit_types')
        .then(response => response.json())
        .then(filters => this.setState({ filters }));
    }

    handleFilterChange = event => {
      console.log('new filter: ', event.target.value);
      this.setState({ currentFilter: event.target.value });
    }

  render(){
    return(
      <div>
        <FruitBasket
          filters={this.state.filters}
          handleFilterChange={this.handleFilterChange}
          fruit={this.state.fruit}
          selectedFilter={this.state.currentFilter}
        />
      </div>
    )
  }
}

export default App;
