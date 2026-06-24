#!/usr/bin/env bash
set -euo pipefail

APP="scientia-editor"

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
MAGENTA='\033[0;35m'
NC='\033[0m'

info()  { printf "${CYAN}::${NC} %s\n" "$*"; }
ok()    { printf "${GREEN}==>${NC} %s\n" "$*"; }
warn()  { printf "${YELLOW}==>${NC} %s\n" "$*"; }

run_with_spinner() {
    local pid=$1 msg=$2
    local spin='-\|/'
    local i=0
    while kill -0 "$pid" 2>/dev/null; do
        printf "\r${MAGENTA}::${NC} %s ${MAGENTA}%c${NC}" "$msg" "${spin:$i:1}"
        i=$(( (i+1) % 4 ))
        sleep 0.1
    done
    printf "\r${GREEN}::${NC} %s ${GREEN}done${NC}\n" "$msg"
}

install_rust_if_missing() {
    if command -v cargo &>/dev/null; then
        ok "Rust already installed ($(cargo --version))"
        return 0
    fi
    warn "Rust not found — installing via rustup..."
    local rustup_url="https://sh.rustup.rs"
    if [[ "$OSTYPE" == "msys"* || "$OSTYPE" == "cygwin"* ]]; then
        rustup_url="https://win.rustup.rs"
        info "Downloading rustup-init.exe..."
        curl -# -fL "$rustup_url" -o /tmp/rustup-init.exe
        /tmp/rustup-init.exe -y --no-modify-path > /dev/null 2>&1 &
        run_with_spinner $! "Installing Rust via rustup"
        wait $! 2>/dev/null || true
        rm -f /tmp/rustup-init.exe
        export PATH="$HOME/.cargo/bin:$PATH"
    else
        info "Downloading rustup..."
        curl --proto '=https' --tlsv1.2 -sSf "$rustup_url" | sh -s -- -y > /dev/null 2>&1 &
        run_with_spinner $! "Installing Rust via rustup"
        wait $! 2>/dev/null || true
        export PATH="$HOME/.cargo/bin:$PATH"
    fi
    if ! command -v cargo &>/dev/null; then
        echo "Error: Rust installation failed."
        echo "Try manually: https://rustup.rs"
        exit 1
    fi
    ok "Rust installed ($(cargo --version))"
}

main() {
    echo ""
    printf "  ${CYAN}╭──────────────────────────────────────────╮${NC}\n"
    printf "  ${CYAN}│${NC}  Installing ${GREEN}%s${NC}              ${CYAN}│${NC}\n" "$APP"
    printf "  ${CYAN}╰──────────────────────────────────────────╯${NC}\n"
    echo ""

    install_rust_if_missing
    export PATH="$HOME/.cargo/bin:$PATH"

    info "Installing $APP via cargo..."
    cargo install "$APP" > /dev/null 2>&1 &
    run_with_spinner $! "Compiling and installing $APP"
    wait $! 2>/dev/null || true

    echo ""
    if command -v "$APP" &>/dev/null; then
        ok "$APP installed! Run: $APP"
    else
        warn "$APP installed but not in PATH."
        info "Add to your shell config:"
        echo '  export PATH="$HOME/.cargo/bin:$PATH"'
    fi
    echo ""
}

main "$@"
