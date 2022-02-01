import './Insult.css';
function Insult({ play, insult }){
    return(
        <figure>
            <blockquote>
                <p> { insult }</p>
            </blockquote>
            <figcaption> — { play } </figcaption>
        </figure>
    )
}
export default Insult;