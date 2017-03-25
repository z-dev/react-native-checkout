CURRENT_DIR="$( pwd )"

PROJECT_TO_COPY_FROM=$CURRENT_DIR/$1
PROJECT_TO_COPY_TO=$CURRENT_DIR/$2

echo "Syncing: $PROJECT_TO_COPY_FROM to $PROJECT_TO_COPY_TO"

node_modules/.bin/nodemon \
  -w $PROJECT_TO_COPY_FROM \
  --exec "rsync -av --progress --exclude=node_modules --exclude .git $PROJECT_TO_COPY_FROM/* $PROJECT_TO_COPY_TO/node_modules/react-native-stripe-checkout/"
