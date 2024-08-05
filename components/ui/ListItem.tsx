"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface IListItem {
  image: string;
  name: string;
  href: string;
}

function ListItem({ image, name, href }: IListItem) {
  const onClickPush = () => {
    Router.push(href);
  };
  const Router = useRouter();
  return (
    <button className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4">
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image className="object-cover" fill src={image} alt="Image" />
      </div>
      <p>{name}</p>
    </button>
  );
}

export default ListItem;
