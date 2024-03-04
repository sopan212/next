import Link from "next/link"
import classes from "./page.module.css"
import MealsGrid from "@/Components/meals/meal-gird"
import { getMeals } from "@/lib/meals"
import { Suspense } from "react";

async function Meals() {
    const meals = await getMeals();
    return <MealsGrid meals={meals} />
}

export default function MealsPage() {


    return (
        <>
            <header className={classes.header}>
                <h1> Delicius Meals,Created <span className={classes.highlight}>By You!</span></h1>
                <p>
                    Choose Your Favorite Recipe And Cook It Yourself.It Easy And Fun!
                </p>
                <p className={classes.cta}>
                    <Link href="/meals/share">
                        Share Your Favorite Recipe
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Fetching  meal data...</p>}>
                    <Meals />
                </Suspense>
                
            </main>
        </>
    )
}