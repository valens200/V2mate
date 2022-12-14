import { Response } from "express";
import { Request } from "express";
import { syncBuiltinESMExports } from "module";
const fs = require("fs");
const ytdl = require("ytdl-core");
const home = (req: Request, res: Response) => {
  return res.status(200).json({ message: "hello user" });
};

const getUrl = (req: Request, res: Response) => {
  const id = req.query.id;
  if (id == null || !id) {
    return res.status(400).json({ success: false, message: "invalid url" });
  }
  return res.status(200).json({
    success: true,
    message: "your url found ",
    url: "http://localhost:5000/app/download/v=https://youtube.com/embed/" + id,
  });
};

const download = async (req: Request, res: Response) => {
  try {
    const url = req.query.url;
    res.header("Content-Disposition", 'attachment; filename="Video.mp4');
    ytdl(url).pipe(res);
    console.log("urli ", url);
    return res
      .status(200)
      .json({
        message: "video downloaded",
        url: "http://localhost:5000/app/download/v=" + url,
      });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home, getUrl, download };
