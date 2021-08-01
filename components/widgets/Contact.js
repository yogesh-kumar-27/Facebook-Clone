import Image from 'next/image'
const Contact = ({name, src}) => {
    // console.log(name, src)
    return (
        <div className="relative flex items-center space-x-3 mb-2 hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
            <Image
            className="rounded-full"
            src={src}
            height={50}
            width={50}
            layout="fixed"
            />
            <p>{name}</p>
            <div className="absolute bottom-2 left-7 bg-blue-700 h-3 w-3 rounded-full" />
        </div>
    )
}

export default Contact
