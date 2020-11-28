import React from 'react'
import "../scss/pplList.scss"
import { Link } from "react-router-dom";
export default function PplList(props) {
      const { items } = props;
      return (
            <div className="col-4">
                  <Link
                        to={{
                              pathname: "/users/" + items.id.value,
                              state: {
                                    items: props.items
                              }
                        }}
                  >
                        <div key={items.id.value} className="mmpplList">
                              <div className="card mb-3">
                                    <div className="cardHeader-color text-white p-5 mb-5 ">
                                          <div className="text-center">
                                                {" "}
                                                {items.name.first} {items.name.last}
                                          </div>
                                    </div>
                                    <div className="divider avatar mx-auto">
                                          <img
                                                className="rounded-circle img-fluid manageImage"
                                                src={items.picture.large}
                                                alt="Card cap"
                                          />
                                    </div>
                                    <div className="card-body mx-auto">
                                          <div>
                                                <span className="card-title">Gender: </span>
                                                <span className="card-text mb-3">{items.gender}</span>
                                          </div>
                                          <div>
                                                <span className="card-title">Email: </span>
                                                <span className="card-text mb-3">{items.email}</span>
                                          </div>
                                          <div>
                                                <span className="card-title">Phone Number: </span>
                                                <span className="card-text mb-3">{items.phone}</span>
                                          </div>

                                          <div>
                                                <span className="card-title">Location: </span>
                                                <span className="card-text mb-3">
                                                      {items.location.city}, {items.location.state}
                                                </span>
                                          </div>

                                    </div>
                              </div>
                        </div>
                  </Link>
            </div>
      )
}
