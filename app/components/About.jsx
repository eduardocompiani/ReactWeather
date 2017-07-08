var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <h2>About component</h2>
//       </div>
//     );
//   }
// });

// example of arrow function
var About = (props) => {
  return (
    <h2>About component</h2>
  );
}

module.exports = About;
