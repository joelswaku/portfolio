import Card from "./Card"
import type { CardProps } from "./Card"

// const cards: CardProps[] = [
//   {
//     title: "Fast Delivery",
//     p: "Worldwide shipping",
//     cnt: "24/7",
//     cnt2: "Support",
//     url: "/delivery",
//   },
//   {
//     title: "Secure Payment",
//     p: "Encrypted transactions",
//     cnt: "SSL",
//     url: "/payment",
//   },
// ]

// export default function CartSection() {
//   return (
//     <div className="flex  gap-2 w-full  bg-fixed justify-between mt-14 bg-white gap-2">
//       {cards.map(card => (
//         <Card key={card.title} {...card} />
//       ))}
//     </div>
//   )
// }





import React from 'react'

function CartSection() {
  return (
    <div className="flex justify-between bg-transparent gap-2 mt-4 ">
        <Card title="🏛 Government Platforms " p="Tax systems" cnt="Digital ID" cnt2=" E-invoicing " url="/solutions/government-solutions" />
        <Card title="💳 Financial Infrastructure" p="Payments" cnt="Wallets  " cnt2=" Cross-border " url="/solutions/startup-solutions" />
        <Card title="🧩 Enterprise & SaaS    " p=" Compliance " cnt="ERP / CRM " cnt2="Analytics " url="/solutions/enterprise-solutions" />
       
    </div>
  )
}

export default CartSection



