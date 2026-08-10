import "./Product.css";
import Price from "./price";

function Product({ title, idx }) {
  let oldPrices = ["12,495", "11,900", "1,599", "599"];
  let newPrices = ["8,999", "9,199", "899", "278"];
  let description = [
    ["8,000 DPI", "sdafjasd;fajfj;a"],
    ["intuitive surface", "sdafjasd;fajfj;a"],
    ["designed for ipad Pro", "sdafjasd;fajfj;a"],
    ["wireless", "sdafjasd;fajfj;a"],
  ];

  return (
    <div className="Product">
      <h3>{title}</h3>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}
export default Product;
