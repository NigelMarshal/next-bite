export default function MealDetails({ params }) {
  return (
    <main>
      {params.mealSlug}
      <h1>Meal Details!</h1>
    </main>
  );
}
