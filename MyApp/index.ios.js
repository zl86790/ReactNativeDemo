/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  PanResponder,
  Animated,
  Dimensions
} from "react-native";

export default class MyApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pan1: new Animated.ValueXY(),
      pan2: new Animated.ValueXY()
    };

    this.panResponder1 = PanResponder.create({
      //Step 2
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {
          //Step 3
          dx: this.state.pan1.x,
          dy: this.state.pan1.y
        }
      ]),
      onPanResponderRelease: (e, gesture) => {} //Step 4
    });

    this.panResponder2 = PanResponder.create({
      //Step 2
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {
          //Step 3
          dx: this.state.pan2.x,
          dy: this.state.pan2.y
        }
      ]),
      onPanResponderRelease: (e, gesture) => {} //Step 4
    });
  }
  render() {
    const clickAddText = () => {};
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Demo</Text>
        <Image
          source={require("./images/tshirt.png")}
          style={{
            width: 400,
            height: 400,
            resizeMode: Image.resizeMode.contain
          }}
        />
        <View style={styles.draggableContainer}>
          <Animated.View
            {...this.panResponder1.panHandlers}
            style={[this.state.pan1.getLayout(), styles.circle]}
          >
            <Text style={styles.text}>Hello</Text>
          </Animated.View>
        </View>
        <View style={styles.draggableContainer}>
          <Animated.View
            {...this.panResponder2.panHandlers}
            style={[this.state.pan2.getLayout(), styles.circle]}
          >
            <Text style={styles.text}>Michael!</Text>
          </Animated.View>
        </View>
        <Button
          onPress={clickAddText}
          title="Add Text"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

AppRegistry.registerComponent("MyApp", () => MyApp);
