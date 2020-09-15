import React, { useEffect } from "react";
import Images from "./Modal/res/Images/Images";
import { useDispatch, useSelector } from "react-redux";
import { loadImages } from "../redux/actions";
import "./App.css";
import Modal from "./Modal/Modal";

function App() {
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadImages());
  }, [dispatch]);

  return (
    <div className="app">
      {loading ? (
        <div className="load">Идет загрузка...</div>
      ) : (
        <div className="container">
          <div className="row no-gutters">
            <Images />
          </div>
        </div>
      )}
      <Modal />
    </div>
  );
}

export default App;
