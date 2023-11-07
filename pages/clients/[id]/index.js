import { useRouter } from "next/router";
import React from "react";

export default function ClientProjectsPage() {
  const router = useRouter();
  console.log(router.query);

  function loadProjectHandler() {
    //load data...
    // push is like using the link component
    // replace, push,
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "matt", clientprojectid: "projecta" },
    });
    // router.push("/clients/max/projecta");
  }

  return (
    <div>
      <h1>The projects of a given client</h1>
      <button onClick={loadProjectHandler}>
        Load Project A
      </button>
    </div>
  );
}
