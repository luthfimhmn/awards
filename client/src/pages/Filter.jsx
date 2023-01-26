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
  // const [dataPoin, setPoin] = useState(0);
  // const [type, setType] = useState("")
  const [history, setHistory] = useState({ poin: "", type: "" });
  const [arrHistory, setArrHistory] = useState([]);

  useEffect(() => {
    setArrHistory(JSON.parse(window.localStorage.getItem("arrHistory")));
  }, []);

  const clearFilter = () => {
    setArrHistory([]);
    window.localStorage.setItem("arrHistory", "");
  };

  const addFilterHistory = ({ poin, type }) => {
    setHistory({ poin, type });
    setArrHistory([...arrHistory, history]);
    window.localStorage.setItem("arrHistory", JSON.stringify(arrHistory));
  };

  return (
    <div className="filterPage">
      <div className="row">
        <div className="column"></div>
        <div className="column"></div>
        <div className="column"></div>

        <h1>Search By Filter</h1>
        <br />
        <HistoryCard data={arrHistory} />
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
            addFilterHistory({ poin: 20, type: "Vouchers" });
          }}
        >
          Filter
        </Button>
        {arrHistory ? (
          <Button onClick={() => clearFilter()}>Clear</Button>
        ) : (
          <></>
        )}
      </div>
      <div className="row"></div>
    </div>
  );
}

export default Filter;
