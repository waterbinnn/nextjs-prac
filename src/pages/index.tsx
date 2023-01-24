import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <h1>home</h1>
      <div>
        <Link href={"/rank"}>Lanking</Link>
        <br />
        <Link href={"/search"}>Search Movies</Link>
      </div>
    </>
  );
}
