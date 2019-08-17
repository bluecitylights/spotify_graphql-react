#!/bin/bash

set -e

echo "before docker"
docker build -t ${GCLOUD_HOSTNAME}/${GCLOUD_PROJECT_ID}/${DOCKER_IMAGE_NAME}:$TRAVIS_COMMIT .
echo "after docker"
gcloud auth activate-service-account --key-file ${HOME}/gcloud-service-key.json
echo "after auth docker"
# gcloud --quiet config set project $PROJECT_NAME_STG
# gcloud --quiet config set container/cluster $CLUSTER_NAME_STG
# gcloud --quiet config set compute/zone ${CLOUDSDK_COMPUTE_ZONE}
# gcloud --quiet container clusters get-credentials $CLUSTER_NAME_STG

gcloud docker push ${GCLOUD_HOSTNAME}/${GCLOUD_PROJECT_ID}/${DOCKER_IMAGE_NAME}
echo "after push"
