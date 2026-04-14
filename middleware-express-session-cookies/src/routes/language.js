import express from "express";

const router = express.Router();


router.get("/set-lang/:lang", (req, res) => {
  const { lang } = req.params;

  res.cookie("lang", lang, {
    maxAge: 1000 * 60 * 60 * 24, // 1 day
    httpOnly: false
  });

  res.json({ message: `Language set to ${lang}` });
});


router.get("/get-lang", (req, res) => {
  const lang = req.cookies.lang || "en";

  const messages = {
    en: "Hello User",
    hi: "नमस्ते उपयोगकर्ता"
  };

  res.json({
    language: lang,
    message: messages[lang] || messages.en
  });
});

export default router;