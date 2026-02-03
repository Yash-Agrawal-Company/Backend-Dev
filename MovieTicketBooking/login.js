import fs from "fs";
import {
	ReasonPhrases,
	StatusCodes,
	getReasonPhrase,
	getStatusCode,
} from 'http-status-codes';
function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(StatusCodes.BAD_REQUEST)
    }
  
    if (!fs.existsSync("user.json")) {
      return res.status(StatusCodes.NOT_FOUND)
    }
    const users = JSON.parse(fs.readFileSync("user.json", "utf-8"));

    const isUser = users.find(
      user => user.email === email && user.password === password
    );

    if (!isUser) {
      return res.status(StatusCodes.BAD_REQUEST)
    }

    res.status(StatusCodes.OK)

  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR)
  }
}

export default login;
