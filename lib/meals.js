import sql from 'better-sqlite3'
import slugify from 'slugify';

const db = sql('meals.db');

export async function getMeals(){
    await new Promise((resolve)=> setTimeout(resolve,2000)); // simulate delay for loading data
   // throw new Error("Failed to get data")
    return db.prepare('SELECT * FROM meals').all();
}


export function getMeal(slug){
 return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export function saveMeal(meal){
    meal.slug = slugify(meal.title,{lower:true})
    meal.instructions = xss(meal.instructions)

}