import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/shopContext";

const HomePage = () => {
  const { test } = useContext(ShopContext);

  return (
    <div>
      <h1>HOME</h1>
      {test}
    </div>
  );
};

export default HomePage;
