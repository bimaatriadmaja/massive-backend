import Feed from "../models/FeedModel.js"; //IMG
import path from "path";
import fs from "fs";

export const getFeeds = async (req, res) => {
  try {
    const response = await Feed.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getFeedById = async (req, res) => {
  try {
    const response = await Feed.findOne({
      where: {
        id: req.params.id
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const saveFeed = (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "No File Uploaded" });
  const name = req.body.title;
  const file = req.files.file;
  const caption = req.body.caption;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Invalid Images" });
  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Image must be less than 5 MB" });

  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await Feed.create({ name: name, image: fileName, url: url, caption: caption});
      res.status(201).json({ msg: "Feed Created Successfully" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const updateFeed = async (req, res) => {
  const feed = await Feed.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!feed) return res.status(404).json({ msg: "No data found" });
  let fileName = "";
  if (req.files === null) {
    fileName = Feed.image;
  } else {
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    fileName = file.md5 + ext;
    const allowedType = [".png", ".jpg", "jpeg"];

    if (!allowedType.includes(ext.toLowerCase()))
      return res.status(422).json({ msg: "Invalid Images" });
    if (fileSize > 5000000)
      return res.status(422).json({ msg: "Image must be less than 5 MB" });

    const filepath = `./public/images/${feed.image}`;
    fs.unlinkSync(filepath);

    file.mv(`./public/images/${fileName}`, (err) => {
        if (err) return res.status(500).json({ msg: err.message });
      });
  }
  const name = req.body.title;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  try {
    await Feed.update({name: name, image: fileName},{
        where: {
            id: req.params.id
        }
    });
    res.status(200).json({msg:"Feed updated successfully"});
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteFeed = async (req, res) => {
  const feed = await Feed.findOne({
    where: {
      id: req.params.id
    }
  });
  if (!feed) return res.status(404).json({ msg: "No data found" });
  try {
    const filepath = `./public/images/${feed.image}`;
    fs.unlinkSync(filepath);
    await Feed.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json({ msg: "Feed deleted successfully" });
  } catch (error) {
    console.log(error.message);
  }
};
