import * as React from "react";
import { Text, View } from 'react-native';
import { Button } from "@fluentui-react-native/button";
import { DROPDOWN_TESTPAGE } from "./consts";
import { Test, TestSection, PlatformStatus } from "../Test";

interface CounterState {
  counter : number;
}
class Counter extends React.Component<{}, CounterState, any> {
  constructor(props) {
    super(props);
    this.state = { counter : 0 };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    this.setState(function(previousState : CounterState) {
      return {counter : previousState.counter + 1}
    });
  }

  render() {
    return (
      <View>
        <Text>{this.state.counter}</Text>
        <Button content="Increment" onClick={this.onClickHandler}/>
      </View>
    );
  }
}

const counterTest : React.FunctionComponent<{}> = () => {
  return <Counter/>;
};

const counterTestSections: TestSection[] = [
  {
    name: "TODO",
    testID: DROPDOWN_TESTPAGE,
    component: counterTest,
  },
];

export const DropdownTest: React.FunctionComponent<{}> = () => {
  const status: PlatformStatus = {
    win32Status: "Experimental",
    uwpStatus: "Experimental",
    iosStatus: "Experimental",
    macosStatus: "Experimental",
    androidStatus: "Experimental",
  };

  const description = "TODO";

  return <Test name="Dropdown Test (Temp)" description={description} sections={counterTestSections} status={status}></Test>;
};
