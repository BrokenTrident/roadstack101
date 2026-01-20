"use client";
import { useEffect, useState } from "react";

type Book = {
  id: number;
  title: string;
  author: {
    id: number;
    name: string;
  };
  published_date: string;
  isbn: string;
};

export default function ClientDemo() {
  const [books, setBooks] = useState<Book[]>([]);
  useEffect(() => {
    fetch("http://localhost:8000/home/api/books/", {
      headers: {
        Authorization: `Token ${process.env.NEXT_PUBLIC_DUMMY_KEY}`,
        Accept: "application/json",
      },
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => setBooks(data.results || []));
  }, []);
  return (
    <main>
      <h1>Client Demo</h1>
      <ul>
        {books.length > 0
          ? books.map((book) => (
              <li key={book.id}>
                <strong>{book.title}</strong> by {book.author.name}
              </li>
            ))
          : <li>Loading...</li>}
      </ul>
      <p>Fetched on the client. User data and the Authorization header are visible in the browser network tab.</p>
    </main>
  );
}
