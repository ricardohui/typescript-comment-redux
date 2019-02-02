import * as React from "react";

interface IProps {
  styleClass: string;
  children: React.ReactNode;
}
class Component extends React.Component<IProps> {
  public render() {
    return <div className={this.props.styleClass}>{this.props.children}</div>;
  }
}

export default Component;
