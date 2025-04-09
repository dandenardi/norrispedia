import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col justify-center p-8 text-center">
        <h1 className="text-4xl font-bold text-orange-600 mb-12">
          Bem-vindo ao NorrisVerso!
        </h1>
        <section className="flex flex-col items-center gap-6 max-w-2x1">
          <p className="max-w-xl text-lg text-gray-800 dark:text-gray-200">
            Este projeto demonstra como Chuck Norris usaria o Next.js 14,
            tailwind CSS e boas práticas de desenvolvimento, caso se aventurasse
            pelo desenvolvimento web (brincadeira, se o Chuck Norris quisesse,
            bastaria pensar para criar um site muito superior...). Aqui você
            pode ter acesso a fatos sobre o Chuck Norris, acessar a área
            privativa (protegida por auth) e explorar rotas dinâmicas. Sinta-se
            em casa!
          </p>

          <p className="max-w-xl text-lg text-gray-800 dark:text-gray-200">
            Aqui você pode ter acesso a fatos sobre o Chuck Norris, acessar a
            área privativa (protegida por auth) e explorar rotas dinâmicas.
            Sinta-se em casa!
          </p>

          <p className="max-w-xl text-lg text-gray-800 dark:text-gray-200">
            Sinta-se em casa!
          </p>
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </>
  );
}
