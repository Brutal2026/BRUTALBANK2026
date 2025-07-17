# 🚀 Guia de Deploy - BRUTAL BANK IMAGEM

Este guia contém instruções detalhadas para fazer o deploy da aplicação em diferentes plataformas.

## 📋 Pré-requisitos

- Node.js 18+ instalado
- Conta nas plataformas de deploy escolhidas
- Variáveis de ambiente configuradas
- Build da aplicação testado localmente

## 🌐 Opções de Deploy

### 1. Vercel (Recomendado)

A Vercel é a opção mais simples e otimizada para aplicações React.

#### Passos:
1. **Conectar Repositório**
   ```bash
   # Faça push do código para GitHub/GitLab/Bitbucket
   git add .
   git commit -m "Deploy inicial"
   git push origin main
   ```

2. **Configurar na Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Conecte sua conta GitHub
   - Importe o repositório
   - Configure as variáveis de ambiente

3. **Variáveis de Ambiente**
   ```
   VITE_FIREBASE_API_KEY=your_key
   VITE_FIREBASE_AUTH_DOMAIN=your_domain
   VITE_FIREBASE_PROJECT_ID=your_project
   VITE_MERCADOPAGO_PUBLIC_KEY=your_key
   ```

4. **Deploy Automático**
   - A Vercel fará deploy automaticamente
   - URL personalizada: `brutalbank.vercel.app`
   - Domínio customizado: Configure DNS para `brutalbank.com.br`

#### Configurações Avançadas:
```json
// vercel.json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

### 2. Netlify

Excelente opção com recursos de formulários e edge functions.

#### Passos:
1. **Build Local**
   ```bash
   pnpm run build
   ```

2. **Deploy via Drag & Drop**
   - Acesse [netlify.com](https://netlify.com)
   - Arraste a pasta `dist` para o deploy
   - Configure domínio personalizado

3. **Deploy Contínuo**
   ```bash
   # Conectar repositório
   # Build command: pnpm run build
   # Publish directory: dist
   ```

4. **Configurar Redirects**
   ```
   # public/_redirects
   /*    /index.html   200
   ```

### 3. Hostinger

Para hospedagem tradicional com cPanel.

#### Passos:
1. **Build da Aplicação**
   ```bash
   pnpm run build
   ```

2. **Upload via FTP**
   ```bash
   # Compactar pasta dist
   zip -r brutalbank.zip dist/*
   
   # Upload via FileZilla ou cPanel File Manager
   # Extrair no diretório public_html
   ```

3. **Configurar .htaccess**
   ```apache
   # public_html/.htaccess
   RewriteEngine On
   RewriteBase /
   
   # Handle Angular and React Router
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]
   
   # Security Headers
   Header always set X-Frame-Options DENY
   Header always set X-Content-Type-Options nosniff
   ```

### 4. Firebase Hosting

Integração perfeita se usando Firebase como backend.

#### Passos:
1. **Instalar Firebase CLI**
   ```bash
   npm install -g firebase-tools
   firebase login
   ```

2. **Inicializar Projeto**
   ```bash
   firebase init hosting
   # Public directory: dist
   # Single-page app: Yes
   # Overwrite index.html: No
   ```

3. **Deploy**
   ```bash
   pnpm run build
   firebase deploy
   ```

4. **Configurar Domínio**
   ```bash
   firebase hosting:channel:deploy live --only hosting
   ```

## 🔧 Configurações de Produção

### Otimizações de Build

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@heroicons/react', 'lucide-react']
        }
      }
    }
  }
})
```

### Variáveis de Ambiente de Produção

```bash
# .env.production
VITE_APP_ENV=production
VITE_API_BASE_URL=https://api.brutalbank.com.br
VITE_FIREBASE_PROJECT_ID=brutalbank-prod
VITE_MERCADOPAGO_PUBLIC_KEY=APP_USR_prod_key
```

### Headers de Segurança

```javascript
// Para Vercel - vercel.json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=()"
        }
      ]
    }
  ]
}
```

## 🔒 SSL e Domínio

### Configurar HTTPS
- **Vercel/Netlify**: SSL automático
- **Hostinger**: Ativar SSL no cPanel
- **Cloudflare**: Proxy + SSL/TLS

### Domínio Personalizado
1. **Comprar Domínio**: `brutalbank.com.br`
2. **Configurar DNS**:
   ```
   Type: CNAME
   Name: www
   Value: brutalbank.vercel.app
   
   Type: A
   Name: @
   Value: 76.76.19.61 (Vercel IP)
   ```

## 📊 Monitoramento

### Analytics
```javascript
// Google Analytics 4
gtag('config', 'G-XXXXXXXXXX', {
  page_title: 'BRUTAL BANK IMAGEM',
  page_location: window.location.href
})
```

### Error Tracking
```javascript
// Sentry
import * as Sentry from "@sentry/react"

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: import.meta.env.VITE_APP_ENV
})
```

## 🚀 CI/CD Pipeline

### GitHub Actions
```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: pnpm install
      
    - name: Build
      run: pnpm run build
      
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🔍 Troubleshooting

### Problemas Comuns

1. **Rotas não funcionam**
   - Configurar redirects para SPA
   - Verificar .htaccess ou _redirects

2. **Variáveis de ambiente não carregam**
   - Verificar prefixo VITE_
   - Rebuild após mudanças

3. **Build falha**
   - Verificar versão do Node.js
   - Limpar cache: `pnpm store prune`

4. **Imagens não carregam**
   - Verificar caminhos relativos
   - Configurar base URL no Vite

### Logs e Debug
```bash
# Vercel
vercel logs

# Netlify
netlify logs

# Local debug
pnpm run build --debug
pnpm run preview
```

## 📞 Suporte

Para problemas de deploy:
- **Vercel**: [vercel.com/support](https://vercel.com/support)
- **Netlify**: [netlify.com/support](https://netlify.com/support)
- **Hostinger**: Suporte via chat/ticket
- **Firebase**: [firebase.google.com/support](https://firebase.google.com/support)

---

**Sucesso no seu deploy! 🚀**

