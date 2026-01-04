# Copilot CLI Scripts

This directory contains scripts to run GitHub Copilot CLI with pre-approved tools for UI library development.

## Scripts

### `run-copilot.sh` (Full Access)
Interactive mode with broad tool access for active development.

**Allowed:**
- All tools and operations
- File writing and editing
- Git operations (status, log, diff, branch, checkout, add, commit)
- Package management (pnpm, npm)
- Testing and build commands
- General shell commands

**Denied:**
- `rm` commands (requires manual approval)

**Usage:**
```bash
./run-copilot.sh
```

**Use this when:**
- Working on component development
- Need Copilot to run tests, builds, and manage git
- Want maximum automation with minimal manual approvals
- Trust the current directory (only run in trusted project directories)

---

### `run-copilot-safe.sh` (Restricted Access)
Interactive mode with limited, explicitly approved tools for safer operation.

**Allowed:**
- File write operations
- Git read operations (status, log, diff, branch)
- Git commit operations (add, commit, checkout)
- pnpm commands
- npm test commands

**Requires Manual Approval:**
- `git push` operations
- `rm` commands  
- All other shell commands not explicitly allowed

**Usage:**
```bash
./run-copilot-safe.sh
```

**Use this when:**
- Need more control over what Copilot can execute
- Working in a sensitive codebase
- Want to review most operations before they execute
- Learning Copilot CLI capabilities

---

## Programmatic Mode Examples

You can also use Copilot CLI in programmatic mode with a single prompt:

### Create a new component with tests
```bash
copilot -p "Create a Card component following the Component Creation Loop in COPILOT_INSTRUCTIONS.md" \
  --allow-all-tools \
  --deny-tool 'shell(rm)' \
  --deny-tool 'shell(git push)'
```

### Run tests and commit changes
```bash
copilot -p "Run all tests, verify coverage, and commit the Typography component work" \
  --allow-tool 'shell(pnpm)' \
  --allow-tool 'shell(git)'
```

### Check status and create PR
```bash
copilot -p "Show me the current branch status and help me create a PR for this component" \
  --allow-tool 'shell(git status)' \
  --allow-tool 'shell(git log)' \
  --allow-tool 'shell(gh)'
```

---

## Security Considerations

### ⚠️ Important Safety Notes

1. **Only run in trusted directories** - These scripts give Copilot access to modify files and run commands
2. **Review before trusting permanently** - Don't mark directories as permanently trusted unless you're certain
3. **Backup your work** - Always commit your work before running automated scripts
4. **Understand the risks** - `--allow-all-tools` gives Copilot broad access to your system

### Best Practices

- ✅ Run in project-specific directories
- ✅ Commit changes frequently
- ✅ Review Copilot's proposed actions when prompted
- ✅ Use `run-copilot-safe.sh` when learning or in sensitive environments
- ✅ Keep `git push` and `rm` commands requiring manual approval
- ❌ Don't run from home directory or system directories
- ❌ Don't blindly approve all operations
- ❌ Don't use in directories with sensitive data without understanding implications

---

## Customization

You can modify these scripts to adjust the allowed/denied tools based on your needs:

```bash
# Allow a specific tool
copilot --allow-tool 'shell(COMMAND)'

# Deny a specific tool (takes precedence)
copilot --deny-tool 'shell(COMMAND)'

# Allow all tools
copilot --allow-all-tools

# Allow specific git subcommands
copilot --allow-tool 'shell(git commit)' --allow-tool 'shell(git status)'

# Allow MCP server tools
copilot --allow-tool 'MCP_SERVER_NAME'
```

---

## Integration with COPILOT_INSTRUCTIONS.md

These scripts are designed to work with the component development workflow defined in `COPILOT_INSTRUCTIONS.md`:

1. **Git branching** - Scripts allow git operations for creating feature branches
2. **Testing** - Allow running pnpm test commands
3. **Building** - Allow pnpm build operations
4. **Committing** - Allow git add/commit for saving progress
5. **Safety** - Deny `git push` and `rm` to prevent accidental data loss

---

## Troubleshooting

### Script won't execute
```bash
chmod +x run-copilot.sh
chmod +x run-copilot-safe.sh
```

### Copilot CLI not found
Install GitHub Copilot CLI:
```bash
gh extension install github/gh-copilot
```

### Trust directory prompt
When prompted, choose:
- **This session only** - For one-time use
- **This and future sessions** - Only for trusted project directories

You can manage trusted directories in `~/.copilot/config.json`

---

## Further Reading

- [GitHub Copilot CLI Documentation](https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli)
- [Allowing tools without manual approval](https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli#allowing-tools-to-be-used-without-manual-approval)
- [Security considerations](https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli#security-considerations)
