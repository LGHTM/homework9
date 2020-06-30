import React from "react";

export const withLocalStorage = (Component, initialValue, storageKey) => {
  class WithLocalStorage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: initialValue,
      };
    }

    handleChange = (e) => {
      this.setState({value: e.target.value});
    }

    render() {
      console.log(storageKey)
      console.log(this.props.onChange)
      return (
        <>
          <Component
            {...this.props}
            value={this.state.value}
            // onChange={this.handleChange}
          />
        </>
      );
    }
  }

  return WithLocalStorage;
};
