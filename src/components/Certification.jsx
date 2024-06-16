import Meta from "../assets/MetaCertificate.png"
import Stanford from "../assets/StanfordCertificate.png"

const Certification = () => {
  return (
    <>
    <div>
      <img src={Meta} alt="meta certificate" className="rounded-[25px] w-[40rem] h-[30rem]" />
      <img src={Stanford} alt="Stanford Certificate" className="rounded-[25px] w-[40rem] h-[30rem]"/>
    </div>
    </>
  )
}

export default Certification