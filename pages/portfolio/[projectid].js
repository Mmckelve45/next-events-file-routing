import { useRouter } from "next/router";
import React from "react";

export default function PortfolioProjectPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  //send request with router.query.projectid

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
}
