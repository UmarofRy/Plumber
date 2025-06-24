import React from 'react';
import "./Services.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

  // Aos kodini ishga tushirish uchun

  AOS.init({
    duration: 1000,
    once: false,
  });

  // Aos effect kodi tugashi

export default function Services() {
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
          <Link className="header-link" to="/blog">
            Blog
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
      <hr />


        <section
        className="contact-section"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom">

        <div className="contact-box">
          <div className="contact-left">
            <h1 style={{marginRight:'120px'}}> XIZMATLAR</h1>
            <p>
                Biz mijozlarga sifatli santexnika xizmatlarini taklif qilamiz – quvurlarni ta'mirlash, o‘rnatish, to‘silib qolgan joylarni ochish va boshqa xizmatlar. Ishonchli, tez va arzon!   
            </p>
          </div>
                  
        </div>
        <div id="form-section"></div>
      </section>



      <section className='services-section'>
        <div className="services-container">
            <h1>Bizning xizmatlarimiz</h1>
            <p>Bizning santexnika xizmatlarimiz ishonchli, sifatli va professional yechimlar taklif qiladi. Har qanday quvur ta’miri, kran o‘rnatish, suv tizimi muammolari yoki nasos ishlari bo‘yicha tezkor va arzon xizmatlarni kafolatlaymiz. Tajribali mutaxassislarimiz zamonaviy uskunalar bilan kelib, muammoni qisqa vaqt ichida hal qiladi. Sizning uyingizdagi santexnika tizimi biz bilan doimo ishonchli qo‘llarda.</p>
        </div> 

        <div className="ServiceCardBox">
            <div className="ServiceCard">
                <div className="ServiceIcon">
                    <img src="../public/icon.png" alt="" />
                </div>
                <h1>Santexnika xizmati</h1>
                <p> Sifatli kran o‘rnatish va ta’mirlash xizmatlari. Sizning uyingizda suv tizimi doim soz ishlashini ta’minlaymiz.</p>
            </div>


            <div className="ServiceCard">
                <div className="ServiceIcon">
                    <img src="../public/Group.svg" alt="" />
                </div>
                <h1>Santexnika xizmati</h1>
                <p> Sifatli kran o‘rnatish va ta’mirlash xizmatlari. Sizning uyingizda suv tizimi doim soz ishlashini ta’minlaymiz.</p>
            </div>


            <div className="ServiceCard">
                <div className="ServiceIcon">
                    <img src="../public/Vector.svg" alt="" />
                </div>
                <h1>Santexnika xizmati</h1>
                <p> Sifatli kran o‘rnatish va ta’mirlash xizmatlari. Sizning uyingizda suv tizimi doim soz ishlashini ta’minlaymiz.</p>
            </div>


            <div className="ServiceCard">
                <div className="ServiceIcon">
                    <img src="../public/Group 274.svg" alt="" />
                </div>
                <h1>Santexnika xizmati</h1>
                <p> Sifatli kran o‘rnatish va ta’mirlash xizmatlari. Sizning uyingizda suv tizimi doim soz ishlashini ta’minlaymiz.</p>
            </div>


            <div className="ServiceCard">
                <div className="ServiceIcon">
                    <img src="../public/Group.svg" alt="" />
                </div>
                <h1>Santexnika xizmati</h1>
                <p> Sifatli kran o‘rnatish va ta’mirlash xizmatlari. Sizning uyingizda suv tizimi doim soz ishlashini ta’minlaymiz.</p>
            </div>


            <div className="ServiceCard">
                <div className="ServiceIcon">
                    <img src="../public/Vector.svg" alt="" />
                </div>
                <h1>Santexnika xizmati</h1>
                <p> Sifatli kran o‘rnatish va ta’mirlash xizmatlari. Sizning uyingizda suv tizimi doim soz ishlashini ta’minlaymiz.</p>
            </div>


            <div className="ServiceCard">
                <div className="ServiceIcon">
                    <img src="../public/Group 274.svg" alt="" />
                </div>
                <h1>Santexnika xizmati</h1>
                <p> Sifatli kran o‘rnatish va ta’mirlash xizmatlari. Sizning uyingizda suv tizimi doim soz ishlashini ta’minlaymiz.</p>
            </div>



            <div className="ServiceCard">
                <div className="ServiceIcon">
                    <img src="../public/Group.svg" alt="" />
                </div>
                <h1>Santexnika xizmati</h1>
                <p> Sifatli kran o‘rnatish va ta’mirlash xizmatlari. Sizning uyingizda suv tizimi doim soz ishlashini ta’minlaymiz.</p>
            </div>



            <div className="ServiceCard">
                <div className="ServiceIcon">
                    <img src="../public/Group.svg" alt="" />
                </div>
                <h1>Santexnika xizmati</h1>
                <p> Sifatli kran o‘rnatish va ta’mirlash xizmatlari. Sizning uyingizda suv tizimi doim soz ishlashini ta’minlaymiz.</p>
            </div>



            <div className="ServiceCard">
                <div className="ServiceIcon">
                    <img src="../public/icon.png" alt="" />
                </div>
                <h1>Santexnika xizmati</h1>
                <p> Sifatli kran o‘rnatish va ta’mirlash xizmatlari. Sizning uyingizda suv tizimi doim soz ishlashini ta’minlaymiz.</p>
            </div>




            <div className="ServiceCard">
                <div className="ServiceIcon">
                    <img src="../public/icon.png" alt="" />
                </div>
                <h1>Santexnika xizmati</h1>
                <p> Sifatli kran o‘rnatish va ta’mirlash xizmatlari. Sizning uyingizda suv tizimi doim soz ishlashini ta’minlaymiz.</p>
            </div>




            <div className="ServiceCard">
                <div className="ServiceIcon">
                    <img src="../public/Vector.svg" alt="" />
                </div>
                <h1>Santexnika xizmati</h1>
                <p> Sifatli kran o‘rnatish va ta’mirlash xizmatlari. Sizning uyingizda suv tizimi doim soz ishlashini ta’minlaymiz.</p>
            </div>


        </div>

      </section>





            <section className="section-7"
             data-aos="zoom-in">
                
        <div className="box-3">
          <h1>Bizning sadoqatli jamoamiz </h1>
          <p>
            Tajribali mutaxassislar jamoamiz har bir loyihaga katta e’tibor va
            mas’uliyat bilan yondashadi. Ish sifatiga qat’iy rioya qilamiz va
            har doim mijozlarimizga eng yaxshi xizmatni taqdim etishga
            intilamiz.
          </p>
        </div>

        <div className="box-5" data-aos="fade-up">
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


      <section className="section-8" data-aos="fade-up">
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

     <section className="section-9" data-aos="fade-up">
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

          <div className="home-card" data-aos="fade-up">
            <img src="../public/Mask Group.png" alt="" />
            <h1>Zamonaviy santexnik xizmatlari</h1>
            <p>
              Har qanday uy sharoitida xavfsiz va tezkor santexnik xizmatlar.
              Ishonchli va tajribali mutaxassislar bilan muammolaringizni hal
              qiling.
            </p>
          </div>

          <div className="home-card" data-aos="fade-up" > 
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
