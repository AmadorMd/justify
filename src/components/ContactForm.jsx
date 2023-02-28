export function ContactForm(){
    return (
        <section className="px-6">
        <form action="">
          <h3 className="text-3xl font-bold text-secondary">Contactanos</h3>
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" className="" />
          </div>
          <div className="form-group">
            <label htmlFor="nombre">Apellidos:</label>
            <input type="text" className="" />
          </div>
          <div className="form-group">
            <label htmlFor="nombre">Teléfono/celular:</label>
            <input type="text" className="" />
          </div>
          <div className="form-group">
            <label htmlFor="nombre">Correo electrónico:</label>
            <input type="text" className="" />
          </div>
          <div className="form-group">
            <label htmlFor="consulta">Consulta:</label>
            <textarea name="consulta" id="consulta" cols="30" rows="6"></textarea>
          </div>
          <div className="text-center mt-5">
            <button type="submit" className="bg-secondary text-2xl text-white font-extrabold px-6 py-2 rounded-full hover:bg-yellow-700 focus:ring-4 focus:ring-secondary focus:ring-opacity-40">
              Enviar
            </button>
          </div>
        </form>
      </section>
    )
}