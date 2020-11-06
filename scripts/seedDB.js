const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googleboks"
);

const bookSeed =
{
    authors: ["Michael Phillips"],
    description: "For decades fruit growers have sprayed their trees with toxic chemicals in an attempt to control a range of insect and fungal pests. Yet it is possible to grow apples responsibly, by applying the intuitive knowledge of our great-grandparents with the fruits of modern scientific research and innovation. Since The Apple Grower first appeared in 1998, orchardist Michael Phillips has continued his research with apples, which have been called organic's final frontier. In this new edition of his widely acclaimed work, Phillips delves even deeper into the mysteries of growing good fruit with minimal inputs. Some of the cuttingedge topics he explores include: The use of kaolin clay as an effective strategy against curculio and borers, as well as its limitations Creating a diverse, healthy orchard ecosystem through understory management of plants, nutrients, and beneficial microorganisms.",
    image: "http://books.google.com/books/content?id=G0Faik1mSp0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Apple+Grower&hl=&source=gbs_api",
    title: "The Apple Grower",
}


db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });