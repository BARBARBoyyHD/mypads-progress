import React from "react";
import Header from "../components/header/Header";
import EmptyState from "../components/Empty/EmptyStates";
export default function HomePages() {
  return (
    <main>
      <Header />
      <section>
        <EmptyState />
      </section>
    </main>
  );
}
