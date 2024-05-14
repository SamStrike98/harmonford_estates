import PropertySingle from "@/components/PropertySingle"

const page = ({ params }) => {

  return (

    <div className='pt-[400px]'>
      <PropertySingle id={params.id}/>
    </div>
  )
}

export default page