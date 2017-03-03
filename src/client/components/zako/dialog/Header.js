import React from 'react';

export default function Header({title}) {
    return (
        <div><h1>{title}</h1></div>
    );
}

Header.propTypes = {
    title:   React.PropTypes.string.isRequired
};
