import { IconSymbol } from "@/components/ui/icon-symbol.ios";
import { Tabs } from "expo-router";

<><><><><Tabs.Screen
    name="profile"
    options={{
        title: 'Profile',
        tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={color} />,
    }} /><Tabs.Screen
        name="reminders"
        options={{
            title: 'Reminders',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="alarm.fill" color={color} />,
        }} /><Tabs.Screen
        name="achievements"
        options={{
            title: 'Achievements',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="star.fill" color={color} />,
        }} /></><Tabs.Screen
        name="settings"
        options={{
            title: 'Settings',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="gearshape.fill" color={color} />,
        }} /></><Tabs.Screen
        name="tank"
        options={{
            title: 'Tank',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="drop.fill" color={color} />,
        }} /></><Tabs.Screen
        name="warning"
        options={{
            title: 'Warning',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="exclamationmark.triangle.fill" color={color} />,
        }} /></>

