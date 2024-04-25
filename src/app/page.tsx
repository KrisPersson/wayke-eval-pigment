import Link from "next/link";

export default function Page() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>Startsida</h2>
      <Link href="/elbil">Elbil</Link>
    </main>
  );
}
