import { Button } from "react-bootstrap";

const HistoryCard = ({ data }) => {
  return (
    <ul>
      {data?.map((history, i) => {
        return <Button key={i}>{history}</Button>;
      })}
    </ul>
  );
};

export default HistoryCard;
