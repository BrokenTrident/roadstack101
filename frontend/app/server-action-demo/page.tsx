import { revalidatePath } from "next/cache";


const authToken = process.env.NEXT_PUBLIC_DUMMY_KEY || "demo-key";
const auth = `Token ${authToken}`;

async function getAuthor(authorId: string) {
  const res = await fetch(`http://localhost:8000/home/api/authors/${authorId}/`, {
    cache: "no-store",
    headers: { Authorization: auth },
  });
  return res.json();
}

async function updateAuthor(formData: FormData) {
  "use server";
  const name = formData.get("name");
  const authorId = formData.get("authorId") as string;
  await fetch(`http://localhost:8000/home/api/authors/${authorId}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: auth,
    },
    body: JSON.stringify({ name }),
  });
  revalidatePath("/server-action-demo");
}

export default async function ServerActionDemo() {
  const defaultAuthorId = "3";
  const author = await getAuthor(defaultAuthorId);
  return (
    <main>
      <h1>Server Action Demo</h1>
      <div>Author: {author.name}</div>
      <form action={updateAuthor} style={{marginTop: 20}}>
        <label>
          Author ID:
          <input name="authorId" defaultValue={defaultAuthorId} style={{ width: 60, marginLeft: 8 }} min={1} type="number" />
        </label>
        <input name="name" placeholder="New name" />
        <button type="submit">Update Name</button>
      </form>
    </main>
  );
}
