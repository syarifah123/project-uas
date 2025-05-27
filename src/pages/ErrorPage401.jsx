import ErrorComponent from "../components/ErrorComponent";

export default function ErrorPage401() {
  return (
    <div>
      <ErrorComponent
        code={401}
        description="Kamu harus login untuk mengakses halaman ini."
        image="/img/ethel.jpg"
      />
    </div>
  );
}
