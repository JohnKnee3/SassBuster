import React, { useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_CATEGORIES } from "../../utils/queries";
import { useStoreContext } from "../../utils/GlobalState";
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();
  const { categories } = state;
  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  // Update the state with the categories upon page load or change
  useEffect(() => {
    // if categoryData exists or has changed from the response of useQuery, then run dispatch to update the state with the UPDATE_CATEGORIES action
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      // also store the category data in IndexedDB
      categoryData.categories.forEach((categories) => {
        idbPromise("categories", "put", categories);
      });
    } else if (!loading) {
      // if the user is offline, load data from IndexedDB
      idbPromise("categories", "get").then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (item) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: item,
    });
  };

  return (
    <div>
      <h2>Choose a category:</h2>
      {categories.map((item) => (
        // console.log("I am item", item),
        <button
          className="category-btn"
          key={item._id}
          onClick={() => {
            handleClick(item);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
