

function Contato() {

    return (

        <section className="contatos" id="contatos">
            <h3>Contatos</h3>
            <div className="contato-secao">
                <div className="contato">
                    <a href="https://www.whatsapp.com/?lang=pt_BR" target="_blank">
                    <i className="fa-brands fa-whatsapp" ></i>
                        <span>WhatsApp</span>
                    </a>
                </div>
                <div className="contato">
                    <a href="https://www.instagram.com/sitio_do_dindo/" target="_blank">
                    <i className="fa-brands fa-instagram" target="_blank"></i>
                        <span>Instagram</span>
                    </a>
                </div>
                <div className="contato">
                    <a href="https://www.facebook.com/?locale=pt_BR" target="_blank">
                    <i className="fa-brands fa-facebook" target="_blank"></i>
                        <span>Facebook</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contato