import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";

const MainPage = () => {
  const [series, setSeries] = useState(null);

  const [links, setLinks] = useState([
    { url: "about", title: "About" },
    { url: "main", title: "Main" },
    { url: "contacts", title: "Contacts" },
  ]);

  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");

    setSeries(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header links={links} />
      <Main series={series} setSeries={setSeries} />
      <Footer />
    </>
  );
};

export default MainPage;
