import { Slot, Stack } from "expo-router";
import {ThemeProvider, DefaultTheme, DarkTheme} from "@react-navigation/native"
import "../../global.css";

const CustomTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "white",
        primary: "#0A0A0A"
    }
}

export default function RootLayout() { 
    return(
        <ThemeProvider value={CustomTheme}>
            <Stack>
            <Stack.Screen name="index" options={{title: "Feed"}}/>
            <Stack.Screen name="post/[id]" options={{title: "Post"}}/>
        </Stack>
        </ThemeProvider>
    )
}