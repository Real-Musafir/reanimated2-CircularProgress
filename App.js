import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";

const BACKGROUND_COLOR = "#444B6F";
const BACKGROUND_STROCK_COLOR = "#303858";
const STROCK_COLOR = "#A6E1FA";

const { width, height } = Dimensions.get("window");

const CIRCLE_LENGTH = 1000; //2Pi*R
const R = CIRCLE_LENGTH / (2 * Math.PI);

export default function App() {
  const progress = useSharedValue(0);

  return (
    <View style={styles.container}>
      <Svg>
        <Circle
          cx={width / 2}
          cy={height / 2}
          r={R}
          stroke={BACKGROUND_STROCK_COLOR}
          strokeWidth={15}
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: "center",
    justifyContent: "center",
  },
});
