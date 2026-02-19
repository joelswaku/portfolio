import Link from "next/link"

export type CardProps = {
  title: string
  p: string
  cnt: string
  cnt2?: string
  url: string
}

function Card({ title, p, cnt, cnt2, url }: CardProps) {
  return (
    <div className=" w-svw flex flex-col items-center md:text-2xl border  bg-blue-100 p-3 hover:scale-101">
    <Link
      href={url}
   className="w-full" >
      <h2>{title}</h2>
      <p>{p}</p>
      <strong>{cnt}</strong>
      {cnt2 && <span> • {cnt2}</span>}
    </Link>
    </div>
  )
}

export default Card










// import Link from 'next/link'

// export type CardProps =  {
//     title: string
//     p: string
//     cnt: string
//     cnt2?: string
//     url: string
// }

// function Card({title ,p , cnt, cnt2,url}: CardProps ) {
//   return (
//     <div className='bg-blue-500 w-xl m-1.5'>
//     <Link href={url} className='bg-blue-300 flex flex-col items-center gap-1'>
//         <h1 className='text-xl text-white font-bold'>{title}</h1>
//         <h3>{p}</h3>
//         <p>{cnt}</p>
//         <p>{cnt2 &&  <span>cnt2</span>}</p>
//     </Link>
//     </div>
//   )
// }

// export default Card