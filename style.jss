@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background: #020817;
    color: white;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
    background-image:
        radial-gradient(circle at 75% 30%, #073b75 0%, transparent 35%),
        linear-gradient(135deg, #020817, #071a35, #020817);
}

/* NAVIGATION */

header {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5%;
    background: rgba(2, 10, 27, 0.9);
    border-bottom: 1px solid #087cff44;
    position: sticky;
    top: 0;
    z-index: 100;
    backdrop-filter: blur(15px);
}

.logo {
    font-family: Orbitron;
    font-weight: 800;
    font-size: 22px;
    color: #fff;
}

.logo span {
    color: #168cff;
}

nav {
    display: flex;
    gap: 28px;
}

nav a {
    color: #a9c9ed;
    text-decoration: none;
    font-size: 13px;
    transition: .3s;
}

nav a:hover {
    color: #29aaff;
}

.online {
    color: #24e9a5;
    font-size: 11px;
}

/* HERO */

.hero {
    min-height: 530px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px 7%;
    gap: 35px;
}

.hero-text {
    max-width: 560px;
}

.hero-text h1 {
    font-family: Orbitron;
    font-size: clamp(27px, 3.5vw, 43px);
    margin-bottom: 12px;
}

.blue {
    color: #168cff;
    text-shadow: 0 0 25px #087cff;
}

.hero-text h2 {
    font-size: 19px;
    margin: 20px 0;
    color: #b6d7ff;
}

.hero-text p {
    color: #9ab6d5;
    line-height: 1.8;
    font-size: 14px;
    margin-bottom: 30px;
}

.btn {
    display: inline-block;
    padding: 14px 24px;
    background: linear-gradient(90deg, #0875ed, #14b5ff);
    border-radius: 7px;
    text-decoration: none;
    color: white;
    font-weight: 700;
    box-shadow: 0 0 25px #087cff66;
    transition: .3s;
}

.btn:hover {
    transform: translateY(-4px);
    box-shadow: 0 0 35px #087cff;
}

/* 3D NETWORK BACKGROUND */

.network {
    width: 520px;
    height: 370px;
    position: relative;
    border: 1px solid #168cff55;
    border-radius: 20px;
    background:
        linear-gradient(rgba(20,130,255,.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(20,130,255,.08) 1px, transparent 1px),
        radial-gradient(circle, #073a75, #03132c 75%);
    background-size: 35px 35px, 35px 35px, auto;
    box-shadow: 0 0 50px #087cff33;
    transform-style: preserve-3d;
    perspective: 800px;
    animation: sceneFloat 5s ease-in-out infinite;
}

.network-glow {
    position: absolute;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background: #087cff;
    filter: blur(100px);
    top: 90px;
    left: 170px;
    opacity: .4;
}

@keyframes sceneFloat {
    0%,100% { transform: translateY(0) rotateX(2deg); }
    50% { transform: translateY(-10px) rotateX(-2deg); }
}

.device {
    position: absolute;
    width: 85px;
    height: 75px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(145deg, #104b8d, #06172f);
    border: 1px solid #25aaff;
    border-radius: 12px;
    color: #65d4ff;
    font-size: 27px;
    box-shadow: 0 0 25px #087cff66;
    z-index: 2;
    animation: deviceGlow 3s infinite alternate;
}

.device small {
    font-size: 9px;
    color: white;
    margin-top: 7px;
}

@keyframes deviceGlow {
    from { box-shadow: 0 0 10px #087cff55; }
    to { box-shadow: 0 0 30px #087cffcc; }
}

.server {
    top: 42%;
    left: 42%;
    width: 100px;
    height: 95px;
}

.router {
    top: 8%;
    left: 42%;
}

.client1 {
    top: 15%;
    left: 8%;
}

.client2 {
    top: 15%;
    right: 8%;
}

.client3 {
    bottom: 9%;
    left: 42%;
}

.connection {
    position: absolute;
    height: 2px;
    background: #19aaff;
    box-shadow: 0 0 12px #168cff;
    transform-origin: left;
    z-index: 1;
}

.line1 {
    width: 125px;
    top: 27%;
    left: 49%;
    transform: rotate(90deg);
}

.line2 {
    width: 150px;
    top: 30%;
    left: 20%;
    transform: rotate(30deg);
}

.line3 {
    width: 150px;
    top: 30%;
    right: 10%;
    transform: rotate(150deg);
}

.line4 {
    width: 125px;
    top: 55%;
    left: 49%;
    transform: rotate(90deg);
}

/* DASHBOARD */

.dashboard {
    padding: 50px 7%;
}

.dashboard > h2 {
    font-family: Orbitron;
    margin-bottom: 25px;
    color: #42b9ff;
    font-size: 22px;
}

.cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
}

.card, .panel {
    background: rgba(7, 27, 55, .85);
    border: 1px solid #168cff44;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 10px 30px #0005;
}

.card h3 {
    font-size: 11px;
    color: #91bce9;
    margin-bottom: 20px;
}

.card h1 {
    font-family: Orbitron;
    font-size: 23px;
    color: #32baff;
    overflow-wrap: anywhere;
}

.panel {
    margin-top: 25px;
}

.panel h3, .panel h2 {
    color: #49baff;
    margin-bottom: 20px;
}

canvas {
    width: 100%;
}

/* PACKET SECTION */

.packet-panel {
    margin: 30px 7%;
}

.packet-info {
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    border-bottom: 1px solid #168cff33;
    color: #9ab6d5;
    font-size: 13px;
}

.packet-info strong {
    color: #29c7ff;
}

/* FOOTER */

footer {
    text-align: center;
    padding: 40px 15px;
    background: #020a18;
    border-top: 1px solid #168cff44;
    color: #8daed2;
}

footer h3 {
    font-family: Orbitron;
    color: #36aaff;
    margin-bottom: 12px;
}

footer p {
    font-size: 12px;
    margin: 8px;
}

/* MOBILE */

@media(max-width: 900px) {
    .hero {
        flex-direction: column;
        align-items: flex-start;
    }

    .network {
        width: 100%;
    }

    .cards {
        grid-template-columns: repeat(2, 1fr);
    }

    nav {
        gap: 12px;
    }
}

@media(max-width: 550px) {
    header {
        height: auto;
        padding: 18px;
        flex-wrap: wrap;
        gap: 15px;
    }

    nav {
        width: 100%;
        justify-content: space-between;
    }

    nav a {
        font-size: 10px;
    }

    .online {
        display: none;
    }

    .cards {
        grid-template-columns: 1fr 1fr;
    }

    .network {
        height: 280px;
    }

    .device {
        transform: scale(.8);
    }
}
