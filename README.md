# RAVEX — Landing Site

Karanlık, minimalist müzik etiketi (label) tanıtım sitesi. Tek sayfalık (single-page) yapıdadır ve **hiçbir veritabanı kullanmaz** — tüm içerik `components/ravex/data.ts` dosyasından statik olarak gelir.

## Teknoloji

- Next.js 14 (App Router)
- React + TypeScript
- Tailwind CSS
- Three.js (hero bölümündeki 3B logo için)
- Framer Motion (animasyonlar)

## Gereksinimler

- Node.js 18 veya üzeri
- Yarn (önerilir) veya npm

## Kurulum

```bash
# 1) Bağımlılıkları yükleyin
yarn install
# veya
npm install

# 2) Geliştirme sunucusunu başlatın (http://localhost:3000)
yarn dev
# veya
npm run dev
```

## Canlı (production) çalıştırma

```bash
# Derleyin
yarn build      # veya: npm run build

# Başlatın (varsayılan port 3000)
yarn start      # veya: npm start
```

Farklı bir port için:

```bash
PORT=8080 npm start
```

## Notlar

- **Veritabanı yoktur.** `prisma/schema.prisma` dosyası tamamen boştur (model içermez) ve `next build` sürecini etkilemez. Kendi sunucunuzda buna hiç ihtiyacınız yoktur; isterseniz `prisma` klasörünü ve `package.json` içindeki `prisma` alanını tamamen silebilirsiniz.
- Site içeriğini (bültenler, sanatçılar, iletişim e-postası, sosyal medya bağlantıları) düzenlemek için: `components/ravex/data.ts`
- Kapak görselleri `public/covers/` klasöründedir (SVG).
- Bir reverse proxy (Nginx / Caddy) arkasında çalıştırmanız ve HTTPS için bir sertifika (Let's Encrypt) kullanmanız önerilir.

### Nginx örneği (reverse proxy)

```nginx
server {
    listen 80;
    server_name ornek-alan-adiniz.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Sürekli çalışması için (pm2 örneği)

```bash
npm install -g pm2
pm2 start "npm start" --name ravex
pm2 save
pm2 startup
```
