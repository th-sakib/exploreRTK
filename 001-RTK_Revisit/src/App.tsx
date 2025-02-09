import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import {
  asyncIncrement,
  decrement,
  increment,
} from "./redux/features/counterSlice";

function App() {
  const countVlaue = useSelector((state: RootState) => state.couter.value);
  const dispatch = useDispatch<AppDispatch>();
  const handlePlus = () => {
    dispatch(increment());
  };
  const handleMinus = () => {
    dispatch(decrement());
  };

  const handleAmount = (para: number) => {
    // dispatch(incrementByCustomNum(para));
    dispatch(asyncIncrement(para));
  };

  return (
    <>
      <button onClick={handlePlus}>+</button> <br />
      {countVlaue} <br />
      <button onClick={handleMinus}>-</button>
      <button onClick={() => handleAmount(5)}>by amount</button>
    </>
  );
}

export default App;
