#!/bin/bash

# Script to run GitHub Copilot CLI with pre-approved tools for UI library development
# This allows Copilot to perform common tasks without manual approval

# Color output for better readability
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting GitHub Copilot CLI with approved tools...${NC}"
echo -e "${YELLOW}Approved operations:${NC}"
echo "  ✓ Git operations (commit, push, branch, checkout, status, log, diff)"
echo "  ✓ File write operations"
echo "  ✓ Package management (pnpm)"
echo "  ✓ Testing and build commands"
echo "  ✓ General shell commands"
echo ""
echo -e "${YELLOW}Denied operations:${NC}"
echo "  ✗ git push (requires manual approval for safety)"
echo "  ✗ rm commands (requires manual approval for safety)"
echo ""

# Run Copilot CLI with allowed tools
# Allow all tools except dangerous ones (rm, git push)
copilot \
  --allow-all-tools \
  --deny-tool 'shell(rm)' \
