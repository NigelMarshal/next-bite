import Link from "next/link";
import classes from "./page.module.css";
import ImageSlideshow from "../components/images/image-slideshow";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>NextBites</h1>
            <p>Hungry? Same.</p>
          </div>

          <div className={classes.cta}>
            <Link href="/community">Join the community</Link>
            <Link href="/meals">Explore meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextBites is where home cooks and food lovers come together to share
            their best recipes. Upload your creations, browse meals by others,
            and save your favorites.
          </p>
          <p>
            Whether you&apos;re into quick snacks or full-course meals,
            NextBites makes it easy to find, try, and enjoy new dishes every
            day.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextBites?</h2>
          <p>
            Cooking should feel simple and fun. NextBites focuses on clean
            design, useful tips, and a friendly community so you can spend more
            time enjoying your food.
          </p>
          <p>
            We&apos;re not just another recipe app. NextBites is built for
            everyday cooks who want fresh ideas without the clutter.
          </p>
        </section>
      </main>
    </>
  );
}
