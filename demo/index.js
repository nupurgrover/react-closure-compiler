// Does not use JSX since JSX compilation is assumed to take place before
// inputs are given to Plovr/the Closure Compiler.
var DemoCounter = React.createClass({
  displayName: "DemoCounter",
  getInitialState: function() {
    return {count: 0};
  },
  render: function() {
    return React.createElement("div", null,
      "Count: ", this.state.count,
      React.createElement(
        "button", {onClick: this.increment}, "Internal Increment")
    );
  },
  increment: function() {
    this.setState({count: this.state.count + 1});
  }
});

var counterInstance = React.render(
    React.createElement(DemoCounter),
    document.querySelector("#container"));

// Not necessarily what we would do in a production app, but demonstrates that
// methods on instantiated React elements can be called without warnings.
document.querySelector("#button").addEventListener(
  "click",
  function(e) {
    counterInstance.increment();
  });
