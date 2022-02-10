import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

<BrowserRouter basename={window.location.pathname || ''}>
  <Route exact path="/" component={Index} />
</BrowserRouter>

ReactDOM.render(<App />, document.getElementById("root"))