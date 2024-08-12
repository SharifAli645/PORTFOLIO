import React from "react";
import Header from "./components/Header";
import User from "./components/User";
import Stack from "./components/Stack";

export default function Home() {
  return (
    <div className="flex flex-col h-screen font-mono">
      <Header />
      <User />
      <Stack />
    </div>
  );
}