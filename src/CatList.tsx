import { useState } from "react";
import Collapse from "./collapse";

export default function CatList({ categories }: any) {
  const [categoriesState, setCategoriesState] = useState(categories);

  function addNewCat() {
    setCategoriesState((prevCats) => [
      ...prevCats,
      { title: Math.random().toString(), enabled: true, subCategories: [] },
    ]);
  }
  return (
    <ul>
      {categoriesState.map((cat) => {
        return (
          <Collapse key={cat.title} {...cat}>
            <CatList categories={cat.subCategories} />
          </Collapse>
        );
      })}
      <div onClick={() => addNewCat()}>+</div>
    </ul>
  );
}
