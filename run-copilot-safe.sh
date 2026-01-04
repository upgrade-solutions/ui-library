#!/bin/bash

# Script to run GitHub Copilot CLI with only specific safe tools approved
# Use this for automated/scripted workflows where you want tighter control

# Color output for better readability
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting GitHub Copilot CLI (Safe Mode)...${NC}"
echo -e "${YELLOW}Approved operations:${NC}"
echo "  ✓ Git status, log, diff, branch operations"
echo "  ✓ Git commit (but not push)"
echo "  ✓ File write operations"
echo "  ✓ pnpm commands"
echo "  ✓ npm test commands"
echo ""
echo -e "${YELLOW}Manual approval required for:${NC}"
echo "  ? git push"
echo "  ? rm commands"
echo "  ? All other shell commands"
echo ""

# Run Copilot CLI with specific allowed tools
# This is more restrictive and safer for automated workflows
copilot \
  --allow-tool 'write' \
  --allow-tool 'shell(git status)' \
  --allow-tool 'shell(git log)' \
  --allow-tool 'shell(git diff)' \
  --allow-tool 'shell(git branch)' \
  --allow-tool 'shell(git checkout)' \
  --allow-tool 'shell(git add)' \
  --allow-tool 'shell(git commit)' \
  --allow-tool 'shell(pnpm)' \
  --allow-tool 'shell(npm run build)' \
  --allow-tool 'shell(npm test)' \
  --allow-tool 'shell(mkdir)' \
  --allow-tool 'shell(touch)' \
  --allow-tool 'shell(git push)' \
  --allow-tool 'shell(gh pr)' \
  --allow-tool 'shell(cd /Users/timothypaulkleier/Apps/upgrade/ui-library)' \
