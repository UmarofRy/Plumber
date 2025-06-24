import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./project.css";

export default function project() {
  // Aos kodini ishga tushirish uchun

  AOS.init({
    duration: 1000,
    once: false,
  });

  // Aos effect kodi tugashi

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div>
      <header className="header"  data-aos="fade-down">
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


      <section className="ProjectSection1">
        <img src="../public/hero image.png" alt="" />
      </section>

           <div className="projectBox">
            <h1>Loyihalarimiz</h1>
            <p>bu bo‘limda biz amalga oshirgan turli santexnika ishlaridan namunalar jamlangan. Xonadonlardan tortib, ofis va do‘konlargacha bo‘lgan obyektlarda professional xizmatlarimizni ko‘rishingiz mumkin. Har bir loyiha sifat, aniqlik va mijoz roziligi bilan yakunlangan</p>
        </div>

        <div className="cardBox"  data-aos="fade-down">

            <div className="col" /* ontouchstart="this.classList.toggle('hover');" */>
                <div className="container">
                    <div className="front" style={{backgroundImage: "url(https://do5nkkzntcenb.cloudfront.net/Project/Sites/Lixil/shared/PROMO-Card/AS/category/Bathroom/bathroom-faucets/aspirations/AspirationsEnvironmentFullT061901002AM00854400213TU0615070027061821002706121000270611900027061024002.jpg?h=500&la=en-CA&w=500)"}}>
                        <div className="inner">
                            <p>Uy santexnikasi</p>
                            <span>Hammom santexnika loyihasi</span>
                        </div>
                    </div>
                    <div className="back">
                        <div className="inner">
                            <p>Zamonaviy hammom: qulaylik, funksionallik va ishonchli santehnika bir joyda 🛁✨</p>
                        </div>
                    </div>
                </div>
            </div>

             <div className="col" /* ontouchstart="this.classList.toggle('hover');" */>
                <div className="container">
                    <div className="front" style={{backgroundImage: "url(https://maestrobath.com/cdn/shop/products/KIT-DES-BNI-1_1024x.jpg?v=1646445530)"}}>
                        <div className="inner">
                            <p>Uy santexnikasi</p>
                            <span>Oshxona santexnika loyihasi</span>
                        </div>
                    </div>
                    <div className="back">
                        <div className="inner">
                            <p>Foydalanuvchi qulayligi va estetikani birlashtirgan zamonaviy oshxona santehnika tizimi🍴💦</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col" /* ontouchstart="this.classList.toggle('hover');" */>
                <div className="container">
                    <div className="front" style={{backgroundImage: "url(https://www.superserviceplumbing.com/wp-content/uploads/2025/01/shower-plumbing-superserviceplumbing-santarosa-scaled.jpg)"}}>
                        <div className="inner">
                            <p>Uy santexnikasi</p>
                            <span>Dush va vanna o‘rnatish</span>
                        </div>
                    </div>
                    <div className="back">
                        <div className="inner">
                            <p>Zamonaviy va ishonchli uy santexnika yechimlari – qulaylik bizdan boshlanadi 🛠️💦</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col" /* ontouchstart="this.classList.toggle('hover');" */>
                <div className="container">
                    <div className="front" style={{backgroundImage: "url(https://barlowplumbing.net/images/male-plumber-hands-fixing-metal-sink-pipe.jpg)"}}>
                        <div className="inner">
                            <p>Uy santexnikasi</p>
                            <span>Trubalarni o‘rnatish yoki ta’mirlash</span>
                        </div>
                    </div>
                    <div className="back">
                        <div className="inner">
                            <p>Professional truba o‘rnatish va ta’mirlash – ustaxonada ishonchli, toza va tez yechimlar!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col" /* ontouchstart="this.classList.toggle('hover');" */>
                <div className="container">
                    <div className="front" style={{backgroundImage: "url(https://navien-production-3.s3-us-west-2.amazonaws.com/2021/10/26/21/07/37/1e8d030f-f2b4-466e-9666-7f58c7e1f304/PeakFlow-S-NPE2-installation.png)"}}>
                        <div className="inner">
                            <p>Uy santexnikasi</p>
                            <span>Nasos, filtr va suv isitgichlar o‘rnatish</span>
                        </div>
                    </div>
                    <div className="back">
                        <div className="inner">
                            <p>Nasos, filtr va suv isitgich o‘rnatish — tez, ishonchli va toza uy santexnika yechimi!</p>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="col" /* ontouchstart="this.classList.toggle('hover');" */>
                <div className="container">
                    <div className="front" style={{backgroundImage: "url(https://static.plumbingsuperstore.co.uk/help-and-advice/wp-content/uploads/2023/03/Wet-underfloor-heating-layers-1024x768.jpeg)"}}>
                        <div className="inner">
                            <p>Uy santexnikasi</p>
                            <span>Topli pol Issiq pol tizimi</span>
                        </div>
                    </div>
                    <div className="back">
                        <div className="inner">
                            <p>Pol isitish tizimi o‘rnatilishi – teng taqsimlangan issiqlik, energiya tejash va zamonaviy uyqulaylik!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col" /* ontouchstart="this.classList.toggle('hover');" */>
                <div className="container">
                    <div className="front" style={{backgroundImage: "url(https://nicholson-hvac.com/wp-content/uploads/2022/10/Water-Leak-Pipe-Sink-Detection-Repair-Professional.jpg)"}}>
                        <div className="inner">
                            <p>Uy santexnikasi</p>
                            <span>Kran va truba oqishini tuzatish</span>
                        </div>
                    </div>
                    <div className="back">
                        <div className="inner">
                            <p>Professional kran va truba oqishini tuzatish – tez, ishonchli va sifatli xizmat!</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col" /* ontouchstart="this.classList.toggle('hover');" */>
                <div className="container">
                    <div className="front" style={{backgroundImage: "url(https://static.wixstatic.com/media/196950_0a65ee3831de46ff866b4078e682bab8~mv2.png/v1/fill/w_672%2Ch_448%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/toilet-installation-and-upgrades.png)"}}>
                        <div className="inner">
                            <p>Uy santexnikasi</p>
                            <span>Unitaz o‘rnatish</span>
                        </div>
                    </div>
                    <div className="back">
                        <div className="inner">
                            <p>Unitaz o‘rnatish — tez, toza va sifatli xizmat!</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col" /* ontouchstart="this.classList.toggle('hover');" */>
                <div className="container">
                    <div className="front" style={{backgroundImage: "url(https://static.vecteezy.com/system/resources/previews/011/248/016/non_2x/plumbing-logo-design-business-template-illustration-of-faucet-plumbing-home-logo-design-template-free-vector.jpg)"}}>
                        <div className="inner">
                            <p>Uy santexnikasi</p>
                            <span>Sizning uyingizdagi santexnik muammolar</span>
                        </div>
                    </div>
                    <div className="back">
                        <div className="inner">
                            <p>Kran oqyaptimi? Truba singdimi? Qaysi muammo bo‘lishidan qat’i nazar — biz hal qilamiz</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      <div className="ProjectServise"   >
        <div className="service-image" data-aos="zoom-out-right">
          <img src="../public/bg.png" alt="Commercial Service" />
        </div>
        <div className="service-container">
          <div className="service-text">
            <h2>Kommersiya xizmati</h2>
            <p>
             Bu xizmat turli biznes obyektlari — do‘kon, ofis, restoran va boshqa tijorat joylarida santexnika tizimlarini o‘rnatish va ta’mirlashni o‘z ichiga oladi. Ishlar professional darajada, xavfsizlik va standartlarga muvofiq bajariladi.
            </p>
          </div>
        </div>
      </div>

      <section className="section-8"  data-aos="fade-down">
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

      <section className="section-9"  data-aos="fade-down">
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

          <footer className="footer">
        <div className="footer-container">
          <div className="footer-box about">
            <div className="logo">
              <img src="../public/logo.png" alt="" />
            </div>
            <p>
              Lore Issue is simply dummy text of the printing and typesetting
              industry. Lore Issue has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="socials">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-google"></i>
              <i className="fab fa-twitter"></i>
            </div>
          </div>

          <div className="footer-box services">
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

          <div className="footer-box contact">
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

        <div className="footer-bottom">
          <p>
            © 2020 Umarov Plumbing Services. All rights reserved. Crafted with
            care by Umarov Tech.
          </p>
        </div>
      </footer>
    </div>
  );
}
