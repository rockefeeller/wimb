import { Component } from "react";
import LineItem from "../line-item/line-item";

export default class StopInfo extends Component {
  render() {
    return (
      <>
        {
          this.props.stopData.forEach((arrive) => {
            console.log(arrive)
              console.log(
                `${parseFloat(arrive.estimateArrive / 60).toFixed(
                  0
                )} minutes to arrive!`
              );
              <LineItem data={arrive} />;
            })
        }
      </>
    );
  }
}
