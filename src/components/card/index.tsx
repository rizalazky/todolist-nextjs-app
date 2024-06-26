
"use client";

import { Card } from "flowbite-react";

type CardType = {
  title : string,
  description : string
}

export default function Component(card:CardType) {
  return (
    <Card href="#" className="max-w-sm px-4 py-2 w-[350px]">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {card.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 truncate">
        {card.description}
      </p>
    </Card>
  );
}
