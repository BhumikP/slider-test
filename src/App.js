import { useEffect, useState } from "react";
import "./App.css";
import SlideComponent from "./components/SlideComponent/SlideComponent";

function App() {
  const [slideData, setSlideData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getSlideData = async (limit) => {
    setLoading(true);
    try {
      //passing url directly as it is simple & small app
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_limit=${limit}`
      );
      const response = await data.json();
      setSlideData(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      window.alert(`Error:: ${error}`);
    }
  };

  useEffect(() => {
    //To limit number of slides
    getSlideData(5);
  }, []);

  if (loading) return <p>loading...</p>;

  return (
    <div className="App">
      <SlideComponent slideData={slideData} />
    </div>
  );
}

export default App;
