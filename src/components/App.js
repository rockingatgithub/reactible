// =========================================main app component===========================================

import React, { Component } from "react";
import TopBar from "./TopBar";
import SecondBar from "./SecondBar";
import MidBar from "./MidBar";
import List from "./List";
import BottomBar from "./BottomBar";
import LastSection from "./LastSection";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  // ==============================fetch all images======================================================

  componentDidMount = async () => {
    let self = this;
    await fetch(
      "https://pixabay.com/api/?key=18458822-78566bd7f972974a0cbe5750d&per_page=30&image_type=photo"
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        self.setState({
          list: res.hits,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const { list } = this.state;
    return (
      <div className="App">
        <TopBar />
        <SecondBar />
        <MidBar />
        <List list={list} />
        <BottomBar />
        <LastSection />
      </div>
    );
  }
}

export default App;
