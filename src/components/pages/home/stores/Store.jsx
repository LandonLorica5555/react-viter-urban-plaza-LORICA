import React from 'react'
import { FaChild, FaFilm, FaStore, FaUtensils } from 'react-icons/fa'
import CardStore from '../../../partials/CardStore'

const Store = () => {
  return (
    <>
      {/* Stores Section */}
        <section id="stores" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
              Our Stores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Store 1 */}
              <CardStore image={"https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"} Alt={"Fashion Haven store"} icon={FaStore} title={"Fashion Haven"} description={"Trendy clothing for all ages and styles"} Floor={"Level 2, Section B"}/>
              

              {/* Store 2 */}
              <CardStore image={"https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"} Alt={"Gourmet Delights restaurant"} icon={FaUtensils} title={"Gourmet Delights"} description={"International cuisine and local favorites"} Floor={"Food Court, Level 1"}/>

              {/* Store 3 */}
              <CardStore image={"https://images.unsplash.com/photo-1590845947676-fa2576f401d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"} Alt={"CineMax Theaters"} icon={FaFilm} title={"CineMax Theaters"} description={"Latest blockbusters in 4K Dolby Atmos"} Floor={"Entertainment Zone, Level 3"}/>
              

              {/* Store 4 */}
              <CardStore image={"https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"} Alt={"Toy Wonderland store"} icon={FaChild} title={"Toy Wonderland"} description={"Toys and games for kids of all ages"} Floor={"Family Zone, Level 2"}/>

            </div>
          </div>
        </section>
    </>
  )
}

export default Store
