export default function ContactPage() {
  return (
    <div className="site-width contact-page">
      <section className="contact-page__hero">
        <h1>contacto</h1>
      </section>

      <form className="contact-form">
        <div className="contact-field">
          <label htmlFor="nombre">nombre</label>
          <input id="nombre" name="nombre" placeholder="su nombre..." />
        </div>

        <div className="contact-field">
          <label htmlFor="apellido">apellido</label>
          <input id="apellido" name="apellido" placeholder="su apellido..." />
        </div>

        <div className="contact-field">
          <label htmlFor="email">dirección de correo electrónico</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="su dirección de correo electrónico..."
          />
        </div>

        <div className="contact-field">
          <label htmlFor="telefono">telefono</label>
          <input id="telefono" name="telefono" placeholder="su telefono..." />
        </div>

        <div className="contact-field">
          <label htmlFor="mensaje">mensaje</label>
          <textarea id="mensaje" name="mensaje" placeholder="tu mensaje..." />
        </div>

        <button type="submit" className="contact-submit">
          enviar
        </button>
      </form>
    </div>
  );
}
