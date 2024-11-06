import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link, router } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSession } from "@/context/ctx";

const SignInScreen = () => {
  const { signIn, isLoading, session } = useSession();
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const verifySignIn = () => {
    if (signInData.email == "123@qq.com" && signInData.password == "123456") {
      signIn(signInData.email);
      router.replace("/(app)/");
    }
  };
  useEffect(() => {
    if (session) {
      router.replace("/(app)/");
    }
  }, [session, isLoading]);
  console.log("session", session);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>登录</Text>
        <Text style={styles.description}>这是一个我在做测试的app！！！</Text>
        <View style={styles.form}>
          <TextInput
            placeholder="在这里输入您的邮箱哦！"
            style={styles.input}
            onChangeText={(value) =>
              setSignInData({ ...signInData, email: value })
            }
          />
          <TextInput
            placeholder="在这里输入您的密码哦！"
            style={styles.input}
            onChangeText={(value) =>
              setSignInData({ ...signInData, password: value })
            }
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => verifySignIn()}
      >
        <Text style={styles.buttonText}>去探索</Text>
        <AntDesign name="arrowright" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    gap: 15,
  },
  title: {
    color: "#000",
    fontSize: 30,
    fontWeight: "black",
    fontFamily: "ZCool",
  },
  description: {
    color: "#000",
    fontSize: 20,
    fontWeight: "black",
    fontFamily: "ZCool",
  },
  form: {
    gap: 10,
  },
  input: {
    width: wp(80),
    fontSize: 18,
    fontWeight: "semibold",
    fontFamily: "ZCool",
    color: "#000",
    backgroundColor: "rgb(210, 210, 210)",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    padding: 16,
    paddingLeft: 24,
  },
  buttonContainer: {
    position: "absolute",
    bottom: wp(10),
    width: wp(80),
    backgroundColor: "rgb(106, 90, 205)",
    borderRadius: 50,
    padding: 16,
    paddingLeft: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "ZCool",
  },
});
