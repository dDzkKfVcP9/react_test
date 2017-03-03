import React from 'react';


export default class MyComponent extends React.Component {

    render() {
        const {onClickEvent} = this.props;
        return <div className="mybutton" onClick={onClickEvent}></div>;
    };
}

MyComponent.propTypes = {
    onClickEvent:   React.PropTypes.func.isRequired
};