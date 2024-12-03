import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";

const MainPage = () => {
  const [series, setSeries] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      "https://hp-api.onrender.com/api/characters"
    );

    setSeries(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Main series={series} setSeries={setSeries} />
      <Footer />
    </>
  );
};

export default MainPage;
