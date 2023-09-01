import SingleChampion from "@/app/components/SingleChampion";

export default function Champion({ params }) {
  const { id } = params;
  return (
    <section>
      <SingleChampion id={id} />
    </section>
  );
}
