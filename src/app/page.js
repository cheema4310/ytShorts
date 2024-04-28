export default async function Home() {
  try {
    const res = await fetch('http://localhost:3000/api/users', {
      next: { revalidate: 60 },
    });
    const data = await res.json();
    console.log(data.data);
  } catch (error) {
    console.log(error);
  }

  return <>Home</>;
}
