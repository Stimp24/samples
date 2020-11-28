//Libraries
import React, { Component } from 'react'

//components
import FilterType from "./components/filterType"
import PplList from "./components/pplList"
import Search from "./components/search"



export class Dashboard extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  newData: null,
                  results: [],
                  search: "",
                  filter: ""
            };
            this.handleChange = this.handleChange.bind(this);
      }

      componentDidMount() {
            fetch(`https://randomuser.me/api/?results=15`)
                  .then(response => response.json())
                  .then(data => this.setState({ data, results: data.results }));
      }

      handleChange = e => {
            this.setState({
                  [e.target.name]: e.target.value
            });
      };

      render() {
            const profileData = this.state.results;
            let listProfile = profileData.filter(items => {
                  if (this.state.search) {
                        return items.name.first
                              .toLowerCase()
                              .includes(this.state.search.toLowerCase());
                  }
                  if (this.state.filter) {
                        return items.gender
                              .toLowerCase()
                              .indexOf(this.state.filter.toLowerCase());
                  } else return items;
            });
            return (
                  <div className="container">
                        <div className="row">
                              <div className="col-12 mb-5">
                                    <Search
                                          handleChange={this.handleChange}
                                          profileData={profileData}
                                    />
                              </div>
                        </div>
                        <div className="row">
                              <div className="col-12 mb-3">
                                    <FilterType handleChange={this.handleChange} />
                              </div>
                        </div>

                        <div className="row">
                              {listProfile &&
                                    listProfile.map((items, index) => {
                                          return (
                                                <PplList
                                                      index={index}
                                                      items={items}
                                                      profileData={profileData}
                                                />
                                          );
                                    })}
                        </div>
                  </div>

            );
      }
}



export default Dashboard


