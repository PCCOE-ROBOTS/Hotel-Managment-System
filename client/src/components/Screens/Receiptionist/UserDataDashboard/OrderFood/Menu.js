import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ImPlus } from "react-icons/im";
import Aos from "aos";
import "aos/dist/aos.css";
import { UserData } from "../../../../../App";
import { getMenu } from "../../../../Utils/Api/Menu";
import NonVeg from "../../../../Assets/Images/non-veg.jpg";
import Veg from "../../../../Assets/Images/veg.jpg";

const Menu = (props) => {
  const { _id } = props;
  const userContext = useContext(UserData);
  const [menu, setMenu] = useState(null);
  const [beverages, setBeverages] = useState([]);
  const [coldDrinks, setcoldDrinks] = useState([]);
  const [Starter, setStarter] = useState([]);
  const [snacks, setSnacks] = useState({});
  const [Soups, setSoups] = useState([]);
  const [Breads, setBreads] = useState([]);
  const [MainCourse, setMainCourse] = useState([]);
  const [Rice, setRice] = useState([]);

  const loadMenu = () => {
    getMenu()
      .then((res) => {
        if (res.data) {
          setMenu(res.data);
          if (res.data.Beverages) {
            setBeverages(res.data.Beverages);
          }
          if (res.data.ColdDrinks) {
            setcoldDrinks(res.data.ColdDrinks);
          }
          if (res.data.Starter) {
            setStarter(res.data.Starter);
          }
          if (res.data.Snacks) {
            setSnacks(res.data.Snacks);
          }

          if (res.data.Soups) {
            setSoups(res.data.Soups);
          }
          if (res.data.Breads) {
            setBreads(res.data.Breads);
          }
          if (res.data.MainCourse) {
            setMainCourse(res.data.MainCourse);
          }
          if (res.data.Rice) {
            setRice(res.data.Rice);
          }
        }

        //console.log(res.data);
        userContext.setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
        userContext.setisLoading(false);
      });
  };

  useEffect(() => {
    userContext.setisLoading(true);
    loadMenu();
  }, []);
  return (
    <>
      {menu ? (
        <div className="container-fluid">
          {beverages && beverages.length > 0 ? (
            <div className="row">
              <div className="col-12">
                <h5>Beverages</h5>
                <hr style={{ color: "black" }} />
              </div>
              {beverages.map((item) => {
                console.log(item);
                return (
                  <div className="col-md-3">
                    <div className="card menu-card">
                      <div class="card-body">
                        <p class="card-text">
                          <div className="container">
                            <div className="row mt-2">
                              Name : {item.name}{" "}
                              <span className="veg-img">
                                <img src={item.veg ? Veg : NonVeg} alt={""} />
                              </span>
                            </div>
                            <div className="row mt-2">
                              Price : {item.price} Rs
                            </div>

                            <div className="row">
                              <Link className="btn add-to-cart-btn">
                                Add to Cart
                                <ImPlus
                                  size={8}
                                  style={{ marginLeft: "5px" }}
                                />
                              </Link>
                            </div>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
          {coldDrinks && coldDrinks.length > 0 ? (
            <div className="row mt-2">
              <div className="col-12">
                <h5>Cold Drinks</h5>
                <hr style={{ color: "black" }} />
              </div>
              {coldDrinks.map((item) => {
                return (
                  <div className="col-md-3">
                    <div className="card menu-card">
                      <div class="card-body">
                        <p class="card-text">
                          <div className="container">
                            <div className="row mt-2">
                              Name : {item.name}
                              <span className="veg-img">
                                <img src={item.veg ? Veg : NonVeg} alt={""} />
                              </span>
                            </div>
                            <div className="row mt-2">
                              Price : {item.price} Rs
                            </div>

                            <div className="row">
                              <Link className="btn add-to-cart-btn">
                                Add to Cart
                                <ImPlus
                                  size={8}
                                  style={{ marginLeft: "5px" }}
                                />
                              </Link>
                            </div>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}

          {snacks && snacks.length > 0 ? (
            <div className="row mt-2">
              <div className="col-12">
                <h5>Snacks</h5>
                <hr style={{ color: "black" }} />
              </div>
              {snacks.map((item) => {
                return (
                  <div className="col-md-3">
                    <div className="card menu-card">
                      <div class="card-body">
                        <p class="card-text">
                          <div className="container">
                            <div className="row mt-2">
                              Name : {item.name}{" "}
                              <span className="veg-img">
                                <img src={item.veg ? Veg : NonVeg} alt={""} />
                              </span>
                            </div>
                            <div className="row mt-2">
                              Price : {item.price} Rs
                            </div>

                            <div className="row">
                              <Link className="btn add-to-cart-btn">
                                Add to Cart
                                <ImPlus
                                  size={8}
                                  style={{ marginLeft: "5px" }}
                                />
                              </Link>
                            </div>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}

          {Starter && Starter.length > 0 ? (
            <div className="row mt-2">
              <div className="col-12">
                <h5>Starter</h5>
                <hr style={{ color: "black" }} />
              </div>
              {Starter.map((item) => {
                return (
                  <div className="col-md-3">
                    <div className="card menu-card">
                      <div class="card-body">
                        <p class="card-text">
                          <div className="container">
                            <div className="row mt-2">
                              Name : {item.name}{" "}
                              <span className="veg-img">
                                <img src={item.veg ? Veg : NonVeg} alt={""} />
                              </span>
                            </div>
                            <div className="row mt-2">
                              Price : {item.price} Rs
                            </div>

                            <div className="row">
                              <Link className="btn add-to-cart-btn">
                                Add to Cart
                                <ImPlus
                                  size={8}
                                  style={{ marginLeft: "5px" }}
                                />
                              </Link>
                            </div>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}

          {Soups && Soups.length > 0 ? (
            <div className="row mt-2">
              <div className="col-12">
                <h5>Soups</h5>
                <hr style={{ color: "black" }} />
              </div>
              {Soups.map((item) => {
                return (
                  <div className="col-md-3">
                    <div className="card menu-card">
                      <div class="card-body">
                        <p class="card-text">
                          <div className="container">
                            <div className="row mt-2">
                              Name : {item.name}
                              <span className="veg-img">
                                <img src={item.veg ? Veg : NonVeg} alt={""} />
                              </span>
                            </div>
                            <div className="row mt-2">
                              Price : {item.price} Rs
                            </div>

                            <div className="row">
                              <Link className="btn add-to-cart-btn">
                                Add to Cart
                                <ImPlus
                                  size={8}
                                  style={{ marginLeft: "5px" }}
                                />
                              </Link>
                            </div>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}

          {MainCourse && MainCourse.length > 0 ? (
            <div className="row mt-2">
              <div className="col-12">
                <h5>Main Course</h5>
                <hr style={{ color: "black" }} />
              </div>
              {MainCourse.map((item) => {
                return (
                  <div className="col-md-3">
                    <div className="card menu-card">
                      <div class="card-body">
                        <p class="card-text">
                          <div className="container">
                            <div className="row mt-2">
                              Name : {item.name}
                              <span className="veg-img">
                                <img src={item.veg ? Veg : NonVeg} alt={""} />
                              </span>
                            </div>
                            <div className="row mt-2">
                              Price : {item.price} Rs
                            </div>

                            <div className="row">
                              <Link className="btn add-to-cart-btn">
                                Add to Cart
                                <ImPlus
                                  size={8}
                                  style={{ marginLeft: "5px" }}
                                />
                              </Link>
                            </div>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}

          {Breads && Breads.length > 0 ? (
            <div className="row mt-2">
              <div className="col-12">
                <h5>Breads</h5>
                <hr style={{ color: "black" }} />
              </div>
              {Breads.map((item) => {
                return (
                  <div className="col-md-3">
                    <div className="card menu-card">
                      <div class="card-body">
                        <p class="card-text">
                          <div className="container">
                            <div className="row mt-2">
                              Name : {item.name}
                              <span className="veg-img">
                                <img src={item.veg ? Veg : NonVeg} alt={""} />
                              </span>
                            </div>
                            <div className="row mt-2">
                              Price : {item.price} Rs
                            </div>

                            <div className="row">
                              <Link className="btn add-to-cart-btn">
                                Add to Cart
                                <ImPlus
                                  size={8}
                                  style={{ marginLeft: "5px" }}
                                />
                              </Link>
                            </div>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}

          {Rice && Rice.length > 0 ? (
            <div className="row mt-2">
              <div className="col-12">
                <h5>Rice</h5>
                <hr style={{ color: "black" }} />
              </div>
              {Rice.map((item) => {
                return (
                  <div className="col-md-3">
                    <div className="card menu-card">
                      <div class="card-body">
                        <p class="card-text">
                          <div className="container">
                            <div className="row mt-2">
                              Name : {item.name}
                              <span className="veg-img">
                                <img src={item.veg ? Veg : NonVeg} alt={""} />
                              </span>
                            </div>
                            <div className="row mt-2">
                              Price : {item.price} Rs
                            </div>

                            <div className="row">
                              <Link className="btn add-to-cart-btn">
                                Add to Cart
                                <ImPlus
                                  size={8}
                                  style={{ marginLeft: "5px" }}
                                />
                              </Link>
                            </div>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
};

export default Menu;
