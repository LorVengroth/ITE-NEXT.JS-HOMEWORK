export default async function HomeSlug({params}:{params: Promise<{slug:string}>}){
    
    const {slug} = await params ;

    return(
        <div>
            my home slug : {slug}
        </div>
    )
}