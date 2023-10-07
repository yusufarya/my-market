import {
  Payments,
  Inventory,
  LocalMall,
  ShoppingCart,
} from "@mui/icons-material";
const ListMenu = () => {
  const data = [
    {
      id: 1,
      name: "Master Data",
      slug: "master",
      url: "",
      icon: Inventory,
      submenu: [
        {
          name: "Satuan",
          url: "/unit",
        },
        {
          name: "Merek",
          url: "/brand",
        },
        {
          name: "Kategori",
          url: "/category",
        },
        {
          name: "Produk",
          url: "/product",
        },
        {
          name: "Gudang",
          url: "/warehouse",
        },
        {
          name: "Penyesuaian Stok",
          url: "/stock-adjustment",
        },
        {
          name: "Transfer Gudang",
          url: "/transfer-warehouse",
        },
      ],
    },
    {
      id: 2,
      name: "Pembelian",
      slug: "pembelian",
      url: "",
      icon: LocalMall,
      submenu: [
        {
          name: "Order Pembelian",
          url: "/purchase-order",
        },
        {
          name: "Faktur Pembelian",
          url: "/purchase-invoice",
        },
      ],
    },
    {
      id: 3,
      name: "Penjualan",
      slug: "penjualan",
      url: "",
      icon: ShoppingCart,
      submenu: [
        {
          name: "Order Penjualan",
          url: "/sales-order",
        },
        {
          name: "Faktur Penjualan",
          url: "/sales-invoice",
        },
      ],
    },
    {
      id: 4,
      name: "Payments",
      slug: "pembayaran",
      url: "",
      icon: Payments,
      submenu: [
        {
          name: "Metode Pembayaran",
          url: "/payment-methodr",
        },
        {
          name: "Dana Keluar",
          url: "/outflows",
        },
        {
          name: "Dana Masuk",
          url: "/income",
        },
      ],
    },
  ];

  return data;
};

export default ListMenu;
