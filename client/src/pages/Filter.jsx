import "../css/Slider.css";
import { useState } from "react";
import * as AiIcons from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import Slider from "../components/slider";
import "../css/Filter.css";
import HistoryCard from "../components/historyCard";

function Filter() {
  const navigate = useNavigate();
  const [dataSlide, setDataSlide] = useState(0);
  const [filterHistory, setFilterHistory] = useState([]);

  useEffect(() => {
    setFilterHistory(JSON.parse(window.localStorage.getItem("filterHistory")));
  }, []);

  const clearFilter = () => {
    setFilterHistory([]);
    window.localStorage.clear();
  };

  const addFilterHistory = async (value) => {
    setFilterHistory([...filterHistory, value]);
    window.localStorage.setItem("filterHistory", JSON.stringify(filterHistory));
  };

  return (
    <>
      <div className="row">
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>

        <h1>Search By Filter</h1>
        <br />
        <HistoryCard data={filterHistory} />
        <br />
        <br />
        <h2>Poin Needed</h2>
        <h3>IDR 10.000</h3>
        <h3 className="rightIdr">IDR 500.000</h3>
        <Slider />
        <br />
        <Link to={"/awards"}>
          <AiIcons.AiOutlineClose />
        </Link>
        <br />
        <br />
        <h2>Awards Type</h2>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <label for="vehicle1">All Type</label>
        <br />
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
        <label for="vehicle2">Vouchers</label>
        <br />
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
        <label for="vehicle3">Products</label>
        <br />
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
        <label for="vehicle3">Others</label>
        <br />
        <Button
          onClick={(e) => {
            addFilterHistory("testing");
            // navigate("/awards");
          }}
        >
          Filter
        </Button>
        {filterHistory ? (
          <Button onClick={() => clearFilter()}>Clear</Button>
        ) : (
          <></>
        )}
      </div>
      <div className="row"></div>
    </>
  );
}

export default Filter;
