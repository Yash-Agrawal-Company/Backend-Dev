import express from "express";

const router = express.Router();


// ✅ Add to cart
router.post("/add", (req, res) => {
  const { item } = req.body;

  // 🔹 If logged in → session cart
  if (req.session.user) {
    if (!req.session.cart) req.session.cart = [];

    req.session.cart.push(item);

    return res.json({
      message: "Item added to session cart",
      cart: req.session.cart
    });
  }

  // 🔹 Anonymous → cookie cart
  let cart = [];

  if (req.cookies.cart) {
    cart = JSON.parse(req.cookies.cart);
  }

  cart.push(item);

  res.cookie("cart", JSON.stringify(cart), {
    maxAge: 1000 * 60 * 60
  });

  res.json({
    message: "Item added to cookie cart",
    cart
  });
});


// ✅ View cart
router.get("/view", (req, res) => {
  if (req.session.user) {
    return res.json({
      type: "session",
      cart: req.session.cart || []
    });
  }

  const cart = req.cookies.cart
    ? JSON.parse(req.cookies.cart)
    : [];

  res.json({
    type: "cookie",
    cart
  });
});

export default router;