import '/src/assets/css/cocktail-info.css'

const CocktalInfo = ({cocktail})=>{
    let ingredients = []
    for (let i = 0; i < 15; i++) {
        cocktail[`strIngredient${i}`] != null && ingredients.push(cocktail[`strIngredient${i}`])
    }
    
    return(
        <div className='info__background' onClick={ (e)=>e.currentTarget.classList.toggle('show') }>
            <div className="cocktail__body" onClick={(e)=> e.stopPropagation()}>
                <div className='cocktail__data'>
                    <div className='cocktail__image'>
                        <img src={ cocktail.strDrinkThumb } alt="cocktail-img" />
                    </div>
                    <div className='cocktail__info'>
                        <div className='close'>
                            <a onClick={ ()=> document.querySelector('.info__background').classList.toggle('show') }>
                                <i className="fa-solid fa-circle-xmark"></i>
                            </a>
                        </div>
                        <span><b> Cocktail: </b> { cocktail.strDrink } </span>
                        <span> <b>Category:</b> { cocktail.strCategory } </span>
                        <b>Instructions:</b><small> { cocktail.strInstructions} </small>
                        <span> <b> Ingredients: </b> </span>
                        <ul>
                            {
                                ingredients.map((element, index)=> <li key={index}> { element } </li> )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CocktalInfo