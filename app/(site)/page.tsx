import Header from "@/components/ui/Header";
import ListItem from "@/components/ui/ListItem";
import Image from "next/image";

export default function Home() {
  return (
    <h1 className="bg-neutral-900 w-full h-full overflow-hidden overflow-y-auto rounded-lg">
      <Header>
        <div>
          <h1 className="text-white text-3xl font-semibold">Welcome Back</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 ">
            <ListItem
              image="/images/Liked.jpg"
              name="Like songs"
              href="Liked"
            />
          </div>
        </div>
      </Header>
    </h1>
  );
}
