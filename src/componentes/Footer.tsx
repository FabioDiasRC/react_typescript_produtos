import { RiProductHuntLine } from 'react-icons/ri';
import { BsInstagram } from 'react-icons/bs';
import { BsTelephoneInbound } from 'react-icons/bs';
import { GrFacebook } from 'react-icons/gr';
import { BsWhatsapp } from 'react-icons/bs';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import '../scss/stylesheet.scss'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className='container'>
        <div className="row">
          <div className="col-md-12 footer__title">
            <h2><RiProductHuntLine />Products Production<RiProductHuntLine /></h2>
          </div>
          <div className="col-md-4 footer__partial">
            <h2>Empresa</h2>
            <h5>Empresa</h5>
            <h5><BsTelephoneInbound/> Telefone:  (99)99999-9999</h5>
            <h5>lorem</h5>
          </div>
          <div className="col-md-4 footer__partial">
            <h2>Produtos</h2>
            <Link to='/produtos' className='footer__links'><h5>Produtos</h5></Link>
            <Link to='/carrinho' className='footer__links'><h5>Carrinho</h5></Link>
            <Link to='/favoritos' className='footer__links'><h5>Favoritos</h5></Link>
          </div>
          <div className="col-md-4 footer__partial">
            <h2>Contatos</h2>
            <a href="https://github.com/FabioDiasRC" target="_blank" className='footer__links'><h5><BsInstagram /> Instagram</h5></a>
            <a href="https://github.com/FabioDiasRC" target="_blank" className='footer__links'><h5><GrFacebook /> Facebook</h5></a>
            <a href="https://github.com/FabioDiasRC" target="_blank" className='footer__links'><h5><BsWhatsapp /> Whatsapp</h5></a>
          </div>

          <div className="col-md-12 footer__end">
            <h6>2022 - Products Production <AiOutlineCopyrightCircle/></h6>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Footer;
