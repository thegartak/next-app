import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mac tab",
  description: "MAc description should be here",
};

export default async function MacPage({params}: {params: Promise<{slug: string[]}>}){
  const {slug} = (await params);
  
  return (  
    <>
    {slug?.length}
    <br />
    <div>This is a MAc {slug} </div>
    </>
  )
}