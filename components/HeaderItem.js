export default function HeaderItem({title, Icon}) {
    return (
        <div className="group flex flex-col items-center cursor-pointer 
        w-12 sm:w-20 hover:text-white active:scale-95 active:transition active:duration-100 active:transform active:ease-out " >
            <Icon className="h-8 mb-1 group-hover:animate-bounce" />
            <p className="opacity-0 group-hover:opacity-100 tracking-widest " >{title}</p>
        </div>
    )
}
