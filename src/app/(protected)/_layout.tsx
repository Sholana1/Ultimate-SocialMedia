import { Redirect, Slot, Stack } from "expo-router";
import React from "react";
import { useAuth } from "@/providers/AuthProvider";
import { ActivityIndicator } from "react-native";

const ProtectedLayout = () => {
  const { session, isLoading } = useAuth();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (!session) {
    return <Redirect href={"/sign-in"} />;
  }
  return (
    <Stack>
        <Stack.Screen name="(tab)" options={{headerShown: false}}/>
    </Stack>
  );
};

export default ProtectedLayout;
