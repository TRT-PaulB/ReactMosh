import React from "react";

// USES ARGUMENT DESTRUCTURING WITH THE AUTOMATICALLY LOADED PROPS VARIABLE
const NavBar = ({ numItems }) => {
  // ie.  shorthand for props.numItems
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <span className="badge badge-pill badge-secondary">
          Total: {numItems}
        </span>
      </a>
    </nav>
  );
};

// BEFORE DESTRUCTUING PROPS ARGUMENT
// const NavBar = props => {
//   return (
//     <nav className="navbar navbar-light bg-light">
//       <a className="navbar-brand" href="#">
//         <span className="badge badge-pill badge-secondary">
//           Total: {props.numItems}
//         </span>
//       </a>
//     </nav>
//   );
// };

export default NavBar;
