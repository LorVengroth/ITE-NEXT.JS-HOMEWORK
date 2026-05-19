// // catch all route

import { use } from "react";

// export default async function SlugSegment(
//     {
//         params
//     }: 
//     {
//         params: Promise<{slugs:string[]}>
//     }
// ) {

// const {slugs} = await params ;

//   return (
//     <div>My Slug Segment catch all : {slugs}</div>
//   )
// }




// with use keywork + "use client "
// catch all route

export default  function SlugSegment(
    {
        params
    }: 
    {
        params: Promise<{slugs:string[]}>
    }
) {

const {slugs} = use(params)  ;

  return (
    <div>My Slug Segment catch all : {slugs}</div>
  )
}
