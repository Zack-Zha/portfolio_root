# Deploy Guide —  Portfolio

## Repos

| Role | Repo | Branch |
|------|------|--------|
| Source | `Zack-Zha/portfolio_root` | `main` |
| Pages | `Zack-Zha/Zack-Zha.github.io` | `main` |

Pages Settings: **Deploy from a branch** → `main` → `/ (root)`

## Deploy Steps

### 0. Verify Git Identity (BEFORE any commit!)

Pages branch deployment checks the commit author's repo permissions.
If the author is not an admin/maintainer, Pages build will **silently fail**.

```bash
# Must be Zack-Zha (owner). NEVER Anti-View (read-only).
git config user.name   # must be "Zack-Zha"
git config user.email  # must be a Zack-Zha verified email
```

If wrong:
```bash
git config user.name "Zack-Zha"
git config user.email "118870826+Zack-Zha@users.noreply.github.com"
```

### 1. Build

```bash
npm run build
```

Verify:

```bash
ls dist/.nojekyll        # must exist
ls dist/index.html        # must exist
ls dist/_astro/           # must contain built assets
```

### 2. Push source

```bash
git add -A
git commit -m "..."
git push origin main
```

### 3. Deploy to Pages

**NEVER do this (breaks Pages build):**
```bash
# ❌ NEVER: fresh git init + force push from dist/
cd dist && git init && git push --force ...
```

**ALWAYS do this:**
```bash
# Clone the pages repo, copy dist in, commit, push
cd /tmp
rm -rf Zack-Zha.github.io
git clone https://github.com/Zack-Zha/Zack-Zha.github.io.git
cd Zack-Zha.github.io
git rm -rf .
cp -a "E:/new.portfolio - 副本/dist/." .
git add -A
git commit -m "Deploy: $(date +%Y-%m-%d-%H%M)"
git push
```

Key: `cp -a` preserves dotfiles (`.nojekyll`). Plain `cp -r dist/*` would miss them.

### 4. Verify

Wait ~30s for Pages build, then check:

```bash
# Check Pages build status
curl -s -H "Authorization: token $(echo url=https://github.com | git credential fill | grep password= | cut -d= -f2)" \
  "https://api.github.com/repos/Zack-Zha/Zack-Zha.github.io/pages/builds?per_page=1"

# Verify resources
curl -sI "https://zack-zha.github.io/"
curl -sI "https://zack-zha.github.io/.nojekyll"

# Verify _astro assets (get filenames from dist/index.html)
grep -oE '_astro/[^"]+\.(css|js)' dist/index.html | while read f; do
  code=$(curl -sI "https://zack-zha.github.io/$f" | head -1 | awk '{print $2}')
  echo "$code $f"
done
```

## Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| `_astro/*` 404 on Pages, 200 on raw | GitHub Pages build failed | Check API: `GET /repos/.../pages/builds` |
| All Pages builds "errored" | Force-pushed from fresh git init | Re-push via normal clone+commit flow |
| `.nojekyll` missing | Used `cp -r dist/*` instead of `cp -a dist/.` | Always use `cp -a dist/.` |
| `git commit` says "nothing to commit" | Dist content unchanged from last deploy | Nothing to do, skip |
| Pages build "errored" but push succeeded | Commit author lacks admin permission on pages repo | `git config user.name` must be `Zack-Zha`, not `Anti-View` |
| `actions/deploy-pages@v5` keeps failing | Stale GitHub Actions workflow from previous Pages config | Toggle Pages Source in repo settings, or ignore — branch deploy still works |
