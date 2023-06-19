import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

//login form states
export const useLogin = () => {
  const [number, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return [number, setPhone, password, setPassword];
};

//signup form states
export const useSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  //handles sign up form submission
  const handleSubmit = () => {
    // login form logic
    navigation.navigate("Home");
  };

  return [
    name,
    setName,
    email,
    setEmail,
    number,
    setPhone,
    password,
    setPassword,
    handleSubmit,
  ];
};
