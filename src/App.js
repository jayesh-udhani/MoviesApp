import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Table } from "antd";
const { Column } = Table;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
  }
  componentDidMount() {
    const url = "http://starlord.hackerearth.com/movieslisting";
    axios
      .get(url)
      .then(response => {
        //console.log(response.data);
        this.setState({ movies: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    console.log("STATE ", this.state.movies);
    const { movies } = this.state;
    return (
      <div>
        <Table dataSource={movies} rowKey="movie_title">
          <Column title="Movie" dataIndex="movie" />
          <Column title="Director" dataIndex="director" />
          <Column title="Actor 1" dataIndex="actor1" />
          <Column title="Actor 2" dataIndex="actor2" />
          <Column title="Genre" dataIndex="genre" />
          <Column title="Language" dataIndex="language" />
          <Column title="Country" dataIndex="country" />
          <Column title="Content Rating" dataIndex="rating" />
          <Column title="Budget" dataIndex="budget" />
          <Column title="Year" dataIndex="year" />
          <Column title="Plot Keywords" dataIndex="plot" />
          <Column title="IMDB Link" dataIndex="link" />
        </Table>
      </div>
    );
  }
}

export default App;
