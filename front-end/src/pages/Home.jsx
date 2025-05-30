import React from "react"
import Item from "../components/item";

export const Home = () => {
  return (
    <section>
         <div className="gap-8 p-8 max-w-7xl mx-auto grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))]">
         <Item/>
         <Item/>
         <Item/>
         <Item/>
         <Item/>
         <Item/>
         <Item/>
         <Item/>
         <Item/>
         <Item/>
         <Item/>
         <Item/>
        </div>
      </section>
  )
}

export default Home;