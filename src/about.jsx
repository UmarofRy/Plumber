import React from 'react'
import { Link } from "react-router-dom";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./about.css"

  // Aos kodini ishga tushirish uchun

  AOS.init({
    duration: 1000,
    once: false,
  });

  // Aos effect kodi tugashi


export default function about() {
  return (
    <div>
        <header className="header" data-aos="fade-down">
                <img src="../public/logo.svg" alt="" />
        
                <nav>
                  <Link className="header-link" to="/">
                    Home
                  </Link>
                  <Link className="header-link" to="/about">
                    About
                  </Link>
                  <Link className="header-link" to="/services">
                    Services
                  </Link>
                  <Link className="header-link" to="/project">
                    Project
                  </Link>
                  <Link className="header-link" to="/contact">
                    Contact
                  </Link>
        
                  <Link className="header-link" to="/contact">
                    <button className="header-btn">
                      Qo‘ng‘iroq uchun so‘rov yuboring <span className="phone-emoji">☎️</span>
                    </button>{" "}
                  </Link>
                </nav>
        </header> 




        <section
        className="contact-section"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom">

        <div className="contact-box">
          <div className="contact-left">
            <h1 style={{marginRight:'120px'}}>BIZ XAQIMIZDA</h1>
            <p>
              Ry-Santex — zamonaviy santexnika yechimlari uyi. Tez, sifatli va ishonchli xizmatlar. Har bir mijozga individual yondashuv va halollik asosida ishlovchi professionllar
            </p>
          </div>
                  
        </div>
        <div id="form-section"></div>
      </section>





          <div class="container" data-aos="fade-down">
    <h1>RY-SANTEX KOMPANIYASI</h1>
    <p>Lorem ipsum matni o‘rniga: Ry-Santex — tajribali santexniklar jamoasi. Ishonchli, sifatli va tezkor xizmatlar taqdim etamiz.</p>
    <p>Ko‘p yillik tajriba, zamonaviy uskunalar va mijozga individual yondashuv bizning ustuvorligimizdir.</p>
    <p>Har doim sifatli yechimlar taklif qilamiz va sizga qulaylik yaratamiz.</p>

    <div class="services">
      <div class="column">
        <div class="service">
          <h3>🏠 Uy-joy xizmati</h3>
          <p>Uydagi barcha santexnika muammolarini hal qilamiz. Sifatli va tez.</p>
        </div>
        <div class="service">
          <h3>🏢 Tijorat xizmati</h3>
          <p>Ofis va binolar uchun santexnika xizmatlari. Ishonchli hamkorlik.</p>
        </div>
        <div class="service">
          <h3>🛠 Texnik xizmat</h3>
          <p>Profilaktika, quvurlarni tozalash va tizim tekshiruvlari.</p>
        </div>
      </div>
      <div class="column">
        <div class="service">
          <h3>🏠 Uy-joy xizmati</h3>
          <p>Uydagi barcha santexnika muammolarini hal qilamiz. Sifatli va tez.</p>
        </div>
        <div class="service">
          <h3>🏢 Tijorat xizmati</h3>
          <p>Ofis va binolar uchun santexnika xizmatlari. Ishonchli hamkorlik.</p>
        </div>
        <div class="service">
          <h3>🛠 Texnik xizmat</h3>
          <p>Profilaktika, quvurlarni tozalash va tizim tekshiruvlari.</p>
        </div>
      </div>
    </div>
  </div>













         <div id="ProjectServise">
        <div className="service-image"  data-aos="zoom-out-right" >
          <img src="../public/bg.png" alt="Commercial Service" />
        </div>
        <div className="service-container" >
          <div className="service-text">
            <h2>Kommersiya xizmati</h2>
            <p>
             Bu xizmat turli biznes obyektlari — do‘kon, ofis, restoran va boshqa tijorat joylarida santexnika tizimlarini o‘rnatish va ta’mirlashni o‘z ichiga oladi. Ishlar professional darajada, xavfsizlik va standartlarga muvofiq bajariladi.
            </p>
          </div>
        </div>
      </div>






       <section className="section-7"  data-aos="zoom-in" >
        <div className="box-3">
          <h1>Bizning sadoqatli jamoamiz </h1>
          <p>
            Tajribali mutaxassislar jamoamiz har bir loyihaga katta e’tibor va
            mas’uliyat bilan yondashadi. Ish sifatiga qat’iy rioya qilamiz va
            har doim mijozlarimizga eng yaxshi xizmatni taqdim etishga
            intilamiz.
          </p>
        </div>





        <div className="box-5" data-aos="fade-down">
          <div className="card-2">
            <img
              className="img"
              src="../public/ecd5059b63d80c0cf24343bb0a229f5d.png"
              alt=""
            />
            <div className="name">
              <p>Umarov Raxmadjon</p>
              <p className="santexnik-text">Santexnik</p>
            </div>
          </div>

          <div className="card-2">
            <img
              className="img"
              src="../public/ecd5059b63d80c0cf24343bb0a229f5d.png"
              alt=""
            />
            <div className="name">
              <p>Umarov Axmadjon</p>
              <p className="santexnik-text">Santexnik</p>
            </div>
          </div>
        </div>
      </section>


   



      <section className="section-8" data-aos="fade-down">
        <div className="box-6">
          <div className="box-7">
            <h1 className="box-6h1">TAVSIFNOMA</h1>
            <p>
              Santexnika ustalari juda tez va professional ishlashdi. Ularning
              yondashuvi va xizmat sifati meni chin dildan qoniqtirdi. Muammolar
              tezda hal qilindi, hammasi aniq va sifatli bajarildi. Ish paytida
              barcha savollarga javob berishdi va maslahatlar berdilar. Bunday
              xizmat uchun minnatdorman va barchaga tavsiya qilaman!
            </p>

            <b style={{ color: "#DD3142", fontSize: "24px" }}>★ ★ ★ ★ ★</b>
          </div>
        </div>
      </section>

     <section className="section-9" data-aos="fade-down">
        <span>Bizning so‘nggi bloglarimiz</span>
        <div className="card-box">
          <div className="home-card">
            <img src="../public/Mask Group (1).png" alt="" />
            <h1>Quvurlarni ta’mirlash bo‘yicha usta</h1>
            <p>
              Suv quvurlaridagi nosozliklar endi muammo emas. Malakali
              ustalarimiz sizning uyingizda sifatli xizmat ko‘rsatadi.
            </p>
          </div>

          <div className="home-card">
            <img src="../public/Mask Group.png" alt="" />
            <h1>Zamonaviy santexnik xizmatlari</h1>
            <p>
              Har qanday uy sharoitida xavfsiz va tezkor santexnik xizmatlar.
              Ishonchli va tajribali mutaxassislar bilan muammolaringizni hal
              qiling.
            </p>
          </div>

          <div className="home-card">
            <img src="../public/Rectangle 172.png" alt="" />
            <h1>Malakali santexnik ustasi xizmatlaringizda</h1>
            <p>
              Quvurlar, kranlar va boshqa santexnika tizimlarini ta’mirlash —
              bizda oson va tez. Ustalarimiz sifatlilikka kafolat beradi.
            </p>
          </div>
        </div>
      </section>



    



        



      <footer class="footer">
        <div class="footer-container">
          <div class="footer-box about">
            <div class="logo">
              <img src="../public/logo.png" alt="" />
            </div>
            <p>
              Lore Issue is simply dummy text of the printing and typesetting
              industry. Lore Issue has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div class="socials">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-google"></i>
              <i class="fab fa-twitter"></i>
            </div>
          </div>

          <div class="footer-box services">
            <h4>XIZMATLARIMIZ</h4>
            <ul>
              <li>Hammom santexnika xizmati</li>
              <li>Oshxona santexnika xizmati</li>
              <li>Tom santexnika xizmati</li>
              <li>Unitaz va rakovina almashtirish</li>
              <li>Dush kabina o‘rnatish</li>
              <li>Sanuzel to‘liq ta’miri</li>
            </ul>
          </div>

          <div class="footer-box contact">
            <h4>CONTACT</h4>
            <p>
              +998 88-139-55-11 <br />
              TG: @Ry_umaroff
            </p>
            <p>
              Uzbekistan
              <br />
              Toshkent
            </p>
            <p>
              Ish kuni 24/7 <br />
              08:00 20:00
            </p>
          </div>
        </div>

        <div class="footer-bottom">
          <p>
            © 2020 Umarov Plumbing Services. All rights reserved. Crafted with
            care by Umarov Tech.
          </p>
        </div>
      </footer>

   </div>
  )
}
