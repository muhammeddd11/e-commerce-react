import Card from "./Card";
export default function DisplayCard({ data, handleActive }) {
  return (
    <>
      {data.map((product) => (
        <Card product={product} key={product.id} handleActive={handleActive} />
      ))}
    </>
  );
}
