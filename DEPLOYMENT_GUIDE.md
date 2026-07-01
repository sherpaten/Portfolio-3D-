# 🚀 Deployment Guide

Complete guide to deploy your portfolio to various hosting platforms.

---

## 🏆 Recommended: Vercel (Next.js Creator)

Vercel is the company behind Next.js and offers the best integration.

### ✨ Advantages
- ✓ Automatic builds and deployments
- ✓ Zero-config setup
- ✓ Free tier available
- ✓ Global CDN
- ✓ Analytics included
- ✓ Environment variables management
- ✓ Preview deployments

### Step-by-Step

#### 1. Push Code to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/portfolio.git
git branch -M main
git push -u origin main
```

#### 2. Connect Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign up" or "Sign in"
3. Connect your GitHub account
4. Click "New Project"
5. Select your repository
6. Click "Import"

#### 3. Configure Environment

1. In project settings, go to "Environment Variables"
2. Add your environment variables from `.env.example`
3. Click "Deploy"

#### 4. Add Custom Domain

1. Go to project Settings → Domains
2. Add your domain
3. Follow DNS configuration instructions
4. Wait for SSL certificate (usually instant)

**✓ Done!** Your site is live at `https://yourdomain.com`

### Cost
- **Free tier**: Perfect for portfolios
- Includes: 100 GB bandwidth, unlimited deployments
- **Pro tier**: $20/month (if needed later)

---

## 🔵 Netlify

Popular alternative with great features.

### ✨ Advantages
- ✓ Simple setup
- ✓ Free tier generous
- ✓ Form handling built-in
- ✓ Analytics available
- ✓ Edge functions support

### Step-by-Step

#### 1. Prepare Build

```bash
npm run build
```

#### 2. Deploy to Netlify

**Option A: Using CLI**
```bash
npm install -g netlify-cli
netlify deploy
```

**Option B: Using Web Interface**

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "Add new site"
4. Select "Connect to Git"
5. Choose your repository
6. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
7. Click "Deploy"

#### 3. Configure

1. Go to Site settings → Domain management
2. Add your custom domain
3. Configure DNS records as shown

**✓ Done!** Your site is deployed.

---

## 🟨 Firebase Hosting

Google's hosting platform.

### ✨ Advantages
- ✓ Free tier available
- ✓ Global CDN
- ✓ Easy setup
- ✓ Database integration available
- ✓ Generous free tier

### Step-by-Step

#### 1. Install Firebase CLI

```bash
npm install -g firebase-tools
firebase login
```

#### 2. Build Project

```bash
npm run build
```

#### 3. Initialize Firebase

```bash
firebase init hosting
```

When prompted:
- Project: Select your Firebase project
- Public directory: `.next`
- Configure as single-page app: `N`

#### 4. Deploy

```bash
firebase deploy
```

Your site will be live at `https://your-project.web.app`

---

## 🟣 GitHub Pages

Free hosting directly from GitHub (static sites).

**Note**: GitHub Pages requires static export. Update `next.config.js`:

```js
const nextConfig = {
  output: 'export',
}
```

### Setup

1. Enable GitHub Pages in repository settings
2. Choose branch to deploy (main)
3. Site will be available at `https://username.github.io/portfolio`

---

## ☁️ AWS (EC2 + S3)

For those wanting more control.

### Step-by-Step

#### 1. Create EC2 Instance

1. Go to AWS Console → EC2
2. Click "Launch instances"
3. Choose Ubuntu 22.04 LTS
4. Instance type: t3.micro (free tier)
5. Configure security group:
   - Allow SSH (port 22)
   - Allow HTTP (port 80)
   - Allow HTTPS (port 443)
6. Review and launch

#### 2. SSH into Instance

```bash
ssh -i your-key.pem ubuntu@your-instance-ip
```

#### 3. Install Node.js

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### 4. Clone Repository

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
npm install
npm run build
```

#### 5. Set Up PM2 (Process Manager)

```bash
npm install -g pm2
pm2 start npm --name "portfolio" -- start
pm2 startup
pm2 save
```

#### 6. Install Nginx (Reverse Proxy)

```bash
sudo apt-get install nginx
```

Create `/etc/nginx/sites-available/default`:

```nginx
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    server_name _;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
sudo systemctl restart nginx
```

#### 7. Get SSL Certificate (Let's Encrypt)

```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

**✓ Done!** Your site is running on AWS.

---

## 🐳 Docker Deployment

Deploy using Docker containers.

### Dockerfile

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY .next ./
COPY public ./public

EXPOSE 3000

CMD ["npm", "start"]
```

### Build & Run

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

### Deploy to Docker Hub

```bash
docker login
docker tag portfolio yourusername/portfolio
docker push yourusername/portfolio
```

---

## 🐳 Docker Compose (Full Stack)

For more complex deployments:

```yaml
version: '3.8'

services:
  portfolio:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: always

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - portfolio
```

---

## 🟠 DigitalOcean App Platform

Simple managed hosting.

### Step-by-Step

1. Go to [digitalocean.com](https://digitalocean.com)
2. Click "Create" → "Apps"
3. Connect GitHub repository
4. Select your portfolio repo
5. Auto-detect Next.js:
   - Build: `npm run build`
   - Run: `npm start`
6. Add environment variables if needed
7. Deploy

Pricing: Starts at $12/month for small apps.

---

## 🟢 Render

Modern cloud platform similar to Vercel.

### Step-by-Step

1. Go to [render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect GitHub repository
4. Configure:
   - Build command: `npm install && npm run build`
   - Start command: `npm start`
   - Environment: Node
5. Deploy

---

## 🟡 Railway

Developer-friendly platform.

### Step-by-Step

1. Go to [railway.app](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub"
4. Choose your repository
5. Add environment variables
6. Deploy

---

## Comparison Table

| Platform | Price | Setup | Performance | Recommendation |
|----------|-------|-------|-------------|-----------------|
| **Vercel** | Free | ⭐⭐ | ⭐⭐⭐⭐⭐ | 🏆 Best |
| **Netlify** | Free | ⭐⭐ | ⭐⭐⭐⭐ | ✅ Great |
| **Firebase** | Free | ⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ Good |
| **AWS** | $0-20 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⚙️ Advanced |
| **DigitalOcean** | $12+ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ Good |
| **Render** | Free | ⭐⭐ | ⭐⭐⭐⭐ | ✅ Good |
| **Railway** | Free | ⭐⭐ | ⭐⭐⭐⭐ | ✅ Good |

---

## 📊 Pre-Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Test locally with `npm start`
- [ ] Update environment variables
- [ ] Test all links work
- [ ] Test form submission
- [ ] Test on mobile devices
- [ ] Check performance (Lighthouse)
- [ ] Verify SEO metadata
- [ ] Set up analytics (optional)
- [ ] Configure domain name
- [ ] Enable HTTPS
- [ ] Set up email forwarding
- [ ] Test on different browsers

---

## 🔒 Security Best Practices

### Environment Variables
- Never commit `.env` files
- Use `.env.example` as template
- Use platform's secret management

### HTTPS
- Always use HTTPS in production
- Redirect HTTP to HTTPS
- Use valid SSL certificate

### Headers
- Set security headers (CSP, X-Frame-Options, etc.)
- Use Next.js built-in security

### Form Handling
- Validate input on server
- Use CSRF protection
- Sanitize user input

### Updates
- Keep dependencies updated
- Monitor security advisories
- Use `npm audit` regularly

---

## 📈 Performance After Deployment

### Monitor Performance

1. **Vercel Analytics**: Built-in
2. **Google Analytics**: Add tracking code
3. **Lighthouse**: Chrome DevTools (F12)
4. **Web Vitals**: [web.dev/vitals](https://web.dev/vitals)

### Optimize

- Compress images
- Enable caching
- Minify CSS/JS
- Use CDN (automatic on most platforms)

---

## 🆘 Troubleshooting Deployment

### Build Failed
```bash
npm run build
```

Check for errors locally first.

### Site Not Loading
- Check if deployment completed
- Verify environment variables
- Check browser console (F12)
- Clear browser cache

### Slow Performance
- Check Lighthouse score
- Reduce image sizes
- Enable compression
- Check database queries

### Form Not Working
- Verify email service is configured
- Check API endpoints
- Review server logs

---

## 💡 Pro Tips

1. **Use preview deployments** for testing before production
2. **Monitor error rates** after deployment
3. **Set up automated backups** if using databases
4. **Use staging environment** for major changes
5. **Keep deployment simple** - use managed hosting if possible

---

## 📚 Additional Resources

- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Best Practices for Node.js Deployment](https://github.com/goldbergyoni/nodebestpractices)

---

**Recommendation**: For beginners, use **Vercel**. It's free, fast, and has the best Next.js integration.

Good luck with your deployment! 🚀
