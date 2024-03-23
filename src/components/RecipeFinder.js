import React, { useEffect, useState } from "react";
import RecipeList from "./RecipeList";
import classes from "./RecipeItem.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const RecipeFinder = () => {
  const [data, setData] = useState();
  const apiKeys = "7f710d9ee9f4cd6d5ac7512f6d6f81d9";
  const apiId = "d437302b";
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchedItem, setSearchedItem] = useState([]);

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("searchedItem")));
    if (localStorage.getItem("searchedItem")) {
      setSearchedItem(JSON.parse(localStorage.getItem("searchedItem")));
    }
  }, []);

  const fetchApi = async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${searchValue}&app_id=${apiId}&app_key=${apiKeys}`
    );

    const data = await response.json();
    setData(data.hits);
    console.log(data);
    setIsLoading(false);
  };

  const searchHandler = (event) => {
    setSearchValue(event.target.value);
  };

  const onSearch = () => {
    if (searchValue.length === 0) {
      toast.warning("Search Field Can't be Empty");
      setData();
    } else {
      setSearchedItem((prevItem) => [...prevItem, searchValue]);
      localStorage.setItem("searchedItem", JSON.stringify(searchedItem));
      fetchApi();
    }
  };
  const refreshItem = () => {
    if (searchValue.length === 0) {
      alert("Enter Something To Search");
      setData();
    } else {
      fetchApi();
    }
  };

  const searchFromList = (event) => {
    setSearchValue(event.target.innerHTML);
  };
  return (
    <div className={classes.container}>
      <ToastContainer />
      <input
        type="text"
        onChange={searchHandler}
        placeholder="Search Here"
        value={searchValue}
      />
      <button type="Submit" onClick={onSearch} className="btn btn-primary">
        Search
      </button>
      <button type="button" onClick={refreshItem} className="btn btn-info">
        Refresh
      </button>
      <div style={{ marginTop: "2rem" }}>
        <h3>Your Searches</h3>
        <ul>
          {searchedItem.map((map) => (
            <>
              <li onClick={searchFromList}>{map}</li>
            </>
          ))}
        </ul>
      </div>
      {data && !isLoading && <RecipeList data={data} />}

      {isLoading && (
        <section className={classes.loading}>
          <span className={classes.loadSpin}></span>
          <p> Please Wait while Loading......</p>
        </section>
      )}
    </div>
  );
};

export default RecipeFinder;
