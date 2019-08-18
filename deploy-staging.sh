#!/bin/bash
docker build -t $GCLOUD_HOSTNAME/$GCLOUD_PROJECT_ID/$DOCKER_IMAGE_NAME:$TRAVIS_COMMIT .
echo -e $GCLOUD_SERVICE_KEY | base64 --decode -i > $HOME/gcloud-credentials.json
gcloud auth activate-service-account --key-file $HOME/gcloud-credentials.json
gcloud config set project $GCLOUD_PROJECT_ID
gcloud --quiet config set compute/zone $GCLOUD_COMPUTE_ZONE
cat $HOME/gcloud-credentials.json | docker login -u _json_key $GCLOUD_HOSTNAME
docker push $GCLOUD_HOSTNAME/$GCLOUD_PROJECT_ID/$DOCKER_IMAGE_NAME