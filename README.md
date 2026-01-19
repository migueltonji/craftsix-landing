# CraftSix — Digital Solutions

CraftSix é um projeto de landing page institucional focado em apresentar soluções digitais modernas, com ênfase em **UX/UI**, performance e identidade visual forte.

O objetivo do projeto é comunicar valor de forma clara, minimalista e sofisticada, unindo design contemporâneo e boas práticas de desenvolvimento front-end.

---

## ✨ Visão do Projeto

- Estética tecnológica e futurista
- Interface limpa, com foco na experiência do usuário
- Microinterações e animações sutis
- Estrutura escalável para futuras seções e produtos

---

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (Flexbox, Grid, animações e efeitos visuais)
- JavaScript (interações e scroll effects)
- Google Fonts (Anton & Poppins)

---


## 🌐 Deploy

- [Site CraftSix](https://craftsix-landing.vercel.app/)


---

## 🔐 Segurança

Este projeto adota boas práticas de segurança no frontend utilizando headers HTTP configurados via Vercel.

### Medidas aplicadas:
- Proteção contra MIME sniffing (`X-Content-Type-Options`)
- Prevenção de clickjacking (`X-Frame-Options`)
- Controle de informações de referrer (`Referrer-Policy`)
- Bloqueio de APIs sensíveis do navegador (`Permissions-Policy`)
- Forçamento de HTTPS com HSTS

Essas medidas aumentam a segurança do site mesmo sendo uma aplicação estática, seguindo padrões utilizados em ambientes de produção.

---

## 📐 Estrutura do Projeto

```text
/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── vercel.json
