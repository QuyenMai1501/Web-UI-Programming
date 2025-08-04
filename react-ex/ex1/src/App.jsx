import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Game from "./components/Game";
import Pizza from "./components/Pizza";

const longText = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio voluptates neque quaerat. Officia nostrum sed totam beatae error neque saepe, facere ab non, tempora, nisi sequi vitae pariatur dignissimos accusantium.`;

export default function App() {
  return (
    <div>
      <Game />
      <Pizza />
      <Cart />
      <ExpandableText maxChars={100}>{longText}</ExpandableText>
    </div>
  );
}
