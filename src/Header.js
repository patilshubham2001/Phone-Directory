
import React from 'react';
import './Header.css'
// we create function component for code reUsabality
const Header = function (props) {

    return (
        <div className='header'>
            {props.heading}
        </div>
    );
}

export default Header;

// --------------------------------------Class Components----------------------------------------------------


// class Header extends React.Component {
//     render() {
//         return (
//             <div className='header'>
//                 {this.props.heading}
//             </div>
//         );
//     }
// }

// export default Header;