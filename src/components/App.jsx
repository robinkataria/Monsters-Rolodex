import React, { Component } from "react";
import CardList from "./CardList/CardList.component";
import SearchBox from "./SearchBox/SearchBox.component";

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: "",
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => this.setState({ monsters: users }));
    }

    handleChange = (event) =>
        this.setState({ searchField: event.target.value });

    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter((monster) =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <div>
                <h1>Monster Rolodex</h1>
                <SearchBox
                    placeholder="Search Monster..."
                    handleChange={this.handleChange}
                />
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;
