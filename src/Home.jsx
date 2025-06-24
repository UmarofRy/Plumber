import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {





  // Aos kodini ishga tushirish uchun

  AOS.init({
    duration: 1000,
    once: false,
  });

  // Aos effect kodi tugashi

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
      <hr />

      <section className="section-1">
        <div className="left" data-aos="zoom-in-up">
          <p>
            <span>Santexnika</span> <br /> xizmatlari uchun murojaat qiling
            <br />
            <br />
            <span>+998 88-139-55-11 </span>
          </p>

          <button>Barcha xizmatlarni ko‘ring</button>
        </div>

        <div
          className="right"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          
          <img className="usta-1" src="../public/image 10.png" alt="" />
          <img className="usta-2" src="../public/image 9.png" alt="" />
        </div>
      </section>

      <section className="section-2">
        <div className="card" data-aos="zoom-in">
          <div className="icon">
            <img src="../public/icon.svg" alt="" />
          </div>
          <span>Uy uchun xizmatlar </span>
          <p>
            Uy sharoitida suv tizimi, kanalizatsiya va boshqa santexnika
            xizmatlarini mukammal bajarib beramiz.
          </p>
        </div>

        <div className="card" data-aos="zoom-in">
          <div className="icon">
            <img src="../public/icon (1).svg" alt="" />
          </div>
          <span>Tijorat xizmatlari </span>
          <p>
            Ofis va biznes binolar uchun maxsus santexnika yechimlari, muntazam
            xizmat va texnik ko‘rsatish.
          </p>
        </div>

        <div className="card" data-aos="zoom-in">
          <div className="icon">
            <img src="../public/icon (2).svg" alt="" />
          </div>
          <span>Texnik xizmat ko‘rsatish </span>
          <p>
            Santexnika tizimlarini muntazam tekshiruv va ta’mirlash orqali uzoq
            muddat ishlashini ta’minlaymiz.
          </p>
        </div>
      </section>

      <section className="section-3" data-aos="fade-up">
        <div className="box">
          <div className="box-2">
            <div className="left-2">
              <h1>Umarov Company ga xush kelibsiz!</h1>
              <p>
                Sifatli santexnika xizmatlari va tezkor yechimlar uchun eng
                ishonchli manzil. Sizning qulayligingiz — bizning
                ustuvorligimiz!
              </p>

              <button>Batafsil ma’lumot!</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-4">
        <div className="left-3" data-aos="flip-down">
          <img src="../public/image.png" alt="" />
        </div>

        <div className="right-3" data-aos="zoom-out">
          <h1>Kompaniyamiz tarixi</h1>
          <p>
            Umarov Company 2020 yildan santexnika sohasida ishlaydi. Maqsad –
            sifatli va ishonchli xizmat ko‘rsatish. Har bir loyiha biz uchun
            muhim.
          </p>
          <p className="h2">Mutaxassislarimizga ishoning</p>
          <p>
            Tajribali va malakali jamoamiz har qanday santexnika muammosini o‘z
            vaqtida, sifatli va ishonchli tarzda hal qilib, mijozlarning
            ishonchini qozonib kelmoqda
          </p>
        </div>
      </section>

      <section className="section-5" data-aos="fade-up">
        <div className="box-3">
          <h1>SANTEXNIK AFZALIKLARIMIZ</h1>
          <p>
            Bizning jamoa santexnika sohasida yuqori sifat va tezkor xizmatni
            taqdim etadi. Har bir ishda mijozning talabiga qat’iy rioya
            qilinadi.
          </p>
        </div>

        <div className="box-4">
          <div className="item">
            <p>⭕ Uy-joy xizmati</p>
            <p>⭕ Biznes xizmati</p>
          </div>
          <div className="item">
            <p>⭕ Tajribali Usta</p>
            <p>⭕ Tezkor Yordam</p>
          </div>
          <div className="item">
            <p>⭕ Sifatli Xizmat</p>
            <p>⭕ Arzon Narxlar</p>
          </div>
          <div className="item">
            <p>⭕ 24/7 Murojaat</p>
            <p>⭕ Kafolatlangan Ish</p>
          </div>
        </div>
      </section>

      <section className="section-6" data-aos="zoom-in-up">
        <img src="../public/image 4 (1).png" alt="" />
      </section>

      <section className="section-7" data-aos="fade-up"
     data-aos-anchor-placement="center-center">
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
  );
}
