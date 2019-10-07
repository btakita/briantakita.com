#!/bin/sh
BRIANTAKITA_DIR_DEFAULT=~/work/briantakita.com
BRIANTAKITA_DIR="${BRIANTAKITA_DIR:-$BRIANTAKITA_DIR_DEFAULT}"

cd $BRIANTAKITA_DIR
tmux rename-window briantakita
tmux split-window -v $SHELL
tmux send-keys 'tig' 'C-m'
tmux select-pane -t 0

cd $BRIANTAKITA_DIR
tmux new-window $SHELL
tmux rename-window processes
cd $BRIANTAKITA_DIR/packages/_web
tmux send-keys 'tsc-build.sh -w' 'C-m'
tmux split-window -h $SHELL
tmux split-window -v $SHELL
tmux send-keys 'yarn run dev' 'C-m'
tmux select-pane -t 0

cd $BRIANTAKITA_DIR/packages/ctx-core
tmux new-window $SHELL
tmux rename-window ctx-core
tmux split-window -v $SHELL
tmux send-keys 'tig' 'C-m'
tmux select-pane -t 0

cd $BRIANTAKITA_DIR/packages/dev
tmux new-window $SHELL
tmux rename-window dev
tmux split-window -v $SHELL
tmux send-keys 'tig' 'C-m'
tmux select-layout even-vertical
tmux select-pane -t 0

tmux select-window -t 0
