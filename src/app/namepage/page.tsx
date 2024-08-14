import Image from "next/image";
import Link from "next/link";
export default function Namepage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
            <h1>
                This is Name page
            </h1>
            <h1>
                my name is Shaheer Ahmad
            </h1>
        </div>
        <Link href='/'>Go to main page </Link>
        <div>
        <Link href='/homepage'>back to Home page </Link>
        </div>
     </main>
  );
}