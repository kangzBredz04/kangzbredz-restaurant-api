import express from "express";
import "dotenv/config";
import cors from "cors";

const restaurant = {
  foods: [
    {
      id: 1,
      name: "Nasi Goreng",
      category: "Makanan",
      price: 25000,
      image: "https://example.com/images/nasi_goreng.jpg",
    },
    {
      id: 2,
      name: "Ayam Bakar",
      category: "Makanan",
      price: 30000,
      image: "https://example.com/images/ayam_bakar.jpg",
    },
    {
      id: 3,
      name: "Sate Ayam",
      category: "Makanan",
      price: 15000,
      image: "https://example.com/images/sate_ayam.jpg",
    },
    {
      id: 4,
      name: "Gado-Gado",
      category: "Makanan",
      price: 20000,
      image: "https://example.com/images/gado_gado.jpg",
    },
    {
      id: 5,
      name: "Rendang",
      category: "Makanan",
      price: 35000,
      image: "https://example.com/images/rendang.jpg",
    },
    {
      id: 6,
      name: "Soto Ayam",
      category: "Makanan",
      price: 18000,
      image: "https://example.com/images/soto_ayam.jpg",
    },
    {
      id: 7,
      name: "Pecel Lele",
      category: "Makanan",
      price: 22000,
      image: "https://example.com/images/pecel_lele.jpg",
    },
    {
      id: 8,
      name: "Bakso",
      category: "Makanan",
      price: 12000,
      image: "https://example.com/images/bakso.jpg",
    },
    {
      id: 9,
      name: "Sushi Roll",
      category: "Makanan",
      price: 40000,
      image: "https://example.com/images/sushi_roll.jpg",
    },
    {
      id: 10,
      name: "Pizza Margherita",
      category: "Makanan",
      price: 28000,
      image: "https://example.com/images/pizza_margherita.jpg",
    },
  ],
  drinks: [
    {
      id: 11,
      name: "Es Teh Manis",
      category: "Minuman",
      price: 5000,
      image: "https://example.com/images/es_teh_manis.jpg",
    },
    {
      id: 12,
      name: "Es Jeruk",
      category: "Minuman",
      price: 6000,
      image: "https://example.com/images/es_jeruk.jpg",
    },
    {
      id: 13,
      name: "Jus Alpukat",
      category: "Minuman",
      price: 12000,
      image: "https://example.com/images/jus_alpukat.jpg",
    },
    {
      id: 14,
      name: "Kopi Tubruk",
      category: "Minuman",
      price: 8000,
      image: "https://example.com/images/kopi_tubruk.jpg",
    },
    {
      id: 15,
      name: "Teh Tarik",
      category: "Minuman",
      price: 7000,
      image: "https://example.com/images/teh_tarik.jpg",
    },
    {
      id: 16,
      name: "Soda Gembira",
      category: "Minuman",
      price: 10000,
      image: "https://example.com/images/soda_gembira.jpg",
    },
    {
      id: 17,
      name: "Mojito",
      category: "Minuman",
      price: 15000,
      image: "https://example.com/images/mojito.jpg",
    },
    {
      id: 18,
      name: "Capuccino",
      category: "Minuman",
      price: 9000,
      image: "https://example.com/images/cappuccino.jpg",
    },
    {
      id: 19,
      name: "Smoothie Berry",
      category: "Minuman",
      price: 14000,
      image: "https://example.com/images/smoothie_berry.jpg",
    },
    {
      id: 20,
      name: "Lemonade",
      category: "Minuman",
      price: 8000,
      image: "https://example.com/images/lemonade.jpg",
    },
  ],
};

const app = express();

app.use(cors());
app.use(express.json());

const router = express.Router();
app.use("/api", router);

router.get("/restaurant", (_req, res) => {
  res.json({ message: "Data berhasil didapatkan.", data: restaurant });
});

app.listen(process.env.API_PORT, () =>
  console.log("Server berhasil dijalankan.")
);
