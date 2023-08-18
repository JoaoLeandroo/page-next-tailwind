

export default function Card(props) {
    return(
        <section className="w-52 h-52 bg-blue-600 rounded-lg flex justify-center items-center">
            <h2 className="text-white text-2xl font-bold">{props.tittle}</h2>
        </section>
    )
}