# 🐝 Bee U API - Backend

Django 5 + DRF REST API para plataforma de educação em inglês.

## 🚀 Quick Start

### Pré-requisitos
- Python 3.12+
- PostgreSQL 13+
- Redis (opcional, para cache/Celery)

### Instalação

1. **Clone e navegue para backend:**
```bash
cd backend
```

2. **Criar ambiente virtual:**
```bash
python -m venv venv
source venv/Scripts/activate  # Windows
# ou
source venv/bin/activate  # Linux/Mac
```

3. **Instalar dependências:**
```bash
pip install -r requirements.txt
```

4. **Copiar .env:**
```bash
cp .env.example .env
```

5. **Executar migrações:**
```bash
python manage.py migrate
```

6. **Criar superuser:**
```bash
python manage.py createsuperuser
```

7. **Rodar servidor:**
```bash
python manage.py runserver
```

A API estará disponível em `http://localhost:8000`

## 📚 Documentação

- **Swagger UI**: http://localhost:8000/api/v1/docs/swagger/
- **ReDoc**: http://localhost:8000/api/v1/docs/redoc/
- **Admin Panel**: http://localhost:8000/admin/

## 📁 Estrutura de Diretórios

```
backend/
├── beeu_api/
│   ├── core/                 # Configurações Django
│   ├── leads/                # App de leads/registrations
│   ├── testimonials/         # App de depoimentos
│   ├── professors/           # App de professores
│   ├── faqs/                 # App de FAQs
│   ├── clients/              # App de clientes/empresas
│   ├── statistics/           # App de estatísticas
│   └── shared/               # Utilitários compartilhados
├── manage.py
├── requirements.txt
├── .env.example
└── logs/
```

## 🔧 Variáveis de Ambiente

Ver `.env.example` para todas as variáveis necessárias.

## 🗄️ Banco de Dados

### Models Principais

- **Lead** - Leads/Registrations de usuários
- **Testimonial** - Depoimentos de clientes
- **Professor** - Professores/Instrutores
- **FAQ** - Perguntas frequentes
- **ClientCompany** - Empresas clientes
- **Statistics** - Métricas e KPIs

## 📡 API Endpoints

### Authentication
- `POST /api/v1/auth/token/` - Obter token JWT
- `POST /api/v1/auth/token/refresh/` - Refresh token

### Leads
- `GET /api/v1/leads/` - Listar leads
- `POST /api/v1/leads/` - Criar novo lead
- `GET /api/v1/leads/{id}/` - Detalhe do lead
- `PATCH /api/v1/leads/{id}/` - Atualizar lead

### Testimonials
- `GET /api/v1/testimonials/` - Listar depoimentos
- `POST /api/v1/testimonials/` - Criar depoimento
- `PATCH /api/v1/testimonials/{id}/` - Atualizar depoimento

### Professors
- `GET /api/v1/professors/` - Listar professores
- `POST /api/v1/professors/` - Criar professor
- `GET /api/v1/professors/{id}/` - Detalhe professor

### FAQs
- `GET /api/v1/faqs/` - Listar FAQs
- `GET /api/v1/faqs/?category=home` - Filtrar por categoria

### Clients
- `GET /api/v1/clients/` - Listar empresas clientes

### Statistics
- `GET /api/v1/statistics/` - Listar estatísticas

## 🧪 Testes

```bash
# Executar testes
pytest

# Com coverage
pytest --cov=beeu_api

# Verbose
pytest -v
```

## 📦 Docker (Opcional)

```bash
docker-compose up -d
```

## 🔐 Segurança

- ✅ JWT Authentication
- ✅ CORS configurado
- ✅ CSRF Protection
- ✅ SQL Injection Prevention (ORM Django)
- ✅ XSS Protection
- ✅ Input Validation

## 📝 Deployment

### Gunicorn
```bash
gunicorn beeu_api.core.wsgi --bind 0.0.0.0:8000
```

### Nginx
Ver `nginx.conf` para configuração reverso proxy.

## 🤝 Contribuindo

1. Criar branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Abrir Pull Request

## 📄 Licença

MIT License
