# Rollback Evidence

This project is designed to be submitted with Git history and deployment evidence.

## Recommended evidence to capture

1. Take a screenshot of the working production deployment.
2. Make a small test change and commit it.
3. Deploy the test change.
4. Revert/rollback to the previous working commit.
5. Take a screenshot showing the rollback result.
6. Keep the commit history visible in GitHub.

## Git rollback commands

```bash
git log --oneline --decorate -5
git revert <bad-commit-hash>
git push origin main
```

Using `git revert` creates a new commit that reverses the selected change without rewriting shared history.

## Vercel rollback

If using Vercel:
1. Open the project dashboard.
2. Open the Deployments list.
3. Find the last known-good deployment.
4. Use the deployment's rollback/promote-to-production option when available.
5. Open the production URL and verify the project still works.

## Submission note

Replace this file's checklist with screenshots/links from your actual deployment and rollback before claiming rollback evidence is complete. Do not fabricate deployment screenshots or commit hashes.
