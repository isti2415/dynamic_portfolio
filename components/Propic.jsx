import Image from "next/image";

const Propic = ({ containerStyles, imgSrc }) => {
    return <div className={`${containerStyles}`}>
        <Image src={imgSrc} alt="Istiaq Ahmed" fill priority />
    </div>
}

export default Propic;