import { useState } from "react";
import "./App.css";
import { userData } from "./fakeData";

function App() {
  const [search, setSearch] = useState({
    data: "",
    list: [],
  });

  const handleSearch = (e) => {
    e.preventDefault();
    const searchData = userData.filter((item) => {
      if (e.target.value === "") return userData;
      return item.nama.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setSearch({
      data: e.target.value,
      list: searchData,
    });
  };

  return (
    <>
      <div>
        <input type="text" onChange={handleSearch} />
      </div>
      {/* {userData?.map((item) => (
        <>
          <div key={item.Id}>
            <p>Nama: {item.nama}</p>
            <p>Alamat:{item.alamat}</p>
            <p>No hp:{item.noHp}</p>
            <p>Gender:{item.gender}</p>
          </div>
        </>
      ))} */}

      {search.data === "" ? (
        <>
          {userData?.map((item) => (
            <div key={item.Id}>
              <p>Nama: {item.nama}</p>
              <p>Alamat:{item.alamat}</p>
              <p>No hp:{item.noHp}</p>
              <p>Gender:{item.gender}</p>
            </div>
          ))}
        </>
      ) : search.list.length === 0 ? (
        <div>data not found</div>
      ) : (
        search?.list.map((item) => {
          return (
            <div key={item.Id}>
              <p>Nama: {item.nama}</p>
              <p>Alamat:{item.alamat}</p>
              <p>No hp:{item.noHp}</p>
              <p>Gender:{item.gender}</p>
            </div>
          );
        })
      )}
    </>
  );
}

export default App;
