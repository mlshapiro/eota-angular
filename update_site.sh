#!/bin/bash

s3cmd sync -v --delete-removed ./app/ s3://etnaoldtime.com/