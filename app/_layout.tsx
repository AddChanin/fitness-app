import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerShown: true,
      headerTransparent: true,  // header is transparent
      headerTitle: "Weekly Excercise",  
    }}>
    </Stack>
  );
}
