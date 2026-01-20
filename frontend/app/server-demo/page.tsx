export default async function ServerDemo() {
  const res = await fetch("http://localhost:8000/home/api/books/", {
    cache: "no-store",
    headers: {
      Authorization: `Token ${process.env.NEXT_PUBLIC_DUMMY_KEY}`,
      Accept: "application/json",
    },
  });
  const data = await res.json();
  const books = data.results || [];
  return (
    <main>
      <h1>Server Demo</h1>
      <ul>
        {books.map(
          (book: { id: number; title: string; author: { name: string } }, idx: number) => (
            <li key={book.id ?? idx}>
              <strong>{book.title}</strong> by {book.author.name}
            </li>
          )
        )}
      </ul>
      <p>Fetched on the server. User data is never exposed to the browser network tab.</p>
    </main>
  );
}
