import ErrorComponent from "../components/ErrorComponent";

export default function ErrorPage400() {
  return (
    <div>
      <ErrorComponent
        code={400}
        description="Oops!"
        image="/img/ethel.jpg"
      />
    </div>
  );
}
