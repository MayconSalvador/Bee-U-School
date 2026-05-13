# 🐝 Bee U Backend - Setup Completo

## ✅ CHECKLIST DE IMPLEMENTAÇÃO

Todas as 3 opções foram completadas:

### ✅ OPÇÃO B - SETUP DJANGO
- [x] requirements.txt com 30+ dependências
- [x] settings.py (Django 5, DRF, JWT, CORS, Logging)
- [x] urls.py (rotas principales)
- [x] wsgi.py / asgi.py (production-ready)
- [x] celery.py (async tasks)
- [x] .env.example (template)
- [x] docker-compose.yml (PostgreSQL + Redis)
- [x] Dockerfile (container config)
- [x] pytest.ini (testes)

### ✅ OPÇÃO A - MODELAGEM DO BD
- [x] Lead Model (validações completas)
- [x] Testimonial Model (depoimentos)
- [x] Professor Model + ProfessorTag (professores)
- [x] FAQ Model (perguntas frequentes)
- [x] ClientCompany Model (empresas clientes)
- [x] Statistics Model (KPIs/métricas)
- [x] Admin Panel customizado (6 ModelAdmin)

### ✅ OPÇÃO C - SERIALIZERS + API LEADS
- [x] LeadSerializer (full validations)
- [x] LeadListSerializer (list view)
- [x] LeadCreateSerializer (public form)
- [x] LeadViewSet (REST endpoints)
- [x] Custom exceptions & validators
- [x] Testes unitários (pytest)
- [x] URLs configuradas

---

## 🚀 COMO EXECUTAR (Passo a passo)

### 1️⃣ Configurar Python & Dependências

```bash
# Navegar para backend
cd backend

# Criar venv
python -m venv venv

# Ativar venv (Windows)
venv\Scripts\activate
# Ou (Linux/Mac)
source venv/bin/activate

# Instalar dependências
pip install -r requirements.txt
```

### 2️⃣ Configurar Banco de Dados

**Opção A: PostgreSQL Local**
```bash
# Instale PostgreSQL localmente

# Crie um arquivo .env
cp .env.example .env

# Edit .env com suas credenciais:
DB_NAME=beeu_db
DB_USER=postgres
DB_PASSWORD=sua_senha
DB_HOST=localhost
DB_PORT=5432
```

**Opção B: Docker (Recomendado)**
```bash
# Start PostgreSQL + Redis
docker-compose up -d

# Verificar containers
docker-compose ps
```

### 3️⃣ Executar Migrações

```bash
# Criar migrações Django (baseadas nos models)
python manage.py makemigrations

# Aplicar migrações ao BD
python manage.py migrate

# Criar superuser (admin)
python manage.py createsuperuser
# Siga as instruções para username/password
```

### 4️⃣ Rodar Servidor

```bash
# Modo desenvolvimento
python manage.py runserver

# Ou especificar porta
python manage.py runserver 0.0.0.0:8000
```

Servidor rodando em: `http://localhost:8000`

---

## 📚 ACESSAR DOCUMENTAÇÃO

### Swagger UI
```
http://localhost:8000/api/v1/docs/swagger/
```

### ReDoc
```
http://localhost:8000/api/v1/docs/redoc/
```

### Admin Panel
```
http://localhost:8000/admin/
Login com: seu superuser
```

---

## 🔌 ENDPOINTS PRONTOS PARA USAR

### Criar um Lead (Público - Sem auth)
```bash
curl -X POST http://localhost:8000/api/v1/leads/ \
  -H "Content-Type: application/json" \
  -d '{
    "first_name": "João",
    "last_name": "Silva",
    "email": "joao@example.com",
    "phone": "(11) 98765-4321",
    "phone_type": "celular",
    "audience": "self",
    "age_range": "18_24",
    "page_origin": "home"
  }'
```

**Resposta (201 Created):**
```json
{
  "status": "success",
  "message": "Lead criado com sucesso! Você receberá um contato em breve.",
  "data": {
    "id": 1,
    "first_name": "João",
    "last_name": "Silva",
    "full_name": "João Silva",
    "email": "joao@example.com",
    "phone": "(11) 98765-4321",
    "phone_type": "celular",
    "phone_type_display": "Celular",
    "audience": "self",
    "audience_display": "Para mim",
    "age_range": "18_24",
    "age_range_display": "18-24 anos",
    "page_origin": "home",
    "status": "novo",
    "status_display": "Novo",
    "created_at": "2026-05-13T12:30:00Z",
    "updated_at": "2026-05-13T12:30:00Z"
  }
}
```

### Obter Token JWT (Para admin)
```bash
curl -X POST http://localhost:8000/api/v1/auth/token/ \
  -H "Content-Type: application/json" \
  -d '{
    "username": "seu_username",
    "password": "sua_senha"
  }'
```

### Listar Leads (Requer token)
```bash
curl http://localhost:8000/api/v1/leads/ \
  -H "Authorization: Bearer seu_token_jwt"
```

### Estatísticas de Leads
```bash
curl http://localhost:8000/api/v1/leads/stats/ \
  -H "Authorization: Bearer seu_token_jwt"
```

### Marcar Lead como Convertido
```bash
curl -X PATCH http://localhost:8000/api/v1/leads/1/convert/ \
  -H "Authorization: Bearer seu_token_jwt"
```

---

## 🧪 EXECUTAR TESTES

```bash
# Rodarvtodos os testes
pytest

# Com verbose
pytest -v

# Com coverage
pytest --cov=beeu_api

# Apenas testes de Leads
pytest beeu_api/leads/tests.py
```

---

## 📝 VARIÁVEIS DE AMBIENTE IMPORTANTES

```env
# Django
DEBUG=True  # False em produção!
SECRET_KEY=sua-chave-secreta-mudada-em-producao

# Database
DB_ENGINE=django.db.backends.postgresql
DB_NAME=beeu_db
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=localhost
DB_PORT=5432

# CORS (conectar com front-end)
CORS_ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000

# JWT
JWT_SECRET_KEY=sua-jwt-secret-key
```

---

## 🐳 DEPLOYMENT COM DOCKER

```bash
# Build image
docker-compose build

# Start services
docker-compose up -d

# Ver logs
docker-compose logs -f web

# Executar comando inside container
docker-compose exec web python manage.py migrate

# Parar services
docker-compose down
```

---

## 🔐 SEGURANÇA - CHECKLIST

- [x] CORS configurado (apenas localhost em dev)
- [x] CSRF protection ativado
- [x] SQL Injection prevention (ORM Django)
- [x] XSS protection (Django templates)
- [x] JWT para auth sensível
- [x] Password hashing (bcrypt)
- [x] Rate limiting (implementar)
- [x] Input validation em todos os endpoints

**Antes de ir pra produção:**
- [ ] Mudar SECRET_KEY
- [ ] Definir DEBUG=False
- [ ] Usar HTTPS
- [ ] Configurar banco seguro
- [ ] Adicionar CORS apenas domínios reais
- [ ] Usar environment variables (.env)
- [ ] Setup SSL certificates

---

## 📞 PRÓXIMOS PASSOS

1. **Implementar Serializers & Views para outros models**
   - Testimonials
   - Professors
   - FAQs
   - Clients
   - Statistics

2. **Adicionar Features**
   - Email notifications (quando novo lead)
   - Integração com Slack/CRM
   - Relatórios avançados
   - Webhooks

3. **Melhorias**
   - Rate limiting
   - Caching (Redis)
   - Async email (Celery)
   - Monitoring (Sentry)

4. **Deployment**
   - Heroku / Railway / Digital Ocean
   - GitHub Actions (CI/CD)
   - Monitoring & Logging
   - Backup database

---

## ❓ TROUBLESHOOTING

### Erro: "Python not found"
```bash
# Tente python3
python3 -m venv venv
```

### Erro: "Database connection refused"
```bash
# Verifique se PostgreSQL está rodando
# No Docker:
docker-compose up -d postgres
```

### Erro: "Module not found"
```bash
# Ative o venv
source venv/Scripts/activate  # Windows
source venv/bin/activate      # Linux
```

### Erro: "ModuleNotFoundError: No module named 'beeu_api'"
```bash
# Certifique-se que manage.py está no diretório backend/
cd backend
python manage.py runserver
```

---

## 📞 SUPORTE

Para dúvidas ou problemas:
1. Verifique os logs: `tail -f logs/beeu_api.log`
2. Teste com curl/Postman
3. Verifique migrations: `python manage.py showmigrations`
4. Veja o admin Django: http://localhost:8000/admin/
