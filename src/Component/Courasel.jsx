import { Carousel } from "primereact/carousel";
import { Tag } from "primereact/tag";
import React, { useState } from "react";

const productsDemo = [
  {
    id: "1000",
    code: "f230fh0g3",
    name: "SAMSUNG Galaxy Z Flip5",
    description: "(Mint, 256 GB)  (8 GB RAM)",
    image: require("../common/assets/lumia1.jpg"),
    price: "99,999",
    category: "Accessories",
    quantity: 24,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
  {
    id: "1001",
    code: "f230fh0g34",
    name: "SAMSUNG Galaxy Z Flip5",
    description: "(Mint, 256 GB)  (8 GB RAM)",
    image: require("../common/assets/samsung-galaxy-z-flip5.webp"),
    price: "90,999",
    category: "Accessories",
    quantity: 2,
    inventoryStatus: "INSTOCK",
    rating: 4.7,
  },
  {
    id: "1003",
    code: "f230fh0g35",
    name: "SAMSUNG Galaxy Z Fold",
    description: "(Mint, 256 GB)  (8 GB RAM)",
    image: require("../common/assets/samsung-galaxy-z-fold-2.jpg"),
    price: "78,999",
    category: "Accessories",
    quantity: 2,
    inventoryStatus: "INSTOCK",
    rating: 4.7,
  },
  {
    id: "1004",
    code: "f230fh0g36",
    name: "Motorola Razr",
    description: "(Mint, 256 GB)  (8 GB RAM)",
    image: require("../common/assets/razr.webp"),
    price: "60,999",
    category: "Accessories",
    quantity: 2,
    inventoryStatus: "INSTOCK",
    rating: 4.7,
  },
];
const CarouselSection = () => {
  const [products, setProducts] = useState(productsDemo);
  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const getSeverity = (product) => {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  };

  //   useEffect(() => {
  //     ProductService.getProductsSmall().then((data) =>
  //       setProducts(data.slice(0, 9))
  //     );
  //   }, []);

  const productTemplate = (product) => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div className="mb-3">
          <img
            src={`${product.image}`}
            alt={product.name}
            className="w-full sm:h-15rem shadow-2 lg:h-40rem md:h-30rem"
            style={{ width: "90%", height: "90%" }}
            width="90%"
            height="90%"
          />
        </div>
        <div>
          <h4 className="mb-1">{product.name}</h4>
          <h6 className="mt-0 mb-3" style={{ fontSize: "large" }}>
            &#x20B9;{product.price}
          </h6>
          <Tag
            value={product.inventoryStatus}
            severity={getSeverity(product)}
          ></Tag>
          {/* <div className="mt-3 flex flex-wrap gap-1 justify-content-center">
            <Button icon="pi pi-search" rounded />
            <Button icon="pi pi-star-fill" rounded severity="success" />
          </div> */}
        </div>
      </div>
    );
  };

  return (
    <div className="card card-courasel">
      <Carousel
        value={products}
        numVisible={1}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
        circular={true}
        autoplayInterval={5000}
      />
    </div>
  );
};
export default CarouselSection;
