import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Calendar Sample One</Title>
      <h1>Website to demo a Google Calendar API</h1>
      <Counter />
      <p>
        Calendar data...
      </p>
    </main>
  );
}
