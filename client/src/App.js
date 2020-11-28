import React, { Component } from "react";

import SiteRouter from "./Pages/Routes/siteRouter";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Provider store={store}> */}
        <SiteRouter />
        {/* </Provider> */}
      </div>
    );
  }
}

export default App;
