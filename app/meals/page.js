import MealsGrid from "components/meals/meals.grid";
import classes from "./page.module.css";
import Link from "next/link";

export default function Meals() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Tasty meals, created <span classes={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite meal and enjoy it!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favourite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
