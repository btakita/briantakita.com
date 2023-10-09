#!/bin/sh
LOG_STREAM_NAME=$1
if [ -z "$LOG_STREAM_NAME" ]; then
	LOG_STREAM_NAME=$(describe-log-streams.sh | jq '.logStreams[0].logStreamName' | sed -e 's/^"//' -e 's/"$//')
fi
aws logs get-log-events --log-group-name /aws/lambda/bloomfieldnetworks --log-stream-name "$LOG_STREAM_NAME" --output text | less
