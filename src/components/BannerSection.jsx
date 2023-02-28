export function BannerSection (){
    return(
        <section className="w-full px-6 mt-10 md:mx-auto md:max-w-screen-lg">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2">
            <img className="w-full" src="./src/assets/header-image.png" alt="" />
          </div>
          <div className="text-right md:text-left pl-0 md:pl-10 w-full md:w-1/2 ml-auto -mt-10 md:mt-0">
            <h1 className="text-5xl font-extrabold">
              <span className="text-primary">¿Te despidieron</span><span className="text-secondary"> de manera injusta?</span>
            </h1>
            <div className="mt-10 text-left">
              <h2 className="text-primary text-xl font-bold leading-tight">Te protegemos de manera
                  ágil con <span className="text-secondary">inteligencia artificial</span>,
                  desde la palma de tu mano.</h2>
            </div>
          </div>
          
        </div>
        
        <div className="mt-14 text-right md:text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-secondary">¿Qué es Justify?</h3>
          <p className="font-medium text-base md:text-xl text-primary">
            Justify es una firma de abogados dedicada a la protección de los derechos del trabajador en su lugar de trabajo.
          </p>
          <p className="font-medium text-base md:text-xl text-primary mt-5">
            Nos comprometemos a luchar contra la injusticia laboral y a buscar soluciones justas para nuestros clientes.
          </p>
        </div>
        <div className="mt-5 text-center">
          <h3 className="text-2xl font-extrabold text-primary leading-tight">
            Calcula fácil y rápido <br />
            <span className="text-secondary">un trato justo:</span>
          </h3>
        </div>
      </section>
    )
}