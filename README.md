# BRUTAL BANK IMAGEM

Uma plataforma completa de marketplace de fotos esportivas, inspirada no Banlek.com, desenvolvida com React, TailwindCSS e tecnologias modernas.

## 🚀 Funcionalidades

### ✅ Implementadas
- **Interface Responsiva**: Design mobile-first com TailwindCSS
- **Sistema de Navegação**: Header responsivo com menu mobile
- **Página Inicial**: Hero section, categorias e fotos em destaque
- **Galeria de Fotos**: Sistema de filtros avançados e busca
- **Autenticação**: Páginas de login e registro
- **Componentes Reutilizáveis**: Cards de fotos, filtros, badges

### 🔄 Em Desenvolvimento
- **Sistema de Carrinho**: Adicionar/remover itens, checkout
- **Área do Cliente**: Dashboard pessoal, histórico de compras
- **Painel do Fotógrafo**: Upload de fotos, controle de vendas
- **Sistema de Pagamentos**: Integração com PIX, Stripe, PayPal, MercadoPago
- **Reconhecimento Facial**: IA para identificar pessoas nas fotos
- **Detector de Fake**: Verificação de autenticidade das imagens
- **Sistema de Chat**: Comunicação entre fotógrafos e compradores
- **Assinatura Premium**: Planos para fotógrafos (R$ 19,90/mês)

## 🛠️ Tecnologias

- **Frontend**: React 18, Vite
- **Styling**: TailwindCSS, Shadcn/UI
- **Roteamento**: React Router DOM
- **Ícones**: Heroicons, Lucide React
- **Backend**: Firebase/Supabase (planejado)
- **Pagamentos**: MercadoPago, Stripe, PayPal (planejado)
- **IA**: APIs de reconhecimento facial (planejado)

## 📁 Estrutura do Projeto

```
src/
├── assets/           # Imagens e recursos estáticos
├── components/       # Componentes reutilizáveis
│   ├── ui/          # Componentes de interface (shadcn/ui)
│   ├── Header.jsx   # Cabeçalho da aplicação
│   ├── Footer.jsx   # Rodapé da aplicação
│   └── ...
├── pages/           # Páginas da aplicação
│   ├── Home.jsx     # Página inicial
│   ├── Gallery.jsx  # Galeria de fotos
│   ├── Login.jsx    # Página de login
│   └── Register.jsx # Página de registro
├── hooks/           # Custom hooks
├── lib/             # Utilitários e configurações
└── App.jsx          # Componente principal
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- pnpm (recomendado) ou npm

### Instalação
```bash
# Clone o repositório
git clone <repository-url>
cd banlek-clone

# Instale as dependências
pnpm install

# Execute o servidor de desenvolvimento
pnpm run dev

# Acesse http://localhost:5173
```

### Build para Produção
```bash
# Gerar build otimizado
pnpm run build

# Preview do build
pnpm run preview
```

## 🌐 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Netlify
1. Conecte seu repositório ao Netlify
2. Configure build command: `pnpm run build`
3. Configure publish directory: `dist`

### Hostinger
1. Faça o build: `pnpm run build`
2. Faça upload da pasta `dist` para o servidor
3. Configure redirecionamentos para SPA

## 🔧 Configuração

### Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto:

```env
# Firebase/Supabase
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id

# Pagamentos
VITE_MERCADOPAGO_PUBLIC_KEY=your_public_key
VITE_STRIPE_PUBLIC_KEY=your_stripe_key

# APIs de IA
VITE_FACE_RECOGNITION_API_KEY=your_api_key
VITE_FAKE_DETECTION_API_KEY=your_api_key
```

### Configuração do Firebase
1. Crie um projeto no Firebase Console
2. Ative Authentication, Firestore e Storage
3. Configure as regras de segurança
4. Adicione as credenciais no `.env`

### Configuração do MercadoPago
1. Crie uma conta no MercadoPago Developers
2. Configure o plano de assinatura (ID: 297267941)
3. Adicione as chaves no `.env`

## 📱 Funcionalidades Detalhadas

### Sistema de Usuários
- **Compradores**: Cadastro gratuito, busca e compra de fotos
- **Fotógrafos**: Cadastro com verificação, upload e venda de fotos
- **Premium**: Serviços de edição e funcionalidades avançadas

### Marketplace
- **Busca Inteligente**: Filtros por categoria, estado, fotógrafo
- **Reconhecimento Facial**: Upload de selfie para encontrar fotos
- **Carrinho de Compras**: Múltiplas fotos, desconto por quantidade
- **Pagamentos**: PIX, cartão, boleto via gateways integrados

### Painel do Fotógrafo
- **Upload em Lote**: Múltiplas fotos com metadados
- **Gestão de Vendas**: Relatórios, comissões, saques
- **Assinatura**: Plano mensal para acesso completo
- **Eventos**: Cadastro para cobertura de eventos

### Tecnologias de IA
- **Reconhecimento Facial**: Identificar pessoas nas fotos
- **Detecção de Fake**: Verificar autenticidade das imagens
- **Categorização Automática**: Classificar fotos por esporte
- **Qualidade**: Análise automática da qualidade das imagens

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

Para suporte e dúvidas:
- Email: suporte@brutalbank.com.br
- WhatsApp: (11) 99999-9999
- Discord: [Link do servidor]

## 🗺️ Roadmap

### Fase 1 - MVP (Atual)
- [x] Interface básica e navegação
- [x] Sistema de autenticação
- [x] Galeria com filtros
- [ ] Carrinho de compras
- [ ] Integração com pagamentos

### Fase 2 - Funcionalidades Avançadas
- [ ] Reconhecimento facial
- [ ] Sistema de chat
- [ ] Painel do fotógrafo
- [ ] Upload de fotos
- [ ] Detector de fake

### Fase 3 - Otimizações
- [ ] PWA (Progressive Web App)
- [ ] Notificações push
- [ ] Cache offline
- [ ] Otimizações de performance

### Fase 4 - Expansão
- [ ] App mobile (React Native)
- [ ] API pública
- [ ] Integrações com redes sociais
- [ ] Marketplace de equipamentos

---

**BRUTAL BANK IMAGEM** - A maior plataforma de fotos esportivas do Brasil 🇧🇷

