SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT=$SCRIPT_DIR/..

PROJECT_TO_COPY_TO=$1

echo "Syncing: $PROJECT_ROOT to PROJECT_TO_COPY_TO"

node_modules/.bin/nodemon \
  -w $PROJECT_ROOT \
  --exec "rsync -av --progress --exclude=node_modules --exclude .git $PROJECT_ROOT $PROJECT_TO_COPY_TO/node_modules/react-native-stripe-checkout/"
