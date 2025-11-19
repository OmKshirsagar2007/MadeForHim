let express = require("express");
let path = require("path");
let multer = require("multer");
let mongoose = require("mongoose");
let cloudinary = require("cloudinary").v2;
let cors = require("cors");
let dotenv = require("dotenv");

dotenv.config();

let app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ------------------ MULTER ------------------
let storage = multer.memoryStorage();
let upload = multer({ storage: storage });

// ------------------ CLOUDINARY ------------------
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET
});

// ------------------ MONGODB ------------------
let ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    description: String,
    frontImg: String,
    backImg: String
});

let Product = mongoose.model("Product", ProductSchema);

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("MongoDB Error:", err));

// ------------------ ROUTES ------------------
app.get("/", async (req, res) => {
    let products = await Product.find();
    res.render("index", { products });
});

app.get("/admin", (req, res) => {
    res.render("admin");
});

// ------------------ CLOUDINARY UPLOAD WITH COMPRESSION ------------------
let uploadImage = async (buffer) => {
    try {
        let base64 = `data:image/jpeg;base64,${buffer.toString("base64")}`;

        let result = await cloudinary.uploader.upload(base64, {
            folder: "products",
            transformation: [
                { width: 400, crop: "scale" },
                { quality: "auto:eco" }
            ]
        });

        return result.secure_url;

    } catch (err) {
        console.log("Cloudinary Upload Error:", err);
        throw new Error("Cloudinary Upload Failed");
    }
};

// ------------------ PRODUCT UPLOAD ------------------
app.post(
    "/upload-product",
    upload.fields([
        { name: "frontImg", maxCount: 1 },
        { name: "backImg", maxCount: 1 }
    ]),
    async (req, res) => {

        try {
            if (!req.files || !req.files.frontImg || !req.files.backImg) {
                return res.status(400).json({ message: "Images missing" });
            }

            let frontBuffer = req.files.frontImg[0].buffer;
            let backBuffer = req.files.backImg[0].buffer;

            let frontUrl = await uploadImage(frontBuffer);
            let backUrl = await uploadImage(backBuffer);

            let product = new Product({
                name: req.body.name,
                price: req.body.price,
                category: req.body.category,
                description: req.body.description,
                frontImg: frontUrl,
                backImg: backUrl
            });

            await product.save();

            res.json({ message: "Product Uploaded Successfully" });

        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
);

// ------------------ FETCH ALL PRODUCTS ------------------
app.get("/all-products", async (req, res) => {
    try {
        let products = await Product.find().sort({ _id: -1 });
        res.json({ products });
    } catch {
        res.status(500).json({ message: "Error fetching products" });
    }
});

// ------------------ DELETE PRODUCT ------------------
app.delete("/delete-product/:id", async (req, res) => {
    try {
        let id = req.params.id;
        let product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: "Product Not Found" });
        }

        res.json({ message: "Product Deleted Successfully" });

    } catch {
        res.status(500).json({ message: "Something went wrong" });
    }
});

// ------------------ SERVER ------------------
let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
