import '/src/assets/css/card.css'
const Card = ({cocktail, callback})=>{
    return(
        <a onClick={ ()=> callback(cocktail) } className='link__card'>
            <div className="card">
                <img src={ cocktail.strDrinkThumb } alt="cocktail-img" />
                <h2> { cocktail.strDrink } </h2>
                <p> { cocktail.strInstructions.substring(0,70) }...</p>
            </div>
        </a>
    )
}

export default Card