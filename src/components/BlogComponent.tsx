import { blogType } from "@/lib/blog/blog-type";
import Image from "next/image";
export default function BlogComponent({profile , name , position}:blogType){
    return(
       <div>
        <Image
         src={profile}
         alt="Profile"
         width={50}
         height={50}
        />
        <hr />
        <h1> Nmae: {name} </h1>
        <h2>Position: {position}</h2>
       </div>
      
     
    )
}