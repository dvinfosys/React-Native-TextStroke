import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Children, cloneElement, isValidElement } from "react";

function TextStroke(props) {
  const {color, stroke, children} = props;
  const strokeW = stroke;
  const top = createClones(0, -strokeW * 1.2, color);
  const topLeft = createClones(-strokeW, -strokeW, color);
  const topRight = createClones(strokeW, -strokeW, color);
  const right = createClones(strokeW, 0, color);
  const bottom = createClones(0, strokeW, color);
  const bottomLeft = createClones(-strokeW, strokeW, color);
  const bottomRight = createClones(strokeW, strokeW, color);
  const left = createClones(-strokeW * 1.2, 0, color);

  function createClones(w, h, color) {
      return Children.map(children, child => {
        if (isValidElement(child)) {
          const currentProps = child.props;
          const currentStyle = currentProps ? (currentProps.style || {}) : {};

          const newProps = {
            ...currentProps,
            style: {
              ...currentStyle,
              textShadowOffset: {
                width: w,
                height: h
              },
              textShadowColor: color,
              textShadowRadius: 0.1
            }
          }
          return cloneElement(child, newProps)
        }
        return child;
      });
  }

  return(
    <View>
      <View style={ styles.outline }>{ left }</View>
      <View style={ styles.outline }>{ right }</View>
      <View style={ styles.outline }>{ bottom }</View>
      <View style={ styles.outline }>{ top }</View>
      <View style={ styles.outline }>{ topLeft }</View>
      <View style={ styles.outline }>{ topRight }</View>
      <View style={ styles.outline }>{ bottomLeft }</View>
      { bottomRight }
    </View>
  )
}

const styles = StyleSheet.create({
  outline: {
    position: 'absolute',
  },
});

export { TextStroke };
