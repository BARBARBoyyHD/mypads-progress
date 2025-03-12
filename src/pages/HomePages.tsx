import EmptyState from "../components/Empty/EmptyStates";
import Header from "../components/header/Header";
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
