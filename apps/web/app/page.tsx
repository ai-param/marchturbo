"use client"
import { Button } from "@repo/ui/button";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <div>
      <button onClick={()=>{
        router.push('/signup');
      }}>
        click here to signin
      </button>
      <br/>
      <Button appName="nextJs">
        click here
      </Button>
    </div>
  );
}
