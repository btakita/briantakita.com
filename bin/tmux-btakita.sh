#!/bin/sh
BTAKITA_DIR_DEFAULT=~/work/btakita.github.io/
BTAKITA_DIR="${BTAKITA_DIR:-$BTAKITA_DIR_DEFAULT}"

tmux rename-window censible-core
tmux send-keys "cd $BTAKITA_DIR" 'C-m'
cd $BTAKITA_DIR
tmux split-window -v
tmux send-keys 'tig' 'C-m'
tmux select-pane -t 0

tmux new-window
tmux rename-window ctx-core
tmux send-keys 'cd packages/ctx-core' 'C-m'
cd packages/ctx-core
tmux split-window -v
tmux send-keys 'tig' 'C-m'
tmux select-pane -t 0

cd $BTAKITA_DIR

tmux new-window
tmux rename-window util
tmux split-window -v
tmux split-window -v
tmux select-layout even-vertical
tmux select-pane -t 0

cd $BTAKITA_DIR/packages/web

tmux new-window
tmux rename-window web
tmux split-window -v
tmux send-keys 'yarn run dev' 'C-m'
tmux select-layout even-vertical
tmux select-pane -t 0

cd $BTAKITA_DIR/build

tmux new-window
tmux rename-window build
tmux split-window -v
tmux send-keys 'tig' 'C-m'
tmux select-layout even-vertical
tmux select-pane -t 0

tmux select-window -t 0
