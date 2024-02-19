import { Tabs } from 'expo-router/tabs';
export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          href: '/',
        }}
      />
       <Tabs.Screen
        name="home"
        options={{
          href: '/home',
        }}
      />
    </Tabs>
  );
}