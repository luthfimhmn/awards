import { useEffect } from "react";
import { useState } from "react";
import CardCoupon from "../components/card";
import axios from "axios";
import Navbar from "../components/navbar";
import "../css/Awards.css";
import { useLocation } from "react-router-dom";

// const rewards = [
//   {
//     id: 1,
//     Name: "Testing Awards 1",
//     type: "Vouchers",
//     Poin_to_exchange: 3000,
//     Image: "Image.jpg",
//     user_id: 1,
//   },
//   {
//     id: 2,
//     Name: "Testing Awards 2",
//     type: "Products",
//     Poin_to_exchange: 200,
//     Image: "Image.jpg",
//     user_id: 1,
//   },
//   {
//     id: 3,
//     Name: "Testing Awards 3",
//     type: "Gift Cards",
//     Poin_to_exchange: 200,
//     Image: "Image.jpg",
//     user_id: 1,
//   },
//   {
//     id: 4,
//     Name: "Testing Awards 4",
//     type: "Vouchers",
//     Poin_to_exchange: 200,
//     Image: "Image.jpg",
//     user_id: 1,
//   },
// ];

function Awards() {
  const location = useLocation();
  const [data, setData] = useState([]);
  const fecthData = async () => {
    const result = await axios.get("http://localhost:3000/awards");
    setData(result.data);
  };

  const getColorButton = (status) => {
    let statusColor;
    switch (status) {
      case "Products":
        statusColor = "primary";
        break;
      case "Vouchers":
        statusColor = "danger";
        break;
      case "Gift Cards":
        statusColor = "success";
        break;
      default:
        return "primary";
    }
    return statusColor;
  };

  useEffect(() => {
    fecthData();
  }, []);
  return (
    <>
      <Navbar />
      <div>
        {location?.state?.name ? (
          <h1>AWARDS for {location?.state?.name}</h1>
        ) : (
          <h1> Awards </h1>
        )}
        <br />
        <ul>
          {data.map((award) => {
            return (
              <CardCoupon
                key={award.id}
                data={award}
                buttonColor={getColorButton(award.type)}
              ></CardCoupon>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Awards;
