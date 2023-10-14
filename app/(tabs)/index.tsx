import { Image, RefreshControl, SafeAreaView, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { ScrollView } from "react-native-gesture-handler";
import LottieView from "lottie-react-native";

export default function TabOneScreen() {
  return (
    <SafeAreaView>
      <ScrollView refreshControl={<RefreshControl refreshing={false} />}>
        <Image
          source={require("../../assets/images/threads.gif")}
          style={{
            height: 100,
            width: 100,
            alignSelf: "center",
            marginTop: 20,
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
