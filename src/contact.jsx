import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {


  



  // Aos kodi

  AOS.init({
    duration: 1000,
    once: false,
  });

  // Aos effect kodi tugashi

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [manzil, setManzil] = useState("");
  const [message, setMessage] = useState("");
  const [location, setLocation] = useState("Joylashuv olinmadi");

  const [successMsg, setSuccessMsg] = useState(false); 

  const telegram_bot_id = "8137627687:AAFfbIwTtXVQyAb6lrPMDE8hHOTtWzui7H4";
  const chat_id = -4661040667;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const loc = `https://maps.google.com/?q=${position.coords.latitude},${position.coords.longitude}`;
          sendMessage(loc);
        },
        (error) => {
          console.error("Geolokatsiya xatosi:", error);
          sendMessage("Joylashuv olinmadi");
        }
      );
    } else {
      sendMessage("Brauzer geolokatsiyani qo‘llamaydi");
    }
  };

  const sendMessage = (loc) => {
    const text = `🧰Santexnik saytidan Client!\n\n👤 Ism: ${name}\n📞 Telefon: ${phone}\n🔗 TG.Username: @${username}\n 🌎 Turar Joy: ${manzil}\n📝 Izoh: ${message}\n📍 Joylashuv: ${loc}`;

    fetch(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chat_id,
        text: text,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Yuborildi:", data);

        setName("");
        setPhone("");
        setMessage("");
        setUsername("");
        setManzil("");
        setLocation("Joylashuv olinmadi");


        setSuccessMsg(true);

        setTimeout(() => {
          setSuccessMsg(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Xatolik:", error);
      });
  };

  return (
    <div>
      <header data-aos="fade-down">
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
            <button
              className="header-btn"
              onClick={() => {
                const form = document.getElementById("form-section");
                form.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Ariza Yuborish <span className="phone-emoji">☎️</span>
            </button>
          </Link>
        </nav>
      </header>
      <hr />
      <section
        className="contact-section"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >

        <div className="contact-box">
          <div className="contact-left">
            <h1>BIZ BILAN BOG‘LANING</h1>
            <p>
              Biz bilan bog‘lanish uchun quyidagi shaklni to‘ldiring yoki
              ko‘rsatilgan raqam va email orqali murojaat qiling. Sizning fikr
              va savollaringiz biz uchun muhim!
            </p>
          </div>
                  
        </div>
        <div id="form-section"></div>
      </section>

      <div

        className="form"
        data-aos-anchor-placement="bottom-bottom"
      >
        <h1>Ariza Yuborish</h1>

        {successMsg && <div className="success-message">Ariza Yuborildi!</div>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Ismingiz"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="phone"
            name="phone"
            placeholder="Telefon raqamingiz"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            name="username"
            placeholder="Telegramdagi username (masalan: @Umarov)"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value.replace("@", ""))}
          />
          <input
            type="text"
            name="manzil"
            placeholder="Turar joy manzilingiz"
            required
            value={manzil}
            onChange={(e) => setManzil(e.target.value)}
          />
          <textarea
            style={{ height: "20px", resize: "none", overflow: "hidden" }}
            name="message"
            cols="45"
            rows="10"
            placeholder="Muammo yoki izoh"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <br />
          <br />
          <input type="submit" value="Ariza Yuborish" id="btn" />
        </form>
      </div>

      <section className="contact-section-2" data-aos="fade-up">
        <div className="ContactLeft2">
          <h2>
            Biz bilan bogʻlaning <br />
            <p>
              Biz bilan bog‘lanish uchun quyidagi shaklni to‘ldiring yoki
              ko‘rsatilgan raqam va email orqali murojaat qiling. Sizning fikr
              va savollaringiz biz uchun muhim!{" "}
            </p>
            <br />
            <br />
            Ish vaqti <br />
            <p>24/7 | 08:00 DAN 20:00</p>
            <br />
            <br />
            Telefon raqami <br />
            <p>+998 88 139 55 11</p>
            <br />
            <br />
          </h2>
        </div>

        <div className="ContactRight2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1498.4865156052913!2d69.0264266!3d41.3094503!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bfe2c9dfdb7%3A0x4e70e6b88f98e874!2sMARS%20IT%20Tinchlik!5e0!3m2!1suz!2s!4v1748766587108!5m2!1suz!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
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
