import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";

export default function Home() {
  return (
    <>
      <Introduction>
        <Header />
        <Hero />
      </Introduction>
    </>
  );
}
