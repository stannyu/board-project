import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4 w-full h-full items-center">
      <div>This screen is for authenticated users only</div>
      <div>
        <UserButton />
      </div>
    </div>
  );
}
