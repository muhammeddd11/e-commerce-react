import Card from "./Card";
export default function DisplayCard({ data }) {
  return (
    <>
      {data.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </>
  );
}
