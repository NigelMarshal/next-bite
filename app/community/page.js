import Image from "next/image";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";
import classes from "./page.module.css";

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Brought together by <span className={classes.highlight}>flavor</span>
        </h1>
        <p>Be part of NextBites — a space where every recipe has a story.</p>
      </header>
      <main className={classes.main}>
        <h2>What you&#39;ll enjoy</h2>

        <ul className={classes.perks}>
          <li>
            <Image src={mealIcon} alt="A delicious meal" />
            <p>Explore creative dishes from everyday cooks</p>
          </li>
          <li>
            <Image src={communityIcon} alt="A crowd of people, cooking" />
            <p>Connect over shared tastes and cooking styles</p>
          </li>
          <li>
            <Image
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
            />
            <p>Join community-driven cooking challenges</p>
          </li>
        </ul>
      </main>
    </>
  );
}
