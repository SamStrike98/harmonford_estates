import PropertySingle from "@/components/PropertySingle"

const page = ({ params }) => {

  return (

    <div className=''>
      <PropertySingle id={params.id}/>
    </div>
  )
}

export default page