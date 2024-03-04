import Mealsitem from "./meals-item.js"
import classes from "./meal-grid.module.css"

export default function MealsGrid({meals}){
    return <ul className={classes.meals}>
        {meals.map(meal=> <li key={meal.id}>
            <Mealsitem {...meal}/>
        </li>)}
    </ul>
}