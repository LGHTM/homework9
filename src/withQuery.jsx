import React from "react";


export const withQuery = (Component) => {
  class WithQuery extends React.Component {

    static displayName = `${withQuery.name}(${
      Component.displayName || Component.name || ""
    })`;

    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
        error: false,
        data: null,
      };
    }

    async componentDidMount() {
      try {
        const response = await fetch(this.props.url);
        const data = await response.json();
        this.setState({
          data,
          isLoading: false,
        });
      } catch (error) {
        this.setState({
          isLoading: false,
          error,
        });
      }
    }

    render() {
      return (
        <>
          <Component {...this.props} {...this.state} />
        </>
      );
    }
  }

  return WithQuery;
};
