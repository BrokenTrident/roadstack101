"use client";
import { useEffect, useState } from "react";

type User = { name: string };

export default function ClientActionDemo() {
  const [name, setName] = useState("");
  const [authorId, setAuthorId] = useState("3");
  const authToken = process.env.NEXT_PUBLIC_DUMMY_KEY || "demo-key";
  const auth = `Token ${authToken}`;

  useEffect(() => {
    if (!authorId) return;
    fetch(`http://localhost:8000/home/api/authors/${authorId}/`, {
      headers: { Authorization: auth },
    })
      .then((res) => res.json())
  }, [authorId]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!authorId) return;
    await fetch(`http://localhost:8000/home/api/authors/${authorId}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: auth,
      },
      body: JSON.stringify({ name }),
    });
    setName("");
    const updated = await fetch(`http://localhost:8000/home/api/authors/${authorId}/`, {
      headers: { Authorization: auth },
    }).then(res => res.json());
  }

  return (
    <main>
      <h1>Client Action Demo</h1>
      <div>
        <label>
          Author ID:
          <input
            type="number"
            value={authorId}
            onChange={e => setAuthorId(e.target.value)}
            style={{ width: 60, marginLeft: 8 }}
            min={1}
          />
        </label>
      </div>
      {/* <div>User: {user ? user.name : "Loading..."}</div> */}
      <form onSubmit={handleSubmit} style={{marginTop: 20}}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="New name" />
        <button type="submit">Update Name</button>
      </form>
    </main>
  );
}
