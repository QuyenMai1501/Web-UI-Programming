import AddItem from "./AddItem";
import UpdateItem from "./UpdateItem";
import ReverseItem from "./ReverseItem";
import RandomColorWords from "./RandomColorWords";

export default function ListGroup() {
  return (
    <div>
      <AddItem />
      <UpdateItem />
      <ReverseItem />
      <RandomColorWords />
    </div>
  );
}