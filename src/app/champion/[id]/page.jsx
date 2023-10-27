import SingleChampion from "./SingleChampion";

export default function Champion({ params }) {
  const { id } = params;
  return (
    <section>
      <SingleChampion id={id} />
    </section>
  );
}
