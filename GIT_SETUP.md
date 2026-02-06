# 🔗 Guia de Conexão Git com Antigravity

## ✅ Status Atual

O repositório Git foi **inicializado com sucesso** no projeto!

- ✅ Repositório Git inicializado
- ✅ Primeiro commit criado
- ✅ Todos os arquivos rastreados
- ✅ Branch principal: `master`

## 📊 Estrutura do Projeto

```
d:\Leandro - Desentupidora/
├── .git/               # Repositório Git (oculto)
├── .gitignore          # Arquivos ignorados
├── README.md           # Documentação principal
├── index.html          # Página principal
├── style.css           # Estilos cinematográficos
├── script.js           # JavaScript interativo
└── images/             # Pasta para imagens
```

## 🌐 Conectar com GitHub/GitLab/Bitbucket

### Opção 1: GitHub

#### 1. Criar Repositório no GitHub
1. Acesse: https://github.com/new
2. Nome do repositório: `desentupidora-sul-rs`
3. **NÃO** marque "Initialize with README"
4. Clique em "Create repository"

#### 2. Conectar o Repositório Local

```bash
# Adicionar o remote (substitua SEU_USUARIO pelo seu username)
git remote add origin https://github.com/SEU_USUARIO/desentupidora-sul-rs.git

# Renomear branch para main (se preferir)
git branch -M main

# Fazer push inicial
git push -u origin main
```

#### 3. Comandos para Push Futuro

```bash
# Verificar mudanças
git status

# Adicionar arquivos modificados
git add .

# Criar commit
git commit -m "Descrição das mudanças"

# Enviar para GitHub
git push
```

---

### Opção 2: GitLab

#### 1. Criar Projeto no GitLab
1. Acesse: https://gitlab.com/projects/new
2. Nome: `desentupidora-sul-rs`
3. Visibilidade: Private ou Public
4. **NÃO** marque "Initialize with README"
5. Clique em "Create project"

#### 2. Conectar Repositório

```bash
# Adicionar remote
git remote add origin https://gitlab.com/SEU_USUARIO/desentupidora-sul-rs.git

# Renomear branch (opcional)
git branch -M main

# Push inicial
git push -u origin main
```

---

### Opção 3: Bitbucket

#### 1. Criar Repositório no Bitbucket
1. Acesse: https://bitbucket.org/repo/create
2. Nome: `desentupidora-sul-rs`
3. **NÃO** marque "Add README"
4. Clique em "Create repository"

#### 2. Conectar Repositório

```bash
# Adicionar remote
git remote add origin https://bitbucket.org/SEU_USUARIO/desentupidora-sul-rs.git

# Push inicial
git push -u origin master
```

---

## 🔐 Autenticação

### GitHub (Token de Acesso Pessoal)

1. Acesse: https://github.com/settings/tokens
2. Clique em "Generate new token (classic)"
3. Marque: `repo` (Full control of private repositories)
4. Gere e copie o token
5. Use o token como senha ao fazer push:

```bash
Username: seu-username
Password: ghp_seu_token_aqui
```

### Salvar Credenciais (Opcional)

```bash
# Salvar credenciais permanentemente
git config --global credential.helper store

# Ou temporariamente (15 minutos)
git config --global credential.helper cache
```

---

## 📝 Comandos Git Essenciais

### Verificar Status
```bash
git status
```

### Ver Histórico
```bash
# Ver todos os commits
git log

# Ver de forma compacta
git log --oneline

# Ver últimos 5 commits
git log -5
```

### Fazer Mudanças

```bash
# 1. Modificar arquivos no editor

# 2. Ver o que mudou
git diff

# 3. Adicionar mudanças
git add .                    # Adicionar tudo
git add index.html           # Adicionar arquivo específico

# 4. Criar commit
git commit -m "Mensagem descritiva"

# 5. Enviar para remoto
git push
```

### Atualizar do Remoto

```bash
# Baixar e mesclar mudanças
git pull

# Ver remotos configurados
git remote -v
```

### Branches

```bash
# Criar nova branch
git branch nova-feature

# Mudar de branch
git checkout nova-feature

# Criar e mudar ao mesmo tempo
git checkout -b nova-feature

# Voltar para master/main
git checkout master

# Listar branches
git branch
```

---

## 🚀 Deploy Automático

### GitHub Pages (Gratuito)

1. Faça push para GitHub
2. Vá em Settings > Pages
3. Source: Deploy from branch
4. Branch: `main` ou `master`
5. Folder: `/ (root)`
6. Clique em "Save"
7. Aguarde 1-2 minutos
8. Acesse: `https://SEU_USUARIO.github.io/desentupidora-sul-rs`

### Netlify (Gratuito)

1. Acesse: https://app.netlify.com/
2. Clique em "Add new site" > "Import an existing project"
3. Conecte seu GitHub/GitLab/Bitbucket
4. Selecione o repositório
5. Build settings:
   - Build command: (deixe vazio)
   - Publish directory: `/`
6. Clique em "Deploy site"
7. Site estará online em segundos!

### Vercel (Gratuito)

1. Acesse: https://vercel.com/new
2. Importe o repositório Git
3. Configure:
   - Framework Preset: Other
   - Root Directory: `./`
4. Clique em "Deploy"
5. Pronto!

---

## 🔄 Workflow Recomendado

### Desenvolvimento Diário

```bash
# 1. Sempre puxar mudanças primeiro
git pull

# 2. Fazer suas modificações nos arquivos

# 3. Ver o que mudou
git status

# 4. Adicionar mudanças
git add .

# 5. Commitar com mensagem clara
git commit -m "feat: adiciona nova seção de depoimentos"

# 6. Enviar para remoto
git push
```

### Mensagens de Commit (Convenção)

```bash
# Novos recursos
git commit -m "feat: adiciona botão de orçamento"

# Correções
git commit -m "fix: corrige responsividade no mobile"

# Melhorias de estilo
git commit -m "style: ajusta espaçamento do header"

# Documentação
git commit -m "docs: atualiza README com instruções"

# Refatoração
git commit -m "refactor: reorganiza CSS por seções"
```

---

## 🛡️ Segurança

### Arquivos a NÃO Commitar

Já configurado no `.gitignore`:
- ❌ `node_modules/`
- ❌ `.env` (variáveis de ambiente)
- ❌ Arquivos temporários
- ❌ Logs
- ❌ Cache

### Se Commitou por Engano

```bash
# Remover arquivo do Git (mas manter no disco)
git rm --cached arquivo.txt

# Commitar a remoção
git commit -m "remove arquivo sensível"

# Push
git push
```

---

## 📞 Suporte

### Comandos de Ajuda

```bash
# Ajuda geral
git help

# Ajuda para comando específico
git help commit
git help push
git help branch
```

### Links Úteis

- **Documentação Git:** https://git-scm.com/doc
- **GitHub Docs:** https://docs.github.com/
- **GitLab Docs:** https://docs.gitlab.com/
- **Aprender Git:** https://learngitbranching.js.org/

---

## ✨ Próximos Passos

1. **Criar conta** no GitHub/GitLab/Bitbucket (se ainda não tem)
2. **Criar repositório remoto** seguindo o guia acima
3. **Conectar** com `git remote add origin`
4. **Fazer push** com `git push -u origin main`
5. **Configurar deploy** automático (GitHub Pages, Netlify, ou Vercel)

---

**🚰 Desentupidora Sul RS** - Projeto gerenciado com Git
