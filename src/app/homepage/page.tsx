import Image from "next/image";
import Link from "next/link";
export default function Homepage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
            <h1>
                This is home page
            </h1>
        </div>
        <Link href='/'>back to main page</Link>
        <div>
        <Link href='/namepage'>Go to name page</Link>
        </div>
     </main>
  );
}