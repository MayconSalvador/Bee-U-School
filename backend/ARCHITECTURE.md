# 🏗️ Arquitetura Backend - Bee U API

## 📊 Visão Geral da Arquitetura

```
┌─────────────────────────────────────────────────────────────┐
│                   FRONT-END (React/TS)                       │
│          http://localhost:5173                               │
└──────────────────────┬──────────────────────────────────────┘
                       │ HTTP/HTTPS
                       │ JSON Requests
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                 NGINX (Reverse Proxy)                        │
│            Optional - Produção apenas                        │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│              DJANGO 5 + DRF REST API                         │
│            http://localhost:8000                             │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │                  URL Router                          │  │
│  │  /api/v1/leads, /api/v1/testimonials, etc...       │  │
│  └─────────────────────┬────────────────────────────────┘  │
│                        │                                    │
│  ┌─────────────────────┴────────────────────────────────┐  │
│  │                  ViewSets (REST)                    │  │
│  │ LeadViewSet, TestimonialViewSet, ProfessorViewSet  │  │
│  └─────────────────────┬────────────────────────────────┘  │
│                        │                                    │
│  ┌─────────────────────┴────────────────────────────────┐  │
│  │               Serializers (Validation)              │  │
│  │ LeadSerializer, TestimonialSerializer, etc...       │  │
│  └─────────────────────┬────────────────────────────────┘  │
│                        │                                    │
│  ┌─────────────────────┴────────────────────────────────┐  │
│  │                  ORM Models                         │  │
│  │ Lead, Testimonial, Professor, FAQ, etc...          │  │
│  └─────────────────────┬────────────────────────────────┘  │
│                        │                                    │
└─────────────────────────┼─────────────────────────────────┘
                          │
           ┌──────────────┼──────────────┐
           │              │              │
           ▼              ▼              ▼
       ┌────────┐  ┌──────────┐  ┌────────────┐
       │PostgreSQL│ │  Redis   │  │   S3/etc   │
       │Database │  │  Cache   │  │Media Files │
       └────────┘  └──────────┘  └────────────┘
```

---

## 📦 Estrutura de Arquivos

```
backend/
│
├── beeu_api/                          # Django project root
│   ├── core/                          # Configurações centrais
│   │   ├── __init__.py
│   │   ├── settings.py               # Django settings (DB, apps, auth)
│   │   ├── urls.py                   # Rotas principais
│   │   ├── wsgi.py                   # Production server
│   │   ├── asgi.py                   # Async support
│   │   ├── celery.py                 # Async tasks
│   │   └── apps.py
│   │
│   ├── leads/                         # App: Leads/Registrations
│   │   ├── models.py                 # Lead model
│   │   ├── serializers.py            # LeadSerializer, etc
│   │   ├── views.py                  # LeadViewSet
│   │   ├── urls.py                   # /api/v1/leads/
│   │   ├── admin.py                  # Admin panel
│   │   ├── tests.py                  # Unit tests
│   │   └── apps.py
│   │
│   ├── testimonials/                 # App: Depoimentos
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   ├── admin.py
│   │   └── apps.py
│   │
│   ├── professors/                   # App: Professores
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   ├── admin.py
│   │   └── apps.py
│   │
│   ├── faqs/                          # App: FAQs
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   ├── admin.py
│   │   └── apps.py
│   │
│   ├── clients/                       # App: Empresas Clientes
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   ├── admin.py
│   │   └── apps.py
│   │
│   ├── statistics/                    # App: Estatísticas
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   ├── admin.py
│   │   └── apps.py
│   │
│   └── shared/                        # App: Utilitários compartilhados
│       ├── utils.py                  # ApiResponse, Validators
│       ├── exceptions.py             # Custom exceptions
│       ├── apps.py
│       └── __init__.py
│
├── manage.py                          # Django CLI
├── requirements.txt                   # Dependências Python
├── .env.example                       # Template variáveis env
├── docker-compose.yml                 # Docker compose config
├── Dockerfile                         # Docker image
├── .gitignore                         # Git exclusões
├── pytest.ini                         # Pytest config
├── README.md                          # Documentação
├── SETUP_GUIDE.md                     # Guia de setup
├── ARCHITECTURE.md                    # Este arquivo
└── logs/                              # Log files
```

---

## 🔄 Fluxo de Requisição

```
1. REQUISIÇÃO DO FRONT-END
   POST /api/v1/leads/
   {
     "first_name": "João",
     "email": "joao@example.com",
     "phone": "(11) 98765-4321",
     "audience": "self",
     "age_range": "18_24",
     ...
   }

2. DJANGO URL ROUTING
   urls.py → /api/v1/leads/ → LeadViewSet.create()

3. VIEWSET
   LeadViewSet.create() {
     - GetSerializer(LeadCreateSerializer)
     - Valida dados
     - Chama perform_create()
   }

4. SERIALIZER
   LeadCreateSerializer {
     - Valida email (formato + duplicata)
     - Valida phone (regex)
     - Valida age_range
     - Chama model.create()
   }

5. MODEL
   Lead.create() {
     - Clean (validações adicionais)
     - Save no banco
   }

6. RESPOSTA
   201 Created
   {
     "status": "success",
     "message": "Lead criado...",
     "data": { ... }
   }

7. FRONT-END
   Renderiza confirmação / atualiza estado
```

---

## 🔐 Camadas de Segurança

```
┌─────────────────────────────────────────┐
│  NIVEL 1: CORS & HTTPS                  │
│  - Apenas front-end autorizado          │
│  - SSL/TLS em produção                  │
└─────────────────────────────────────────┘
                   │
┌─────────────────────────────────────────┐
│  NIVEL 2: AUTHENTICATION                │
│  - JWT Token (endpoints sensíveis)      │
│  - Session Auth (optional)              │
└─────────────────────────────────────────┘
                   │
┌─────────────────────────────────────────┐
│  NIVEL 3: PERMISSIONS                   │
│  - IsAuthenticated                      │
│  - IsAdminUser                          │
│  - Custom permissions                   │
└─────────────────────────────────────────┘
                   │
┌─────────────────────────────────────────┐
│  NIVEL 4: VALIDATION                    │
│  - Serializer field validation          │
│  - Custom validators                    │
│  - Type checking (Pydantic)             │
└─────────────────────────────────────────┘
                   │
┌─────────────────────────────────────────┐
│  NIVEL 5: ORM PROTECTION                │
│  - Parameterized queries                │
│  - SQL injection prevention             │
└─────────────────────────────────────────┘
```

---

## 📊 Database Schema (Simplified)

```
LEADS TABLE
├─ id (PK)
├─ first_name, last_name
├─ email (UNIQUE)
├─ phone, phone_type
├─ audience (self/other)
├─ age_range (18_24, 25_34, etc)
├─ page_origin (home/kids/empresas)
├─ status (novo/em_contato/qualificado/perdido/convertido)
├─ created_at, updated_at
└─ Indexes: email, status, created_at

TESTIMONIALS TABLE
├─ id (PK)
├─ quote (TEXT)
├─ author_name, author_role
├─ featured (BOOLEAN)
├─ page_origin (home/empresas/kids/todas)
├─ author_photo (FILE)
├─ order, is_active
└─ Indexes: featured, page_origin

PROFESSORS TABLE
├─ id (PK)
├─ first_name, last_name, bio
├─ email (UNIQUE), phone
├─ photo (FILE)
├─ specialization
├─ experience_years
├─ is_active, max_students
└─ ManyToMany → ProfessorTags

FAQS TABLE
├─ id (PK)
├─ question (UNIQUE per category)
├─ answer (TEXT)
├─ category (general/home/kids/empresas/pricing/metodologia)
├─ order, is_active
├─ keywords (VARCHAR)
└─ Unique constraint: (category, question)

CLIENTS TABLE
├─ id (PK)
├─ name (UNIQUE)
├─ description, website
├─ contact_name, email, phone
├─ industry (tech/finance/retail/etc)
├─ logo, banner (FILES)
├─ employees_trained
├─ partnership_start
├─ order, is_active
└─ Indexes: industry, is_active

STATISTICS TABLE
├─ id (PK)
├─ stat_type (students/companies/success_rate/etc)
├─ label, value
├─ page (home/kids/empresas/todas)
├─ section, order, icon_name, color
├─ is_active
└─ Unique: (stat_type, page, section)
```

---

## 🔌 Endpoints Disponíveis

### LEADS (Implementado)
```
POST   /api/v1/leads/              # Create (público)
GET    /api/v1/leads/              # List (auth)
GET    /api/v1/leads/{id}/         # Detail
PATCH  /api/v1/leads/{id}/         # Update
DELETE /api/v1/leads/{id}/         # Delete
PATCH  /api/v1/leads/{id}/convert/ # Mark as converted
PATCH  /api/v1/leads/{id}/contact/ # Mark as contacted
GET    /api/v1/leads/stats/        # Statistics
```

### TESTIMONIALS (Em desenvolvimento)
```
GET    /api/v1/testimonials/       # List
POST   /api/v1/testimonials/       # Create
GET    /api/v1/testimonials/{id}/
PATCH  /api/v1/testimonials/{id}/
```

### PROFESSORS (Em desenvolvimento)
```
GET    /api/v1/professors/
GET    /api/v1/professors/{id}/
POST   /api/v1/professors/
```

### FAQS (Em desenvolvimento)
```
GET    /api/v1/faqs/?category=home
POST   /api/v1/faqs/
```

### CLIENTS (Em desenvolvimento)
```
GET    /api/v1/clients/
GET    /api/v1/clients/{id}/
POST   /api/v1/clients/
```

### STATISTICS (Em desenvolvimento)
```
GET    /api/v1/statistics/
GET    /api/v1/statistics/?page=home
```

---

## 🚀 Tecnologias Stack

- **Framework**: Django 5.0
- **REST API**: Django REST Framework
- **Auth**: SimpleJWT (JWT tokens)
- **Database**: PostgreSQL
- **Cache**: Redis
- **Async**: Celery + Redis
- **API Docs**: drf-spectacular (Swagger/ReDoc)
- **Testing**: Pytest + pytest-django
- **Code Quality**: Black, Flake8, Pylint
- **Containerization**: Docker + Docker Compose

---

## 📈 Performance & Scaling

### Caching Strategy
```
- Redis para cache de FAQs
- Database query optimization (indexes, select_related)
- Pagination em endpoints (20 items default)
```

### Async Tasks (Celery)
```
- Email notifications
- Lead follow-ups
- Report generation
```

### Database Optimization
```
- Índices em campos frequentemente buscados
- Connection pooling (pgBouncer)
- Slow query logging
```

---

## 🔄 CI/CD Pipeline (GitHub Actions)

```yaml
1. Lint (Black, Flake8)
2. Test (Pytest)
3. Build Docker image
4. Push to registry
5. Deploy (opcional)
```

---

## 📞 Próximas Etapas de Desenvolvimento

1. ✅ Setup Django (CONCLUÍDO)
2. ✅ Modelagem BD (CONCLUÍDO)
3. ✅ Leads API (CONCLUÍDO)
4. ⏳ Testimonials API
5. ⏳ Professors API
6. ⏳ FAQs API
7. ⏳ Clients API
8. ⏳ Statistics API
9. ⏳ Email notifications
10. ⏳ Integração com CRM/Slack
11. ⏳ Autenticação multi-level
12. ⏳ Relatórios & dashboards

---

**Documentação Completa ✅**
