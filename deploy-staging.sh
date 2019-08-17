#!/bin/bash

set -e

docker build -t ${GCLOUD_HOSTNAME}/${GCLOUD_PROJECT_ID}/${DOCKER_IMAGE_NAME}:$TRAVIS_COMMIT .
echo "after docker"
$GCLOUD_SERVICE_KEY_STG | base64 --decode -i > ${HOME}/gcloud-service-key.json
gcloud auth activate-service-account --key-file ${HOME}/gcloud-service-key.json
echo "after auth"
gcloud --quiet config set project ${GCLOUD_PROJECT_ID}
# gcloud --quiet config set container/cluster $CLUSTER_NAME_STG
gcloud --quiet config set compute/zone ${GCLOUD_COMPUTE_ZONE}
# gcloud --quiet container clusters get-credentials $CLUSTER_NAME_STG

gcloud docker push ${GCLOUD_HOSTNAME}/${GCLOUD_PROJECT_ID}/${DOCKER_IMAGE_NAME}
echo "after push"
