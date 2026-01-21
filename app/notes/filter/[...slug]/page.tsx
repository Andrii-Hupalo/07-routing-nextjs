import NotesClient from "./Notes.client";

type Props = {
  params: Promise<{ slug?: string[] }>;
};

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const tag =
    resolvedParams.slug?.[0] === "all" ? undefined : resolvedParams.slug?.[0];

  return <NotesClient tag={tag} />;
}
