import { PhotoDialog } from "@/app/ui/home/photo-dialog";
import { Photo } from "@/app/ui/home/photo";

export default  function PhotoPage(/*{params}: {params: Promise<{id: string}>}*/){
 // const param = (await params).id
  return (
    <>
      <Photo />
      <PhotoDialog />
    </>
  )
}