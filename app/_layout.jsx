import { Stack } from "expo-router";
import CustomHeader  from './Component/CustomHeader'


export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: () => <CustomHeader/>
        }}
      />
    </Stack>
  );
}
