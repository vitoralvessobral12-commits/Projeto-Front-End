# Como contribuir

## Branches (Git Flow simplificado)

| Branch | Uso |
| --- | --- |
| `main` | Sempre estável. Só recebe merge de `develop` via Pull Request. |
| `develop` | Integração do desenvolvimento. Recebe as features via Pull Request. |
| `feature/<nome>` | Uma por entrega, sempre criada a partir de `develop`. |
| `fix/<nome>` | Correção de bug, a partir de `develop`. |
| `docs/<nome>` | Documentação, a partir de `develop`. |

Branches planejadas: `feature/setup-inicial`, `feature/layout-header-footer`, `feature/home`,
`feature/lista-produtos`, `feature/detalhe-produto`, `feature/consumo-api`, `docs/readme`.

## Padrão de commits (Conventional Commits)

```
tipo(escopo): descrição curta no imperativo
```

| Tipo | Quando usar |
| --- | --- |
| `feat` | Nova funcionalidade |
| `fix` | Correção de bug |
| `style` | Estilo/CSS, sem mudar lógica |
| `refactor` | Refatoração, sem mudar comportamento |
| `docs` | Documentação |
| `chore` | Configuração e tarefas gerais |

Exemplos: `feat(header): adiciona barra de busca`, `chore: configura estrutura de pastas`.

Faça commits pequenos e frequentes, **uma mudança lógica por commit**.

## Fluxo de trabalho

```bash
git checkout develop
git pull
git checkout -b feature/nome
# trabalhe e commite com frequência
git status
git diff
git add <arquivos>
git commit -m "feat(escopo): descrição"
git push -u origin feature/nome
```

1. Abra um Pull Request de `feature/nome` → `develop` no GitHub, com título e descrição (o template já aparece).
2. Após o merge, delete a branch e atualize a `develop` local:
   ```bash
   git checkout develop
   git pull
   git branch -d feature/nome
   ```
3. Ao fechar uma entrega, abra um PR de `develop` → `main` e crie uma tag de versão.

## Regras de ouro

- Nunca commitar direto na `main`.
- Nunca commitar `.env` ou chaves (já estão no `.gitignore`).
- Rodar `git status` e `git diff` antes de cada commit.

## Resolvendo conflitos de merge

Conflitos acontecem quando duas branches alteram as mesmas linhas.

```bash
git checkout feature/nome
git pull origin develop      # traz a develop atualizada para sua branch
```

O Git marca os trechos em conflito no arquivo:

```
<<<<<<< HEAD
sua versão
=======
versão que veio da develop
>>>>>>> develop
```

Edite o arquivo deixando o código correto, apague os marcadores e finalize:

```bash
git add arquivo-resolvido.jsx
git commit
git push
```

## Desfazendo erros

| Situação | Comando |
| --- | --- |
| Descartar alterações não salvas de um arquivo | `git restore arquivo.jsx` |
| Tirar um arquivo do `git add` (stage) | `git restore --staged arquivo.jsx` |
| Desfazer o último commit **local** mantendo as alterações | `git reset --soft HEAD~1` |
| Corrigir a mensagem do último commit (ainda não enviado) | `git commit --amend -m "nova mensagem"` |
| Desfazer um commit **já enviado** ao GitHub | `git revert <hash>` (cria um novo commit que desfaz o anterior) |

> Use `reset` apenas em commits que ainda não foram enviados (push). Para o que já está no GitHub, use `revert`.

## Tags de versão

Marque cada entrega na `main`:

```bash
git checkout main
git pull
git tag -a v0.1.0 -m "Setup inicial com rotas"
git push origin v0.1.0
```

Sugestão: `v0.1.0` (setup), `v0.2.0` (layout), `v0.3.0` (home), `v0.4.0` (lista),
`v0.5.0` (detalhe), `v0.6.0` (API), `v1.0.0` (entrega final).
