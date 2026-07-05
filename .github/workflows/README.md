# Deployment Workflows

## How it works

```
portfolio_root push → request-pages-deploy.yml
                        ↓ (repository_dispatch)
                  Zack-Zha.github.io → deploy.yml
                        ↓ (actions/deploy-pages@v5)
                  https://zack-zha.github.io
```

## Manual deploy

Go to `Zack-Zha/Zack-Zha.github.io` → Actions → "Deploy portfolio to GitHub Pages" → Run workflow.

## Required secrets

- `PAGES_REPO_DISPATCH_TOKEN` (in `portfolio_root`): fine-grained PAT for `Zack-Zha/Zack-Zha.github.io` with Contents: Read & write.
