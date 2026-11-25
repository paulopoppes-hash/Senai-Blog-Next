export default function Page() {
  return (
    <main className="page">
      <h1>Blog Next.js</h1>
      <p>Bem-vindo ao nosso blog desenvolvido com Next.js e App Router.</p>
      <section className="posts">
        <article>
          <h2>Bem-vindo ao nosso blog</h2>
          <p>Este é um blog desenvolvido com Next.js, utilizando App Router e renderização no servidor.</p>
        </article>
        <article>
          <h2>Por que usar Next.js?</h2>
          <p>Next.js oferece SSR, SSG, rotas baseadas em arquivos e otimização de desempenho.</p>
        </article>
        <article>
          <h2>Dicas de Front-end</h2>
          <p>Boas práticas para construir interfaces modernas e responsivas.</p>
        </article>
      </section>
    </main>
  )
}
