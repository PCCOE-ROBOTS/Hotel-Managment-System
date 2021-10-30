const express = require("express");
const Item = require("../models/Item");
const router = express.Router({ mergeParams: true });

router.post("/add-item", (req, res) => {
  const data = req.body;
  const newItem = new Item(data);
  newItem
    .save()
    .then((item) => res.json(item))
    .catch((err) => res.json(err));
});

const getMenu = (req, res, next) => {
  let menu = {};

  Item.find({ category: "Beverages" }, (err, Beverages) => {
    if (err) {
      console.log("Error in Beverages");
    } else {
      menu.Beverages = Beverages;
    }
  });
  Item.find({ category: "Cold Drinks" }, (err, ColdDrinks) => {
    if (err) {
      console.log("Error in ColdDrinks");
    } else {
      menu.ColdDrinks = ColdDrinks;
    }
  });
  Item.find({ category: "Starter" }, (err, Starter) => {
    if (err) {
      console.log("Error in Starter");
    } else {
      menu.Starter = Starter;
    }
  });
  Item.find({ category: "Snacks" }, (err, Snacks) => {
    if (err) {
      console.log("Error in Snacks");
    } else {
      menu.Snacks = Snacks;
    }
  });
  Item.find({ category: "Soups" }, (err, Soups) => {
    if (err) {
      console.log("Error in Soups");
    } else {
      menu.Soups = Soups;
    }
  });
  Item.find({ category: "Main Course" }, (err, MainCourse) => {
    if (err) {
      console.log("Error in MainCourse");
    } else {
      menu.MainCourse = MainCourse;
    }
  });
  Item.find({ category: "Breads" }, (err, Breads) => {
    if (err) {
      console.log("Error in Breads");
    } else {
      menu.Breads = Breads;
    }
  });
  Item.find({ category: "Rice" }, (err, Rice) => {
    if (err) {
      console.log("Error in Rice");
    } else {
      menu.Rice = Rice;
    }
  });

  setTimeout(() => {
    req.menu = menu;
    next();
  }, 5000);
};

router.get("/get-menu", getMenu, async (req, res) => {
  //   console.log(req.menu);
  if (req.menu) {
    res.send(req.menu);
  }
});

module.exports = router;
