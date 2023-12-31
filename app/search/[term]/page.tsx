import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};

function SearchPage({ params: { term } }: Props) {
  if (!term) notFound();

  const termToUse = decodeURI(term);

  //   API call to get movies

  return (
    <div>
      <h2>Search Page</h2>
    </div>
  );
}

export default SearchPage;
