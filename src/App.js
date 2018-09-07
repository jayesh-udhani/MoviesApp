import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Table } from "antd";
import 'antd/dist/antd.css';
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
          <Column title="Movie" dataIndex="movie_title" />
          <Column title="Director" dataIndex="director_name" />
          <Column title="Actor 1" dataIndex="actor_1_name" />
          <Column title="Actor 2" dataIndex="actor_2_name" />
          <Column title="Genre" dataIndex="genres" />
          <Column title="Language" dataIndex="language" />
          <Column title="Country" dataIndex="country" />
          <Column title="Content Rating" dataIndex="content_rating" />
          <Column title="Budget" dataIndex="budget" />
          <Column title="Year" dataIndex="title_year" />
          <Column title="Plot Keywords" dataIndex="plot_keywords" />
          <Column title="IMDB Link" dataIndex="movie_imdb_link" />
        </Table>
      </div>
    );
  }
}

export default App;
