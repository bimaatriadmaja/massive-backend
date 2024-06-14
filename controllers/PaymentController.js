import Payment from "../models/PaymentModel.js"; //IMG
import path from "path";
import fs from "fs";

export const getPayments = async (req, res) => {
  try {
    const response = await Payment.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getPaymentById = async (req, res) => {
  try {
    const response = await Payment.findOne({
      where: {
        id: req.params.id
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const savePayment = (req, res) => {
  if (req.files === null)
    return res.status(400).json({ msg: "No File Uploaded" });
  const name = req.body.title;
  const email_or_hp = req.body.email_or_hp;
  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/img/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Invalid Images" });
  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Image must be less than 5 MB" });

  file.mv(`./public/img/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await Payment.create({ name: name, email_or_hp:email_or_hp, image: fileName, url: url});
      res.status(201).json({ msg: "Transaction Created Successfully" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const updatePayment = async (req, res) => {
  const payment = await Payment.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!payment) return res.status(404).json({ msg: "No data found" });
  let fileName = "";
  if (req.files === null) {
    fileName = Payment.image;
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

    const filepath = `./public/img/${payment.image}`;
    fs.unlinkSync(filepath);

    file.mv(`./public/img/${fileName}`, (err) => {
        if (err) return res.status(500).json({ msg: err.message });
      });
  }
  const name = req.body.title;
  const url = `${req.protocol}://${req.get("host")}/img/${fileName}`;
  try {
    await Payment.update({name: name, image: fileName},{
        where: {
            id: req.params.id
        }
    });
    res.status(200).json({msg:"Transaction updated successfully"});
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePayment = async (req, res) => {
  const payment = await Payment.findOne({
    where: {
      id: req.params.id
    }
  });
  if (!payment) return res.status(404).json({ msg: "No data found" });
  try {
    const filepath = `./public/img/${payment.image}`;
    fs.unlinkSync(filepath);
    await Payment.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json({ msg: "Transaction deleted successfully" });
  } catch (error) {
    console.log(error.message);
  }
};
