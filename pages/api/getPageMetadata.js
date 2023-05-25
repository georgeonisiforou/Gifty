import * as cheerio from "cheerio";

export default async function getData(req, res) {
  const response = await fetch(req.body.url);
  const body = await response.text();
  const $ = cheerio.load(body);

  let obj = {
    price: $("meta[property='og:price:amount']").attr("content"),
    title: $("meta[property='og:title']").attr("content"),
    seller: $("meta[property='og:site_name']").attr("content"),
    url: $("meta[property='og:url']").attr("content"),
    imgUrl: $("meta[property='og:image']").attr("content"),
  };

  res.status(200).json(obj);
}
