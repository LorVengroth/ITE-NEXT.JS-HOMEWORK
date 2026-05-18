import BlogComponent from "@/components/BlogComponent";
import { blogType } from "@/lib/blog/blog-type";
import { profile } from "console";


export default function BlogPage(){

    const blog:blogType[] = [
        {
            profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY92aTpP6KB4CHn81hZ8I5LCyfdnXlKlHQiA&s",
            name: "koko",
            position: "Rest Api developer"
        },
        {
            profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY92aTpP6KB4CHn81hZ8I5LCyfdnXlKlHQiA&s",
            name: "koko",
            position: "Rest Api developer"
        },
        {
            profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY92aTpP6KB4CHn81hZ8I5LCyfdnXlKlHQiA&s",
            name: "koko",
            position: "Rest Api developer"
        },
        {
            profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY92aTpP6KB4CHn81hZ8I5LCyfdnXlKlHQiA&s",
            name: "koko",
            position: "Rest Api developer"
        },
        {
            profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY92aTpP6KB4CHn81hZ8I5LCyfdnXlKlHQiA&s",
            name: "koko",
            position: "Rest Api developer"
        },
        {
            profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY92aTpP6KB4CHn81hZ8I5LCyfdnXlKlHQiA&s",
            name: "koko",
            position: "Rest Api developer"
        },
    ]

    return(
        <div className="grid grid-cols-3">
            {
                blog?.map( ({profile , name , position}, _) =>
                (
                     <BlogComponent
                     key={_}
                    profile={profile}
                    name={name}
                    position={position}
                    />
                ) )
            }
        </div>
       
    )
}