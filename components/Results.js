import Thumbnail from "./Thumbnail"

export default function Results(props) {
    let Results =  props.results.results
    return (
        <div className="px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {Results.map(result=>(
                <Thumbnail key={result.id} result={result} />
            ))}
        </div>
    )
}
