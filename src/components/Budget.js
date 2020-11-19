import React from "react";

export default class Budget extends React.Component {

    handleChange = (e) => {
        this.props.onInputChange(e.target.value)
    }


    render() {
        const { currency } = this.props;
        return (
            <fieldset>
                <legend>your budget</legend>
                <label>{`Enter in ${currency}`}</label>
                <input value={this.props.value} onChange={this.handleChange} />
            </fieldset>
        )
    }
}